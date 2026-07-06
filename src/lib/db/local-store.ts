export type StoredRecord<T> = {
  id: string;
  data: T;
};

const hasWindow = typeof window !== 'undefined';

export function createLocalStorageStore<T extends { id: string }>(opts: {
  key: string;
  seed?: T[];
}) {
  const { key, seed = [] } = opts;

  const read = (): T[] => {
    if (!hasWindow) return seed;
    try {
      const raw = window.localStorage.getItem(key);
      if (!raw) return seed;
      const parsed = JSON.parse(raw) as T[];
      return Array.isArray(parsed) ? parsed : seed;
    } catch {
      return seed;
    }
  };

  const write = (items: T[]) => {
    if (!hasWindow) return;
    window.localStorage.setItem(key, JSON.stringify(items));
  };

  const list = () => read();

  const upsert = (item: T) => {
    const items = read();
    const idx = items.findIndex((x) => x.id === item.id);
    if (idx >= 0) items[idx] = item;
    else items.unshift(item);
    write(items);
    return item;
  };

  const remove = (id: string) => {
    const items = read();
    const next = items.filter((x) => x.id !== id);
    write(next);
    return next;
  };

  const clear = () => write(seed);

  return { list, upsert, remove, clear };
}


export function MaasaiPatternIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" stroke="none" />
      <path d="M6 6h12" stroke="white" />
      <path d="M6 12h12" stroke="white" />
      <path d="M6 18h12" stroke="white" />
      <path d="M12 6v12" stroke="white" strokeWidth="1" />
    </svg>
  );
}

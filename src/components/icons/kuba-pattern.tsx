export function KubaPatternIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="24" height="24" fill="currentColor" stroke="none"/>
      <path d="M3 12h18M12 3v18" stroke="white" strokeWidth="1"/>
      <path d="M8 8h8v8H8z" fill="white" stroke="white"/>
      <path d="M10 10h4v4h-4z" fill="currentColor" stroke="currentColor"/>
    </svg>
  );
}

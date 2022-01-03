export default function IconUserGear ({ size = 14, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M25 9a2 2 0 100-4 2 2 0 000 4zM25 5V3.5M23.268 6l-1.299-.75M23.268 8l-1.299.75M25 9v1.5M26.732 8l1.299.75M26.732 6l1.299-.75M3.874 26.999a14.005 14.005 0 0124.252 0M23.328 15.214a7.996 7.996 0 11-6.22-11.138"
      />
    </svg>
  )
}

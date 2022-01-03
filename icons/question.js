export default function IconQuestion ({ size = 14, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.219"
        d="M8 14A6 6 0 108 2a6 6 0 000 12z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.219"
        d="M8 9v-.5a2 2 0 10-2-2"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.219"
        d="M8 12.5a1 1 0 100-2 1 1 0 000 2z"
      />
    </svg>
  )
}

export default function IconCamera ({ size = 14, ...props }) {
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
        strokeWidth="3"
        d="M26 26H6a2 2 0 01-2-2V10a2 2 0 012-2h4l2-3h8l2 3h4a2 2 0 012 2v14a2 2 0 01-2 2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M16 21a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
      />
    </svg>
  )
}

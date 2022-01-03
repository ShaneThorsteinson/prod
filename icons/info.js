export default function IconInfo ({ size = 14, ...props }) {
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
        d="M16 28c6.628 0 12-5.373 12-12S22.628 4 16 4C9.373 4 4 9.373 4 16s5.373 12 12 12z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M15 15h1v7h1"
      />
      <path fill="currentColor" d="M16 12a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  )
}

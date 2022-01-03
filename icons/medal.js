export default function IconMedal ({ size = 14, ...props }) {
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
        d="M16 22c5.522 0 10-4.477 10-10S21.521 2 16 2C10.475 2 6 6.477 6 12s4.476 10 10 10z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M16 17a5 5 0 100-10 5 5 0 000 10zM22 20v10l-6-3-6 3V20"
      />
    </svg>
  )
}

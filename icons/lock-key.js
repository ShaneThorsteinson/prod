export default function IconLockKey ({ size = 14, ...props }) {
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
        d="M26 11H6a1 1 0 00-1 1v14a1 1 0 001 1h20a1 1 0 001-1V12a1 1 0 00-1-1zM11.5 11V6.5a4.5 4.5 0 119 0V11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M16 20.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM16 20.5v2"
      />
    </svg>
  )
}

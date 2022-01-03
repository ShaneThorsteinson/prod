export default function IconLock ({ size = 14, ...props }) {
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
      <path fill="currentColor" d="M16 21a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  )
}

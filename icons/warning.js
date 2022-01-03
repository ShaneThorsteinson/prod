export default function IconWarning ({ size = 14, ...props }) {
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
        d="M16 12v5M14.27 4.998l-10.998 19a2 2 0 001.731 3.001h21.994a2 2 0 001.731-3.002L17.731 4.998a2 2 0 00-3.462 0v0z"
      />
      <path fill="currentColor" d="M16 24a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  )
}

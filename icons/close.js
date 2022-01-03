export default function IconClose ({ size = 14, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2.121 19H26.121V22H2.121z"
        transform="rotate(-45 2.121 19)"
      />
      <path
        fill="currentColor"
        d="M4.121 2H28.121000000000002V5H4.121z"
        transform="rotate(45 4.121 2)"
      />
    </svg>
  )
}

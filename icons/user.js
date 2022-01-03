export default function IconUser ({ size = 14, ...props }) {
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
        d="M16 20a8 8 0 100-16 8 8 0 000 16zM3.874 26.999a14.005 14.005 0 0124.253 0"
      />
    </svg>
  )
}

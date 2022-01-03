export default function IconEye ({ size = 14, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 21"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.875"
        d="M10 4.377c-6.25 0-8.75 5.626-8.75 5.626s2.5 5.624 8.75 5.624 8.75-5.624 8.75-5.624-2.5-5.626-8.75-5.626z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.875"
        d="M10 12.502a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
      />
    </svg>
  )
}

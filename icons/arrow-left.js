export default function IconArrowLeft ({ size = 14, ...props }) {
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
        strokeWidth="2"
        d="M16.875 10.5H3.125M8.75 4.875L3.125 10.5l5.625 5.625"
      />
    </svg>
  )
}

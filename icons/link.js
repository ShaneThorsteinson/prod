export default function IconLink ({ size = 14, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.688"
        d="M9.175 4.45l.82-.82a3.093 3.093 0 114.374 4.376l-1.988 1.988a3.092 3.092 0 01-4.376 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.688"
        d="M8.824 13.55l-.818.82A3.093 3.093 0 113.63 9.994L5.62 8.005a3.094 3.094 0 014.375 0"
      />
    </svg>
  )
}

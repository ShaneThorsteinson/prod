export default function IconUsers ({ size = 14, ...props }) {
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
        d="M11 20a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM19.427 7.242A6.5 6.5 0 1121.19 20M2 24.675a11.002 11.002 0 0118-.001M21.19 20a10.986 10.986 0 019 4.674"
      />
    </svg>
  )
}

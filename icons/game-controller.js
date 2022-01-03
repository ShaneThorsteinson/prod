export default function IconGameController ({ size = 14, ...props }) {
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
        d="M19 13.5h4M9 13.5h4M11 11.5v4M21.502 6.967L10.501 7a6.502 6.502 0 00-6.403 5.371H4.1l-2.045 10.52a3.5 3.5 0 005.922 3.084h0L13.38 20l8.122-.032a6.5 6.5 0 000-13v0z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M27.904 12.339l2.043 10.553a3.5 3.5 0 01-5.921 3.082h0l-5.401-5.995"
      />
    </svg>
  )
}

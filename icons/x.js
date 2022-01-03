export default function IconX ({ size = 14, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path
          d="M16.406 5.695L4.594 18.305M16.406 18.304L4.594 5.695"
          transform="translate(-.594 -1.695)"
        />
      </g>
    </svg>
  )
}

export default function IconChatCircleDots ({ size = 14, ...props }) {
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
        d="M5.679 22.125a11.995 11.995 0 114.196 4.197h0l-4.144 1.184a1 1 0 01-1.236-1.237l1.184-4.144h0z"
      />
      <path
        fill="currentColor"
        d="M16 18a2 2 0 100-4 2 2 0 000 4zM22 18a2 2 0 100-4 2 2 0 000 4zM10 18a2 2 0 100-4 2 2 0 000 4z"
      />
    </svg>
  )
}

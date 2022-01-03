export default function IconStar ({ size = 14, ...props }) {
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
        d="M16.551 23.842l6.305 3.994c.806.51 1.806-.249 1.567-1.19l-1.821-7.165a1.095 1.095 0 01.354-1.11l5.654-4.705c.742-.618.36-1.851-.595-1.913l-7.383-.48a1.052 1.052 0 01-.906-.668l-2.754-6.934a1.04 1.04 0 00-1.944 0l-2.754 6.934a1.052 1.052 0 01-.906.669l-7.383.48c-.954.061-1.338 1.294-.595 1.912l5.654 4.706a1.095 1.095 0 01.354 1.109L7.71 26.126c-.287 1.129.914 2.04 1.88 1.427l5.86-3.711a1.027 1.027 0 011.102 0v0z"
      />
    </svg>
  )
}

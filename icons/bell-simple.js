export default function IconBellSimple ({ size = 14, ...props }) {
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
        d="M12 28.5h8M7.025 13a8.987 8.987 0 019.044-9c4.948.037 8.907 4.15 8.907 9.113v.387c0 4.477.936 7.075 1.761 8.495a1 1 0 01-.86 1.505H6.123a1 1 0 01-.86-1.505c.825-1.42 1.762-4.018 1.762-8.495V13z"
      />
    </svg>
  )
}

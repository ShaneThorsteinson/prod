export default function IconPhone ({ size = 14, ...props }) {
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
        d="M11.56 15.602a10.543 10.543 0 004.881 4.86.99.99 0 00.979-.075l3.13-2.086a1 1 0 01.948-.088l5.855 2.51a.997.997 0 01.6 1.037A6.002 6.002 0 0122 27 17 17 0 015 10a6.001 6.001 0 015.24-5.952.997.997 0 011.037.6l2.512 5.86a1 1 0 01-.083.94l-2.08 3.178a.992.992 0 00-.066.976v0z"
      />
    </svg>
  )
}

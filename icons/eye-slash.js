export default function IconEyeSlash ({ size = 14, ...props }) {
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
        d="M6 5l20 22M9.25 8.574C4.152 11.154 2 16 2 16s4 8.999 14 8.999a14.753 14.753 0 006.75-1.574M26.801 20.448C29.015 18.216 30 16 30 16s-4-9.001-14-9.001c-.47 0-.928.02-1.373.058"
      />
    </svg>
  )
}

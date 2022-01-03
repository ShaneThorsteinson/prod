export default function IconDownloadSimple ({ size = 14, ...props }) {
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
        d="M10.75 13.75L16 19l5.25-5.25M16 4.996v14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M28 17v9a1 1 0 01-1 1H5a1 1 0 01-1-1v-9"
      />
    </svg>
  )
}

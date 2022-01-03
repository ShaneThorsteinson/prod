export default function IconReceipt ({ size = 20, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.429"
        d="M5.938 8.125h8.125M5.938 10.625h8.125M2.5 16.25V4.375a.625.625 0 01.625-.625h13.75a.625.625 0 01.625.625V16.25L15 15l-2.5 1.25L10 15l-2.5 1.25L5 15l-2.5 1.25z"
      />
    </svg>
  )
}

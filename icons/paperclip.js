export default function IconPaperclip ({ size = 14, ...props }) {
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
        d="M12 22l11.975-11.525a3.5 3.5 0 00-4.95-4.95L6.757 17.757a6 6 0 108.486 8.486l10.256-10.244"
      />
    </svg>
  )
}

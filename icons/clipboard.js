export default function IconClipboard ({ size = 18, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        fill="#fff"
        d="M10.666 17.334H2.333a1.612 1.612 0 01-1.667-1.667V7.334a1.612 1.612 0 011.667-1.667h3.333V2.334A1.612 1.612 0 017.333.667h8.334a1.612 1.612 0 011.666 1.667v8.333a1.613 1.613 0 01-1.666 1.667h-3.334v3.333a1.613 1.613 0 01-1.667 1.667zm-8.333-10v8.333h8.333v-3.333H7.333a1.613 1.613 0 01-1.667-1.667V7.334H2.333zm5-5v8.333h8.334V2.334H7.332z"
      />
    </svg>
  )
}

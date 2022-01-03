export default function IconMapPinLine ({ size = 14, ...props }) {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.688"
        d="M3.938 15.407h10.124M9 9.032c1.243 0 2.25-.951 2.25-2.125 0-1.173-1.007-2.125-2.25-2.125s-2.25.952-2.25 2.125c0 1.174 1.007 2.125 2.25 2.125z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.688"
        d="M14.625 6.907c0 4.781-5.625 8.5-5.625 8.5s-5.625-3.719-5.625-8.5c0-1.409.593-2.76 1.648-3.756C6.077 2.154 7.508 1.595 9 1.595s2.923.56 3.977 1.556c1.055.996 1.648 2.347 1.648 3.756v0z"
      />
    </svg>
  )
}

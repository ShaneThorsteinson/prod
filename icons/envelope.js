export default function IconEnvelope ({ size = 18, ...props }) {
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
        d="M15.75 3.938L9 10.125 2.25 3.937"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.688"
        d="M2.25 3.938h13.5V13.5a.562.562 0 01-.563.563H2.813a.563.563 0 01-.563-.563V3.937zM7.773 9l-5.35 4.903M15.577 13.904L10.227 9"
      />
    </svg>
  )
}

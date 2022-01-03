export default function IconTrophy ({ size = 14, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 14 14" fill="none" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.875"
        d="M3.73 1.75h6.54c.085 0 .171.086.171.171C10.398 2.993 9.968 8.693 7 8.693c-2.969 0-3.399-5.7-3.442-6.772 0-.085.043-.171.172-.171z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.875"
        d="M3.557 2.521H1.922a.185.185 0 00-.172.172c0 .857.13 4.628 3.442 5.057m5.249-5.229h1.635c.086 0 .172.086.172.172 0 .857-.129 4.628-3.442 5.057M7 10.536H5.406s-1.075-.086-1.075.9v.814"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.875"
        d="M6.999 10.536h1.592s1.076-.086 1.076.9v.814m-3.571-1.8V8.607m1.807 1.843V8.607M3.686 12.25h6.626"
      />
    </svg>
  )
}

import React from 'react'

export default function IconPencilLine ({ size = 14, ...props }) {
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
        strokeWidth="2"
        d="M12 27H6a1 1 0 01-1-1v-5.586a1 1 0 01.293-.707l15-15a1 1 0 011.414 0l5.586 5.586a1 1 0 010 1.414L12 27zM17 8l7 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M27 27H12l-6.937-6.936"
      />
    </svg>
  )
}

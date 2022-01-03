import React from 'react'

function Icon ({ size = 12, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 12 13"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.889"
        d="M10.125 3.377l-5.25 5.25L2.25 6.002"
      />
    </svg>
  )
}

export default Icon

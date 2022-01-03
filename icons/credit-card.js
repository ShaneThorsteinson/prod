import React from 'react'

function IconCreditCard ({ size = 14, ...props }) {
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
        d="M28 7H4a1 1 0 00-1 1v16a1 1 0 001 1h24a1 1 0 001-1V8a1 1 0 00-1-1zM20.5 20.5h4M13.5 20.5h2M3 12.107h26"
      />
    </svg>
  )
}

export default IconCreditCard

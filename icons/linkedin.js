export default function IconLinkedin ({ size = 14, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 18 18"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          fill="currentColor"
          d="M4.417 16.408H.79V5.454h3.628v10.954zM2.601 3.96C1.441 3.96.5 3.06.5 1.972c0-.523.221-1.024.615-1.393.394-.37.929-.577 1.486-.577.557 0 1.092.207 1.486.577.394.37.615.87.615 1.393 0 1.087-.941 1.988-2.1 1.988zm15.395 12.448h-3.62v-5.332c0-1.271-.028-2.9-1.886-2.9-1.887 0-2.176 1.38-2.176 2.808v5.424H6.69V5.454h3.48V6.95h.05c.485-.861 1.668-1.77 3.433-1.77C17.325 5.18 18 7.448 18 10.392v6.017h-.004z"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path
            fill="currentColor"
            d="M0 0H17.5V18.75H0z"
            transform="translate(.5 .002)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

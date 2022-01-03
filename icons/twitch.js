export default function IconTwitch ({ size = 14, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2.843 2L2 4.157v8.816h3.001V14l1.688.567 1.594-1.594h2.439l3.282-3.283V2H2.844zm10.035 7.127l-1.875 1.876H8l-1.594 1.594v-1.594H3.875V3.125h9.003v6.002zm-1.875-3.844v3.282H9.878V5.283h1.125zm-3.001 0v3.282H6.877V5.283h1.125z"
      />
    </svg>
  )
}

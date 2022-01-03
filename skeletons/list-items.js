import ContentLoader from 'react-content-loader'

export default function ListItemsSkeleton (props) {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={45}
      viewBox="0 0 552 45"
      backgroundColor="#27272A"
      foregroundColor="#3B3B3E"
      {...props}
    >
      <rect x="0" y="0" width="100%" height="45" />
    </ContentLoader>
  )
}

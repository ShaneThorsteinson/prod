import clsx from 'clsx'

const IconBackground = ({ size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="4.103"
        d="M12.326 6.708L20 2.358l7.674 4.35 7.605 4.47.07 8.822-.07 8.821-7.605 4.471L20 37.642l-7.674-4.35-7.605-4.47L4.651 20l.07-8.821 7.605-4.471z"
      />
      <path
        fill="currentColor"
        d="M20 8.75l4.894 2.774 4.849 2.851.045 5.625-.045 5.625-4.85 2.851L20 31.25l-4.894-2.774-4.849-2.851L10.213 20l.044-5.625 4.85-2.851L20 8.75z"
      />
    </svg>
  )
}

const Hexagon = ({ icon, size = 40, status = null, className, ...props }) => {
  return (
    <div className={clsx('ui-hexagon', className)} {...props}>
      <span>
        <IconBackground
          size={size}
        />
      </span>
      {status && (
        <span
          className={clsx('ui-hexagon__status', {
            'ui-hexagon__status--on': status === 'on',
            'ui-hexagon__status--off': status === 'off'
          })}
        />
      )}
      <span className="ui-hexagon__icon">{icon}</span>
    </div>
  )
}

export default Hexagon

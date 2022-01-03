import clsx from 'clsx'

const LabelCaptain = ({ className, ...props }) => {
  return (
    <div className={clsx('ui-label-captain', className)} {...props}><img src="/assets/icons/captain.svg" alt="" /> Captain</div>
  )
}

export default LabelCaptain

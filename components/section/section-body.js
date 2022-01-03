import clsx from 'clsx'

const SectionBody = ({ children, className, ...props }) => {
  return (
    <div className={clsx('mt-4 md:mt-6', className)} {...props}>{children}</div>
  )
}

export default SectionBody

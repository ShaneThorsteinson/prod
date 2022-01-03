import clsx from 'clsx'

const Container = ({ className, children, ...props }) => {
  return (
    <div className={clsx('max-w-screen-xl px-5 mx-auto', className)} {...props}>{children}</div>
  )
}

export default Container

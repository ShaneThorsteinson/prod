import clsx from 'clsx'

const HeaderBurger = ({ className, ...props }) => {
  return (
    <div className={clsx('header-burger', className)} {...props} />
  )
}

export default HeaderBurger

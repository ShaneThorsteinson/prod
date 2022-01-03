import clsx from 'clsx'

export default function PageHeader ({ title, descripiton, children, className }) {
  const classes = clsx('flex items-center flex-col', className)
  return (
    <div className={classes}>
      <div className="font-bold text-white leading-none text-center text-[32px] md:text-[38px] lg:text-[43px]">{title}</div>
      <div className="page-header__rect" />
      <div className="max-w-[700px] text-center text-gray-500">{descripiton}</div>
      {children}
    </div>
  )
}

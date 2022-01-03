import clsx from 'clsx'

const Section = ({ children, className, ...props }) => {
  return (
    <section className={clsx('section', className)} {...props}>
      {children}
    </section>
  )
}

export default Section

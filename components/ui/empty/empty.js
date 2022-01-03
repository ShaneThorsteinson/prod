import clsx from 'clsx'

const Empty = ({
  image,
  description,
  buttonText,
  className,
  onClickButton = f => f,
  children,
  ...props
}) => {
  return (
    <div className={clsx('flex items-center justify-center flex-col space-y-4', className)} {...props}>
      {image && <img src={image} alt="" />}
      <p className="text-gray-500 text-center">{description}</p>
      {children}
    </div>
  )
}

export default Empty

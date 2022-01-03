import clsx from 'clsx'
import Hexagon from 'components/ui/hexagon'

const SectionHeader = ({ icon, iconClasses, title, titleSecondary, actions, className, ...props }) => {
  return (
    <header className={clsx('section-header flex-wrap', className)} {...props}>
      {icon && (
        <Hexagon
          icon={icon}
          className={clsx('mr-2', iconClasses)}
        />
      )}
      <div className="section-header__title flex-1 flex items-center text-white uppercase overflow-hidden">
        <span className="font-bold">{title}</span>
        <span className="ml-1 text-gray-700">{titleSecondary}</span>
        <span className="section-header__title-line hidden md:inline-block" />
      </div>
      {actions && <>{actions}</>}
    </header>
  )
}

export default SectionHeader

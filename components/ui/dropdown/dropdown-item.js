export default function DropdownItem ({ children, ...props }) {
  return (
    <div className="ui-dropdown-item" {...props}>
      {children}
    </div>
  )
}

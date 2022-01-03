import clsx from 'clsx'

const MenuItem = ({ children, className, ...props }) => {
  return (
    <li>
      <a href="#" className={clsx('footer-menu__link', className)} {...props}>
        <span>{children}</span>
      </a>
    </li>
  )
}

const FooterMenu = ({ className }) => {
  const classes = clsx('footer-menu', className)
  return (
    <ul className={classes}>
      <MenuItem>Scrim Finder</MenuItem>
      <MenuItem>Tournaments</MenuItem>
      <MenuItem>News</MenuItem>
      <MenuItem>FAQ</MenuItem>
      <MenuItem>About</MenuItem>
    </ul>
  )
}

export default FooterMenu

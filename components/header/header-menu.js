import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MenuItem = ({ children, className, href = '#', ...props }) => {
  return (
    <li>
      <Link href={href}>
        <a className={clsx('header-menu__link', className)} {...props}>
          <span>{children}</span>
        </a>
      </Link>
    </li>
  )
}

const HeaderMenu = ({ className }) => {
  const router = useRouter()
  const classes = clsx('header-menu', className)

  return (
    <ul className={classes}>
      <MenuItem
        className={router.pathname === '/' ? 'header-menu__link--active' : null}
        href="/"
      >Home
      </MenuItem>
      <MenuItem
        className={router.pathname.includes('/scrim-finder') ? 'header-menu__link--active' : null}
        href="/scrim-finder"
      >Scrim Finder
      </MenuItem>
      <MenuItem
        className={router.pathname.includes('/tournament') ? 'header-menu__link--active' : null}
        href="/tournament"
      >Tournaments
      </MenuItem>
      {/* <MenuItem
        className={router.pathname.includes('/news') ? 'header-menu__link--active' : null}
        href="/news"
      >News
      </MenuItem> */}
      <MenuItem
        className={router.pathname.includes('/faq') ? 'header-menu__link--active' : null}
        href="/faq"
      >FAQ
      </MenuItem>
     <MenuItem
        className={router.pathname.includes('/membership') ? 'header-menu__link--active' : null}
        href="/membership"
      >Membership
      </MenuItem>
      {/* <MenuItem
        className={router.pathname.includes('/about') ? 'header-menu__link--active' : null}
        href="/about"
      >About
      </MenuItem> */}
    </ul>
  )
}

export default HeaderMenu

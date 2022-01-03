import clsx from 'clsx'
import useLockBodyScroll from 'hooks/use-lock-body-scroll'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MenuItem = ({ children, href = '#', className, ...props }) => {
  return (
    <li>
      <Link href={href}>
        <a className={clsx('header-menu__link h-12', className)} {...props}>
          <span>{children}</span>
        </a>
      </Link>
    </li>
  )
}

const HeaderMenuMobile = ({ onClose, className }) => {
  const classes = clsx('header-menu-mobile', className)

  useLockBodyScroll()

  const handleClickWrap = e => {
    if (e.target.classList.contains('header-menu-mobile')) {
      onClose()
    }
  }
  const router = useRouter()

  return (
    <div className={classes} onClick={handleClickWrap}>
      <span className="header-menu-mobile__close" onClick={onClose}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2.12134" y="19" width="24" height="3" transform="rotate(-45 2.12134 19)" fill="#55555E" />
          <rect x="4.12134" y="2" width="24" height="3" transform="rotate(45 4.12134 2)" fill="#55555E" />
        </svg>
      </span>
      <ul className="space-y-4 w-3/4">
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
    </div>
  )
}

export default HeaderMenuMobile

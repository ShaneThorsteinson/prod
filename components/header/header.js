import { useState } from 'react'
import Container from 'components/ui/container'
import Link from 'next/link'
import HeaderBurger from './header-burger'
import HeaderMenu from './header-menu'
import HeaderMenuMobile from './header-menu-mobile'
import HeaderSign from './header-sign'
import HeaderUser from './header-user'
import { useAuth } from 'hooks/use-auth'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { user } = useAuth()

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <header className="header">
        <Container className="h-20 flex items-center justify-between">
          <div>
            <Link href="/">
              <a><img className="h-[60px] md:h-[76px]" src="/assets/images/logo.png" alt="" /></a>
            </Link>
          </div>
          <HeaderMenu className="flex-1 hidden lg:flex" />
          <div className="flex items-center">
            {user ? <HeaderUser user={user} /> : <HeaderSign />}
            <HeaderBurger onClick={handleShowMenu} className="lg:hidden md:ml-6 md:mr-7" />
          </div>
        </Container>
      </header>
      {showMenu && <HeaderMenuMobile onClose={handleShowMenu} />}
    </>
  )
}

export default Header

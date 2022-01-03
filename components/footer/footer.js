import clsx from 'clsx'
import Container from 'components/ui/container'
import FooterMenu from './footer-menu'
import FooterSocial from './footer-social'

const Footer = ({ className, ...props }) => {
  const privacyLink = 'https://docs.google.com/document/d/1Knc6qa4pH23beFwIVrx1Q-NTKukBVOGqWeLMFGkiIAY/edit'
  return (
    <footer className={clsx('footer', className)} {...props}>
      <Container className="flex justify-between flex-wrap">
        <div className="w-full flex justify-center mb-2 sm:hidden">
          <img className="footer__copy-logo" src="/assets/images/logo-gray.png" alt="" />
        </div>
        <div className="footer__copy">
          <img className="footer__copy-logo hidden sm:inline-block" src="/assets/images/logo-gray.png" alt="" />
          <div className="footer__copy-text">
            <p>© 2021 eSports Agent</p>
            <p><a target="_blank" rel="noreferrer" href={privacyLink}>Terms & Conditions</a>  |  <a target="_blank" rel="noreferrer" href={privacyLink}>Privacy Policy</a></p>
          </div>
        </div>

        <FooterMenu className="hidden lg:flex" />
        <FooterSocial />
      </Container>
    </footer>
  )
}

export default Footer

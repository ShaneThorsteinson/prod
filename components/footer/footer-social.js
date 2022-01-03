import IconFacebook from 'icons/facebook'
import IconTwitter from 'icons/twitter'
import IconTwitch from 'icons/twitch'
import IconYoutube from 'icons/youtube'

const FooterSocial = () => {
  return (
    <ul className="footer-social space-x-2">
      <li><a className="footer-social__item" href="#"><IconFacebook size={16} /></a></li>
      <li><a className="footer-social__item" href="#"><IconTwitter /></a></li>
      <li><a className="footer-social__item" href="#"><IconTwitch size={16} /></a></li>
      <li><a className="footer-social__item" href="#"><IconYoutube /></a></li>
    </ul>
  )
}

export default FooterSocial

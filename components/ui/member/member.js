import IconFacebook from 'icons/facebook'
import IconLinkedin from 'icons/linkedin'
import IconTwitter from 'icons/twitter'

export default function Member ({ image, name, position, description }) {
  return (
    <div className="ui-member">
      <div className="ui-member__image">
        <img src={image} />
      </div>
      <div className="ui-member__name">Member first & last name</div>
      <div className="ui-member__position">position / title</div>
      <div className="ui-member__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec accumsan metus. Morbi vitae nulla arcu. Suspendisse rutrum dui ultricies magna imperdiet, nec convallis eros tincidunt. Quisque turpis ipsum, dapibus non consequat ac, bibendum id tortor.
      </div>
      <div className="ui-member__links">
        <a href="#"><IconFacebook size={16} /></a>
        <a href="#"><IconTwitter /></a>
        <a href="#"><IconLinkedin /></a>
      </div>
    </div>
  )
}

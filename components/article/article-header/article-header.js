import PropTypes from 'prop-types'
import IconFacebook from 'icons/facebook'
import IconTwitter from 'icons/twitter'

const ArticleHeader = ({ date, title, author, ...props }) => {
  return (
    <header className="article-header" {...props}>
      <h1 className="article-header__title">{title}</h1>
      <div className="article-header__bottom">
        <div>
          <span className="article-header__date">{date}</span>
          <span className="article-header__author">by {author}</span>
        </div>
        <div className="article-header__share">
          <span>share this article</span>
          <a href="#"><IconFacebook size={16} /></a>
          <a href="#"><IconTwitter /></a>
        </div>
      </div>
    </header>
  )
}

ArticleHeader.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default ArticleHeader

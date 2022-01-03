import PropTypes from 'prop-types'
import clsx from 'clsx'

const ArticleCover = ({ className, image, ...props }) => {
  return (
    <div className={clsx('article-cover', className)} {...props}>
      <img src={image} alt="" />
    </div>
  )
}

ArticleCover.propTypes = {
  image: PropTypes.string.isRequired
}

export default ArticleCover

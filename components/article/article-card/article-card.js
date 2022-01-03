import clsx from 'clsx'
import Link from 'next/link'

const ArticleCard = ({ id, image, date, title, className, size = null, ...props }) => {
  const classes = clsx('article-card', {
    'article-card--large': size === 'large'
  }, className)

  return (
    <div className={classes} {...props}>
      <Link href={`/news/${id}`}>
        <a className="article-card__link">
          <img className="article-card__image" src={image} alt="" />
          <div className="article-card__content">
            <div className="article-card__date">{date}</div>
            <div className="article-card__title">{title}</div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default ArticleCard

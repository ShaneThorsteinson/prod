import clsx from 'clsx'

const ArticleBody = ({ children, className, ...props }) => {
  return (
    <div className={clsx('article-body', className)} {...props}>{children}</div>
  )
}

export default ArticleBody

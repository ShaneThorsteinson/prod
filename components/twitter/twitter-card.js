import clsx from 'clsx'

const TwitterCard = ({ className, ...props }) => {
  return (
    <div className={clsx('twitter-card')} {...props}>
      <div className="twitter-card__header">
        <span className="twitter-card__name">eSportsAgent</span>
        <span className="twitter-card__verified" />
        <span className="twitter-card__username">
          <a href="#">@esports_agent</a>
        </span>
        <span className="twitter-card__time">2h ago</span>
      </div>
      <div className="twitter-card__content">
        What a start to <a href="#">#CDL2021</a><br />
        Check out the CDL Points Standings after Opening Weekend. How is your team looking?
      </div>
    </div>
  )
}

export default TwitterCard

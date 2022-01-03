import clsx from 'clsx'

const TeamAddCard = ({ className, ...props }) => {
  return (
    <div className={clsx('team-card cursor-pointer flex justify-center items-center', className)} {...props}>
      <div className="team-card__bg" />
      <div className="flex items-center flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="102"
          fill="none"
          viewBox="0 0 100 102"
        >
          <path
            stroke="#808087"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M50 1l44 25v50l-44 25L6 76V26L50 1zM34.375 51h31.25M50 35.375v31.25"
          />
        </svg>
        <span className="mt-4 uppercase text-gray-700 font-bold">Create a new team</span>
      </div>
    </div>
  )
}

export default TeamAddCard

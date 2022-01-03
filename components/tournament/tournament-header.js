import clsx from 'clsx'
import Container from 'components/ui/container'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import IconCrown from 'icons/crown'
dayjs.extend(localizedFormat)

const TournamentHeader = ({ tournament }) => {
  return (
    <>
      <div className="tournament-header">
        <Container className="w-full text-center md:text-left md:flex md:items-center">
          <div className="md:flex md:items-center">
            <div className="tournament-header__cover md:mr-4 lg:mr-6">
              <div className="tournament-header__cover-wrap">
                <img src={tournament.coverImageUrl ? tournament.coverImageUrl : '/demo/tournament-card-image-1.png'} alt="" />
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-gray-500 uppercase text-sm font-roboto">{dayjs(tournament.startAt).format('LLL')}</div>
              <div className="mt-2 flex items-center gap-3">
                <span className={clsx('font-semibold text-2xl lg:text-3xl', {
                  'text-gold': tournament.isPrestige,
                  'text-white': !tournament.isPrestige
                })}>
                  {tournament.name}
                </span>
                {tournament.isPrestige && <IconCrown size={24} className="text-gold" />}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default TournamentHeader

import Spinner from 'components/spinner'
import TeamAddCard from 'components/team/team-add-card'
import TeamCard from 'components/team/team-card'
import TeamManage from 'components/team/team-manage'
import Button from 'components/ui/button'
import Empty from 'components/ui/empty'
// import Button from 'components/ui/button'
// import Empty from 'components/ui/empty'
// import Select from 'components/ui/select'
import ApiService from 'helpers/api-service'
import Link from 'next/link'
import { useState } from 'react'
import { useQuery } from 'react-query'
import ModalCreateTeam from './modal-create-team'
// import Link from 'next/link'
import Message from 'components/ui/message/message'

const TabProfileMyTeamSingle = ({ teamId }) => {
  const { isLoading, data: team } = useQuery(['my-teams', { id: teamId }], () => ApiService.getTeam(teamId), {
    retry: false,
    refetchOnWindowFocus: false
  })
  const [showCreateTeam, setShowCreateTeam] = useState(false)

  return (
    <>
      {showCreateTeam && <ModalCreateTeam onClose={() => setShowCreateTeam(false)} />}

      <div className="mt-4">
        {team && (
          <div className="flex flex-col items-center md:flex-row justify-between">
            <div className="flex items-center gap-3 font-semibold text-[22px] mb-4 md:mb-0">
              <Link href="/my-account/teams">
                <a>
                  <div className="text-white">All Team list</div>
                </a>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="11"
                fill="none"
                viewBox="0 0 7 11"
              >
                <path
                  stroke="#5F5F65"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l4.375 4.375L1 9.75"
                />
              </svg>
              <div className="text-gray-900">{team.name}</div>
            </div>
            {/* <Select size="small" defaultValue="">
              <Select.Option disabled value="">Sort By</Select.Option>
              <Select.Option value="date">Date</Select.Option>
            </Select> */}
          </div>
        )}

        {team && team.activeMatchInTournament && (
          <Message type="info" className="mt-4">
            <div className="flex justify-between flex-col lg:items-center lg:flex-row">
              <div>Your team <span className="text-primary-500">{team.name}</span> has one activated tournament match at this time.</div>
              <Link href={`/tournament/${team.activeMatchInTournament.tournamentId}`} passHref>
                <Button
                  className="w-full md:w-auto"
                  size="small"
                  outlined
                >Go to match page
                </Button>
              </Link>
            </div>
          </Message>
        )}

        {team && team.activeMatchInScrim && (
          <Message type="info" className="mt-4">
            <div className="flex justify-between flex-col lg:items-center lg:flex-row">
              <div>Your team <span className="text-primary-500">{team.name}</span> has one activated scrim match at this time.</div>
              <Link href={`/match/${team.activeMatchInScrim.id}`} passHref>
                <Button
                  className="w-full md:w-auto"
                  size="small"
                  outlined
                >Go to match page
                </Button>
              </Link>
            </div>
          </Message>
        )}

        {isLoading && <Spinner className="h-80" />}

        {team && (
          <TeamManage
            team={team}
            className="mt-4 p-4 md:pt-6 lg:p-8 lg:pt-6 lg:col-span-8"
          />
        )}

        {!isLoading && !team && (
          <Empty
            image="/assets/images/empty-game.svg"
            description="Team not found"
            className="mt-4 py-[80px] md:py-[120px]"
          >
            <Link href="/my-account/teams" passHref>
              <Button
                size="small"
                className="w-full md:w-auto"
                outlined
              >All teams</Button>
            </Link>
          </Empty>
        )}
      </div>
    </>
  )
}

export default TabProfileMyTeamSingle

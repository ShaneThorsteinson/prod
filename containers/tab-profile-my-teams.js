import Spinner from 'components/spinner'
import TeamAddCard from 'components/team/team-add-card'
import TeamCard from 'components/team/team-card'
import Button from 'components/ui/button'
import Empty from 'components/ui/empty'
// import Button from 'components/ui/button'
// import Empty from 'components/ui/empty'
// import Select from 'components/ui/select'
import ApiService from 'helpers/api-service'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useQuery } from 'react-query'
import ModalCreateTeam from './modal-create-team'
// import Link from 'next/link'

const TabProfileMyTeams = () => {
  const { isLoading, data: items = [] } = useQuery('my-teams', ApiService.getMyTeams)
  const [showCreateTeam, setShowCreateTeam] = useState(false)
  const router = useRouter()

  return (
    <>
      {showCreateTeam && <ModalCreateTeam onClose={() => setShowCreateTeam(false)} />}

      <div className="mt-4">
        {items.length > 0 && (
          <div className="flex flex-col items-center md:flex-row justify-between">
            <div className="font-semibold text-white text-[22px] mb-4 md:mb-0">All Team list you played in the past</div>
            {/* <Select size="small" defaultValue="">
              <Select.Option disabled value="">Sort By</Select.Option>
              <Select.Option value="date">Date</Select.Option>
            </Select> */}
          </div>
        )}
        {isLoading && <Spinner className="h-80" />}

        {items && items.length > 0 && (
          <div className="mt-4 gap-4 grid md:grid-cols-2 lg:grid-cols-4">
            <TeamAddCard
              onClick={() => setShowCreateTeam(true)}
            />
            {items.map(({ team, stats, isCaptain }, index) =>
              <TeamCard
                key={team.id ?? index}
                team={team}
                stats={stats}
                isCaptain={isCaptain}
                onClick={() => router.push(`teams/${team.id}`)}
              />)}
          </div>
        )}

        {!isLoading && items?.length === 0 && (
          <Empty
            image="/assets/images/empty-game.svg"
            description="You currently have no teams"
            className="mt-4 py-[80px] md:py-[120px]"
          >
            <Button
              onClick={() => setShowCreateTeam(true)}
              size="small"
              className="w-full md:w-auto"
              outlined
            >Create Team</Button>
          </Empty>
        )}
      </div>
    </>
  )
}

export default TabProfileMyTeams

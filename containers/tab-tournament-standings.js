import Image from 'next/image'
import Block from 'components/ui/block'
import { useEffect, useMemo } from 'react'
import RankDivision from 'components/ui/rank-division'
import MatchHistory from 'components/ui/match-history'
import TableRows from 'components/ui/table/table-rows'
import { useQuery } from 'react-query'
import ApiService from 'helpers/api-service'
import Spinner from 'components/spinner/spinner'
const TeamItem = ({ name, image }) => {
  return (
    <div className="flex items-center">
      <Image width={30} height={30} src={image} alt="" />
      <span className="ml-2">{name}</span>
    </div>
  )
}

export default function TabTournamentStandings ({ tournament }) {
  const { data: items = [], isLoading } = useQuery(['tournament-participants', { id: tournament.id }], () => ApiService.getTournamentParticipants(tournament.id))

  const columns = useMemo(
    () => [
      {
        Header: 'team name',
        accessor: 'team_name'
      },
      {
        Header: 'rank division',
        accessor: 'rank_division'
      }
      // {
      //   Header: 'match history',
      //   accessor: 'match_history'
      // }
    ],
    []
  )

  const data = items.map(item => {
    return (
      {
        team_name: <TeamItem name={item.team.name} image={item.team.logo ?? '/assets/images/avatar.svg'} />,
        rank_division: <RankDivision size="large" division={item.team.division} />
      }
    )
  })

  return (
    <>
      <div className="mt-4">
        <Block className="p-4 md:pt-6 lg:p-8 lg:pt-6 lg:col-span-8" shined>
          {isLoading && <Spinner />}
          {!isLoading && <TableRows columns={columns} data={data} />}
        </Block>
      </div>
    </>
  )
}

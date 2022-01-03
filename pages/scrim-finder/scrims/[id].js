import Layout from 'components/layout'
import PageHeader from 'components/page/page-header'
import Section from 'components/section'
import Spinner from 'components/spinner'
import TeamAvatars from 'components/team/team-avatars'
import Block from 'components/ui/block'
import Button from 'components/ui/button'
import Checkbox from 'components/ui/checkbox'
import Container from 'components/ui/container'
import Hexagon from 'components/ui/hexagon'
import RankDivision from 'components/ui/rank-division'
import Select from 'components/ui/select'
import TableRows from 'components/ui/table/table-rows'
import ModalIncomingRequest from 'containers/modal-incoming-request'
import ModalSendRequest from 'containers/modal-send-request'
import ModalTeamInfo from 'containers/modal-team-info'
import SectionLatestMatches from 'containers/section-latest-matches'
import ApiService from 'helpers/api-service'
import IconCrosshair from 'icons/crosshair'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useQuery, useMutation } from 'react-query'
import useSocket from 'hooks/use-socket'
import { useAuth } from 'hooks/use-auth'
import withAuth from 'hoc/withAuth'
import Head from 'next/head'

const TeamName = ({ name, image, ...props }) => {
  return (
    <div className="flex items-center cursor-pointer" {...props}>
      <img width={30} height={30} src={image ?? '/assets/images/agent-default.svg'} alt="" />
      <span className="ml-2">{name}</span>
    </div>
  )
}

const COLUMNS = [
  {
    Header: 'team name',
    accessor: 'team_name'
  },
  {
    Header: 'rank division',
    accessor: 'rank_division'
  },
  {
    Header: 'Teammates',
    accessor: 'teammates'
  },
  {
    Header: 'special requests',
    accessor: 'special_requests'
  },
  {
    Header: '',
    accessor: 'button_requests'
  }
]

function FindScrimListPage () {
  const { data: scrims, status, refetch } = useQuery('scrims', ApiService.getAllScrims, {
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  })
  const { user } = useAuth()
  const [incomingRequest, setIncomingRequest] = useState(null)
  const [selectedScrim, setSelectedScrim] = useState(null)
  const [showModalTeamInfo, setShowModalTeamInfo] = useState(false)
  const [isShowFilter, setIsShowFilter] = useState(false)
  const [tableData, setTableData] = useState([])
  const [selectedTeam, setSelectedTeam] = useState(null)
  const router = useRouter()
  const { id: scrimId } = router.query
  const { mutateAsync, isLoading: isLeaving } = useMutation(ApiService.leaveScrim)

  const io = useSocket()

  useEffect(() => {
    if (!scrimId) {
      return
    }

    io.on('scrims', () => {
      refetch()
    })

    io.on('scrim_request', res => {
      if (res.action === 'INCOMING') {
        setIncomingRequest(res.payload)
        return
      }
      if (res.action === 'ACCEPTED') {
        router.push(`/match/${res.payload.id}`)
      }
    })

    return () => {
      io.off('scrims')
        .off('scrim_request')
    }
  }, [scrimId])

  const handleToggleFilter = () => {
    setIsShowFilter(!isShowFilter)
  }

  const handleClickTeam = team => {
    setSelectedTeam(team)
    setShowModalTeamInfo(true)
  }

  const handleLeave = (event) => {
    event.preventDefault()
    mutateAsync()
      .then(() => router.push('/scrim-finder'))
  }

  const handleClickRequest = scrim => {
    return (e) => {
      e.preventDefault()
      setSelectedScrim(scrim)
    }
  }

  useEffect(() => {
    if (!scrims?.length > 0) {
      return
    }

    const requests = scrims.map(scrim => {
      return {
        team_name: <TeamName onClick={() => handleClickTeam(scrim.team)} name={scrim.team.name} image={scrim.team.logo} />,
        rank_division: <RankDivision size="large" division={scrim.team.division} />,
        teammates: <TeamAvatars className="whitespace-nowrap" users={scrim.team.players} />,
        special_requests: scrim.specialRequests ?? <div className="text-gray-900">n/a</div>,
        button_requests: (
          <Button
            size="small"
            onClick={handleClickRequest(scrim)}
            disabled={scrim.team.players.find(item => item.userId === user?.id)}
            outlined
          >Request
          </Button>
        )
      }
    })

    setTableData(requests)
  }, [scrims])

  return (
    <>
      <Head>
        <title>Scrims</title>
      </Head>
      {showModalTeamInfo && (
        <ModalTeamInfo
          team={selectedTeam}
          onClose={() => setShowModalTeamInfo(false)}
        />
      )}

      {incomingRequest && (
        <ModalIncomingRequest
          request={incomingRequest}
          onClose={() => setIncomingRequest(null)}
        />
      )}

      {selectedScrim && (
        <ModalSendRequest
          scrim={selectedScrim}
          onClose={() => setSelectedScrim(null)}
        />
      )}

      <Layout>
        <Container className="mt-20 pt-10">
          <PageHeader
            title="Scrim Finder"
            descripiton="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl tellus, elementum quis sodales at, sagittis ut nulla. Praesent sed turpis eu diam vulputate iaculis nec ac nunc."
          />

          <Block className="mt-10 p-4 md:pt-6 lg:p-8 lg:pt-6">
            <Section.Header
              title="Request"
              titleSecondary="a scrim from another team"
              icon={<Hexagon className="text-primary-500" icon={<IconCrosshair size={14} />} />}
              actions={
                <div className="flex items-center w-full flex-wrap space-x-0 space-y-2 mt-2 md:space-x-4 md:space-y-0 md:mt-0 md:w-auto">
                  <Button
                    onClick={handleToggleFilter}
                    className="w-full md:w-auto"
                    size="small"
                    outlined
                  >{isShowFilter ? 'Hide' : 'Show'} filter
                  </Button>
                  <Button
                    onClick={handleLeave}
                    className="w-full md:w-auto"
                    size="small"
                    loading={isLeaving}
                    outlined
                  >Leave scrim finder
                  </Button>
                </div>
              }
            />
            {isShowFilter && (
              <div className="flex flex-col md:flex-row justify-between md:items-center border-t border-b border-[#2A2A2D] py-2.5 mt-4">
                <Checkbox>Show teams of the same rank division only</Checkbox>
                <div className="flex items-center flex-wrap mt-4 md:mt-0">
                  <span className="text-gray-500 mr-2 font-roboto">Show my team to teams from</span>
                  <Select className="w-full mt-1 md:mt-0 md:w-auto" size="small" defaultValue="">
                    <Select.Option value="">All divisions</Select.Option>
                    <Select.Option value="iron">Iron division</Select.Option>
                    <Select.Option value="silver">Silver division</Select.Option>
                    <Select.Option value="gold">Gold division</Select.Option>
                  </Select>
                </div>
              </div>
            )}

            {(status === 'idle' || status === 'loading') && <Spinner className="h-80" />}
            {scrims?.length > 0 && <TableRows className="mt-4" columns={COLUMNS} data={tableData} />}
          </Block>

          <SectionLatestMatches className="mt-4" />
        </Container>
      </Layout>
    </>
  )
}

export default withAuth(FindScrimListPage)

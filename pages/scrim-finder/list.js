import Layout from 'components/layout'
import PageHeader from 'components/page/page-header'
import Section from 'components/section'
import Avatar from 'components/ui/avatar'
import Block from 'components/ui/block'
import Button from 'components/ui/button'
import Checkbox from 'components/ui/checkbox'
import Container from 'components/ui/container'
import Hexagon from 'components/ui/hexagon'
import RankDivision from 'components/ui/rank-division'
import Select from 'components/ui/select'
import TableRows from 'components/ui/table/table-rows'
import Tooltip from 'components/ui/tooltip'
import ModalIncomingRequest from 'containers/modal-incoming-request'
import ModalTeamInfo from 'containers/modal-team-info'
import SectionLatestMatches from 'containers/section-latest-matches'
import IconCrosshair from 'icons/crosshair'
import Link from 'next/link'
import { useMemo, useState } from 'react'
// import useRequireAuth from 'hooks/use-require-auth'

const Teammates = () => {
  return (
    <Avatar.Group className="whitespace-nowrap">
      <Tooltip content="User name 1">
        <Avatar image="/demo/avatar-1.png" isCaptain />
      </Tooltip>
      <Tooltip content="User name 2">
        <Avatar image="/demo/avatar-2.png" />
      </Tooltip>
      <Tooltip content="User name 3">
        <Avatar image="/demo/avatar-3.png" />
      </Tooltip>
      <Tooltip content="User name 4">
        <Avatar image="/demo/avatar-4.png" />
      </Tooltip>
      <Tooltip content="User name 5">
        <Avatar image="/demo/avatar-5.png" />
      </Tooltip>
    </Avatar.Group>
  )
}

const TeamItem = ({ name, image, ...props }) => {
  return (
    <div className="flex items-center cursor-pointer" {...props}>
      <img width={30} height={30} src={image} alt="" />
      <span className="ml-2">{name}</span>
    </div>
  )
}

export default function FindScrimListPage () {
  const columns = useMemo(
    () => [
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
    ],
    []
  )

  const data = [
    {
      team_name: <TeamItem onClick={() => setShowModalTeamInfo(true)} name="Rogue Gaming White" image="/demo/agents-logo-8.png" />,
      rank_division: <RankDivision size="large" division="gold" />,
      teammates: <Teammates />,
      special_requests: 'Lorem ipsum dolor sit amet consectetur adipiscing',
      button_requests: <Button onClick={() => setShowModalIncomingRequest(true)} size="small" outlined>Request</Button>
    },
    {
      team_name: <TeamItem onClick={() => setShowModalTeamInfo(true)} name="Codeine Cowboys" image="/demo/agents-logo-1.svg" />,
      rank_division: <RankDivision size="large" division="master" />,
      teammates: <Teammates />,
      special_requests: <div className="text-gray-900">n/a</div>,
      button_requests: <Button onClick={() => setShowModalIncomingRequest(true)} size="small" outlined>Request</Button>
    },
    {
      team_name: <TeamItem onClick={() => setShowModalTeamInfo(true)} name="Anax Esports" image="/demo/agents-logo-4.png" />,
      rank_division: <RankDivision size="large" division="platinum" />,
      teammates: <Teammates />,
      special_requests: 'Etiam gravida nibh sem',
      button_requests: <Button onClick={() => setShowModalIncomingRequest(true)} size="small" outlined>Request</Button>
    },
    {
      team_name: <TeamItem onClick={() => setShowModalTeamInfo(true)} name="Azure Allegiance" image="/demo/agents-logo-5.png" />,
      rank_division: <RankDivision size="large" division="bronze" />,
      teammates: <Teammates />,
      special_requests: 'Phasellus quis condimentum lorem',
      button_requests: <Button onClick={() => setShowModalIncomingRequest(true)} size="small" outlined>Request</Button>
    },
    {
      team_name: <TeamItem onClick={() => setShowModalTeamInfo(true)} name="Vancouver Elated" image="/demo/agents-logo-13.svg" />,
      rank_division: <RankDivision size="large" division="iron" />,
      teammates: <Teammates />,
      special_requests: <div className="text-gray-900">n/a</div>,
      button_requests: <Button onClick={() => setShowModalIncomingRequest(true)} size="small" outlined>Request</Button>
    },
    {
      team_name: <TeamItem onClick={() => setShowModalTeamInfo(true)} name="VetheX Esports" image="/demo/agents-logo-16.svg" />,
      rank_division: <RankDivision size="large" division="silver" />,
      teammates: <Teammates />,
      special_requests: <div className="text-gray-900">n/a</div>,
      button_requests: <Button onClick={() => setShowModalIncomingRequest(true)} size="small" outlined>Request</Button>
    },
    {
      team_name: <TeamItem onClick={() => setShowModalTeamInfo(true)} name="Anansi Diamond" image="/demo/agents-logo-18.svg" />,
      rank_division: <RankDivision size="large" division="master" />,
      teammates: <Teammates />,
      special_requests: 'Donec mattis, tortor et elementum mattis',
      button_requests: <Button onClick={() => setShowModalIncomingRequest(true)} size="small" outlined>Request</Button>
    },
    {
      team_name: <TeamItem onClick={() => setShowModalTeamInfo(true)} name="Rogue Gaming White" image="/demo/agents-logo-8.png" />,
      rank_division: <RankDivision size="large" division="gold" />,
      teammates: <Teammates />,
      special_requests: 'Lorem ipsum dolor sit amet consectetur adipiscing',
      button_requests: <Button onClick={() => setShowModalIncomingRequest(true)} size="small" outlined>Request</Button>
    },
    {
      team_name: <TeamItem onClick={() => setShowModalTeamInfo(true)} name="Codeine Cowboys" image="/demo/agents-logo-1.svg" />,
      rank_division: <RankDivision size="large" division="master" />,
      teammates: <Teammates />,
      special_requests: <div className="text-gray-900">n/a</div>,
      button_requests: <Button onClick={() => setShowModalIncomingRequest(true)} size="small" outlined>Request</Button>
    },
    {
      team_name: <TeamItem onClick={() => setShowModalTeamInfo(true)} name="Anax Esports" image="/demo/agents-logo-4.png" />,
      rank_division: <RankDivision size="large" division="platinum" />,
      teammates: <Teammates />,
      special_requests: 'Etiam gravida nibh sem',
      button_requests: <Button onClick={() => setShowModalIncomingRequest(true)} size="small" outlined>Request</Button>
    },
    {
      team_name: <TeamItem onClick={() => setShowModalTeamInfo(true)} name="Azure Allegiance" image="/demo/agents-logo-5.png" />,
      rank_division: <RankDivision size="large" division="bronze" />,
      teammates: <Teammates />,
      special_requests: 'Phasellus quis condimentum lorem',
      button_requests: <Button onClick={() => setShowModalIncomingRequest(true)} size="small" outlined>Request</Button>
    },
    {
      team_name: <TeamItem onClick={() => setShowModalTeamInfo(true)} name="Vancouver Elated" image="/demo/agents-logo-13.svg" />,
      rank_division: <RankDivision size="large" division="iron" />,
      teammates: <Teammates />,
      special_requests: <div className="text-gray-900">n/a</div>,
      button_requests: <Button onClick={() => setShowModalIncomingRequest(true)} size="small" outlined>Request</Button>
    }
  ]

  const [showModalIncomingRequest, setShowModalIncomingRequest] = useState(false)
  const [showModalTeamInfo, setShowModalTeamInfo] = useState(false)
  const [isShowFilter, setIsShowFilter] = useState(false)

  const handleToggleFilter = () => {
    setIsShowFilter(!isShowFilter)
  }

  return (
    <>
      {showModalTeamInfo && (
        <ModalTeamInfo
          logo="/demo/agents-logo-8.png"
          name="Codeine Cowboys"
          onClose={() => setShowModalTeamInfo(false)}
        />
      )}
      {showModalIncomingRequest && (
        <ModalIncomingRequest onClose={() => setShowModalIncomingRequest(false)} />
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
              icon={<Hexagon className="text-primary-500" icon={<IconCrosshair size={18} />} />}
              actions={
                <div className="flex items-center w-full flex-wrap space-x-0 space-y-2 mt-2 md:space-x-4 md:space-y-0 md:mt-0 md:w-auto">
                  <Button
                    onClick={handleToggleFilter}
                    className="w-full md:w-auto"
                    size="small"
                    outlined
                  >{isShowFilter ? 'Hide' : 'Show'} filter
                  </Button>
                  <Link href="/scrim-finder">
                    <Button className="w-full md:w-auto" size="small" outlined>leave scrim finder</Button>
                  </Link>
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
            <TableRows className="mt-4" columns={columns} data={data} />
          </Block>

          <SectionLatestMatches className="mt-4" />
        </Container>
      </Layout>
    </>
  )
}

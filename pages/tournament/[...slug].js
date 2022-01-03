import Layout from 'components/layout'
import Container from 'components/ui/container'
import Tabs from 'components/ui/tabs'
import SectionFeaturedTeams from 'containers/section-featured-teams'
import TournamentHeader from 'components/tournament/tournament-header'
import TabTournamentOverview from 'containers/tab-tournament-overview'
import Head from 'next/head'
import TabTournamentBrackets from 'containers/tab-tournament-brackets'
import TabTournamentStandings from 'containers/tab-tournament-standings'
import ApiService from 'helpers/api-service'
import Countdown from 'components/countdown'
import { useQueryClient } from 'react-query'
import TabTournamentRules from 'containers/tab-tournament-rules'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function TournamentPage ({ tournament }) {
  const queryClient = useQueryClient()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    if (router.query?.slug && router.query.slug.length > 1) {
      setActiveTab(router.query.slug[1])
    }
  }, [router.query])

  const handleClickTab = key => {
    router.replace(`/tournament/${tournament.id}/${key}`)
    setActiveTab(key)
  }

  return (
    <>
      <Head>
        <title>Tournament</title>
      </Head>
      <Layout>
        <div className="mt-20" />
        <TournamentHeader tournament={tournament} />
        <Container>
          <Tabs
            activeKey={activeTab}
            onTabClick={handleClickTab}
            className="tab-tournament"
            size="large"
            defaultActiveKey="overview"
          >
            <Tabs.Item tab="Overview" key="overview">
              <TabTournamentOverview tournament={tournament} />
            </Tabs.Item>
            <Tabs.Item tab="Bracket" key="bracket">
              {tournament.state === 'pending' && (
                <Countdown
                  date={tournament.startAt}
                  className="my-16"
                  onSuccess={() => queryClient.refetchQueries(['tournament', { id: tournament.id }])}
                />
              )}
              {tournament.state !== 'pending' && <TabTournamentBrackets url={tournament.challongeUrl} />}
            </Tabs.Item>
            <Tabs.Item tab="Teams" key="teams">
              {tournament.state === 'pending' && (
                <Countdown
                  date={tournament.startAt}
                  className="my-16"
                  onSuccess={() => queryClient.refetchQueries(['tournament', { id: tournament.id }])}
                />
              )}
              {tournament.state !== 'pending' && <TabTournamentStandings tournament={tournament} />}
            </Tabs.Item>
            <Tabs.Item tab="Tournament rules" key="rules">
              <TabTournamentRules tournament={tournament} />
            </Tabs.Item>
          </Tabs>
          <SectionFeaturedTeams className="mt-4" />
        </Container>
      </Layout>
    </>
  )
}

export async function getServerSideProps ({ params }) {
  const { slug } = params
  const id = slug[0]

  const tournament = await ApiService.getTournament(id)
  return {
    props: {
      tournament
    }
  }
}

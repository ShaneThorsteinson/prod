import Layout from 'components/layout'
import PageHeader from 'components/page/page-header'
import Spinner from 'components/spinner'
import Button from 'components/ui/button'
import Container from 'components/ui/container'
import SectionLatestMatches from 'containers/section-latest-matches'
import ApiService from 'helpers/api-service'
import withAuth from 'hoc/withAuth'
import IconCrosshair from 'icons/crosshair'
import TeamCardMatch from 'components/team/team-card-match'
import Hexagon from 'components/ui/hexagon'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import Head from 'next/head'

function MatchPage () {
  const router = useRouter()
  const { id: matchId } = router.query
  const { status, data: match } = useQuery(
    ['match', { id: matchId }],
    () => ApiService.getMatch(matchId),
    {
      retry: false,
      enabled: !!matchId
    }
  )

  return (
    <>
      <Head>
        <title>{match ? `Match: ${match.teamA.name} - ${match.teamB.name}` : 'Match'}</title>
      </Head>
      <Layout>
        <Container className="mt-20 pt-14 bg-soldier--5">
          {(status === 'idle' || status === 'loading') && <Spinner className="h-80" />}
          {status === 'success' && (
            <>
              <div className="flex flex-col justify-center items-center">
                <Hexagon size={60} icon={<IconCrosshair size={18} />} className="text-primary-500" />
                <div className="mt-1 text-white text-4xl font-semibold">Ready! Steady! Match!</div>
              </div>

              <TeamCardMatch
                match={match}
                className="mt-6"
              />
            </>
          )}
          {status === 'error' && (
            <PageHeader
              title="Not Found Match"
              className="pb-10 pt-5 md:py-[20vh]"
            >
              <Button
                className="mt-4"
                shined
              >Go To Scrim Finder
              </Button>
            </PageHeader>
          )}
          <SectionLatestMatches className="mt-4" />
        </Container>
      </Layout>
    </>
  )
}

export default withAuth(MatchPage)

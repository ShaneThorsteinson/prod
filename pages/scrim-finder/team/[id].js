import Layout from 'components/layout'
import PageHeader from 'components/page/page-header'
import Spinner from 'components/spinner'
import Button from 'components/ui/button'
import Container from 'components/ui/container'
import PageScrimFinderFind from 'containers/page-scrim-finder-find'
import SectionLatestMatches from 'containers/section-latest-matches'
import ApiService from 'helpers/api-service'
import withAuth from 'hoc/withAuth'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

function FindScrimSelectedTeamPage () {
  const router = useRouter()
  const { id } = router.query
  const { status, data: team } = useQuery(
    ['team', { id }],
    () => ApiService.getTeam(id),
    {
      retry: false,
      enabled: !!id
    }
  )

  return (
    <>
      <Head>
        <title>Scrim Finder {team ? `- ${team.name}` : ''}</title>
      </Head>
      <Layout>
        <Container className="mt-20">
          {(status === 'idle' || status === 'loading') && <Spinner className="h-80" />}
          {status === 'success' && <PageScrimFinderFind team={team} />}
          {status === 'error' && (
            <PageHeader
              title="Not Found Team"
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

export default withAuth(FindScrimSelectedTeamPage)

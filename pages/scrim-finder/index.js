import Layout from 'components/layout'
import PageHeader from 'components/page/page-header'
import Spinner from 'components/spinner'
import TeamList from 'components/team/team-list'
import Button from 'components/ui/button'
import Container from 'components/ui/container'
import ModalCreateTeam from 'containers/modal-create-team'
import Message from 'components/ui/message'
import SectionLatestMatches from 'containers/section-latest-matches'
import ApiService from 'helpers/api-service'
import withAuth from 'hoc/withAuth'
import { useState } from 'react'
import { useQuery } from 'react-query'
import Head from 'next/head'

function FindScrimPage () {
  const [showModalCreateTeam, setShowModalCreateTeam] = useState(false)

  const { data: items = [], status } = useQuery('my-teams-captain', () => ApiService.getMyTeams({ captain: true }))

  const handleClickCreate = () => {
    setShowModalCreateTeam(true)
  }

  return (
    <>
      <Head>
        <title>Scrim Finder</title>
      </Head>
      {showModalCreateTeam && <ModalCreateTeam onClose={() => setShowModalCreateTeam(false)} />}
      <Layout>
        <Container className="mt-20">
          {(status === 'idle' || status === 'loading') && <Spinner className="h-80" />}
          {status === 'success' && items.length === 0 && (
            <PageHeader
              title="Scrim Finder"
              descripiton="First step is to create your team. Invite your teammates once they've made accounts, and begin competing in ranked scrims or tournaments!"
              className="pb-10 pt-5 md:py-[20vh]"
            >
              <Button
                className="mt-4"
                shined
                onClick={handleClickCreate}
              >create a team
              </Button>
            </PageHeader>
          )}
          {status === 'success' && items.length > 0 && (
            <>
              <PageHeader
                className="pt-10"
                title="Scrim Finder"
                descripiton="First step is to create your team. Invite your teammates once they've made accounts, and begin competing in ranked scrims or tournaments!"
              />
              <Message type="success" className="mt-4">
                <div className="flex justify-between flex-col lg:items-center lg:flex-row">
                  <div>
                    Here you can create new team or use one of your team.
                  </div>
                  <div>
                    <Button
                      onClick={() => setShowModalCreateTeam(true)}
                      className="w-full md:w-auto"
                      size="small"
                      outlined
                    >Create a new team
                    </Button>
                  </div>
                </div>
              </Message>
              <TeamList className="mt-4" items={items} />
            </>
          )}
          <SectionLatestMatches className="mt-4" />
        </Container>
      </Layout>
    </>
  )
}

export default withAuth(FindScrimPage)

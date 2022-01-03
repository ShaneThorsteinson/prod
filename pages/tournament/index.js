import Layout from 'components/layout'
import PageHeader from 'components/page/page-header'
import Section from 'components/section'
import TournamentCard from 'components/tournament/tournament-card'
import Container from 'components/ui/container'
import SectionFeaturedTeams from 'containers/section-featured-teams'
import ApiService from 'helpers/api-service'
import IconTrophy from 'icons/trophy'
import Head from 'next/head'

export default function TournamentIndexPage ({ activeTournaments = [], pastTournaments = [] }) {
  return (
    <>
      <Head>
        <title>Tournaments</title>
      </Head>
      <Layout>
        <Container className="mt-20 pt-10 page-tournaments__container">
          <PageHeader
            title="Tournaments"
            descripiton="Compete in tournaments to face better competition than scrims! This allows your team to improve at a faster rate. If you want discounted tournaments check out our Prestige Membership!"
          />

          <Section className="mt-6">
            <Section.Header
              title="Upcoming"
              titleSecondary="Tournaments"
              icon={<IconTrophy />}
              iconClasses="text-success-500"
            />
            <Section.Body>
              {activeTournaments.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activeTournaments.map(item => {
                    return (
                      <TournamentCard
                        key={item.id}
                        tournament={item}
                      />
                    )
                  })}
                </div>
              )}
              {activeTournaments.length === 0 && <div className="text-center text-white font-bold text-2xl">No tournaments</div>}
            </Section.Body>
          </Section>

          {pastTournaments.length > 0 && (
            <Section className="mt-6">
              <Section.Header
                title="Past"
                titleSecondary="Tournaments"
                icon={<IconTrophy />}
                iconClasses="text-primary-500"
              />
              <Section.Body className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pastTournaments.map(item => {
                  return (
                    <TournamentCard
                      key={item.id}
                      tournament={item}
                    />
                  )
                })}
              </Section.Body>
            </Section>
          )}

          <SectionFeaturedTeams className="mt-6" />
        </Container>
      </Layout>
    </>
  )
}

export async function getServerSideProps (context) {
  const activeTournaments = await ApiService.getTournaments({
    state: 'pending,in_progress'
  })

  const pastTournaments = await ApiService.getTournaments({
    state: 'ended'
  })

  return {
    props: {
      activeTournaments,
      pastTournaments
    }
  }
}

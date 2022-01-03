// import ArticleCard from 'components/article/article-card'
import Link from 'next/link'
import Hero from 'components/hero'
import Layout from 'components/layout'
import Section from 'components/section'
import TournamentCard from 'components/tournament/tournament-card'
// import TwitterCard from 'components/twitter/twitter-card'
import Button from 'components/ui/button'
import Container from 'components/ui/container'
import IconTrophy from 'icons/trophy'
// import Link from 'next/link'
import SectionFeaturedTeams from 'containers/section-featured-teams'
import Head from 'next/head'
import ApiService from 'helpers/api-service'

export default function Home ({ tournaments }) {
  return (
    <>
      <Head>
        <title>EsportsAgent</title>
      </Head>
      <Layout>
        <Container className="mt-20">
          <Hero />
          <Section>
            <Section.Header
              title="Upcoming"
              titleSecondary="Tournaments"
              icon={<IconTrophy />}
              iconClasses="text-success-500"
              actions={
                <div className="w-full mt-2 md:w-auto">
                  <Link href="/tournament" passHref>
                    <Button className="w-full md:w-auto" size="small" outlined>See all tournaments</Button>
                  </Link>
                </div>
              }
            />
            <Section.Body>
              {tournaments.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tournaments.map(item => {
                    return (
                      <TournamentCard
                        key={item.id}
                        tournament={item}
                      />
                    )
                  })}
                </div>
              )}
              {tournaments.length === 0 && <div className="text-center text-white font-bold text-2xl">No tournaments</div>}
            </Section.Body>
          </Section>

          {/* <Section className="mb-0">
            <Section.Header
              title="Latest"
              titleSecondary="News & Tweets"
              icon={<IconTrophy />}
              iconClasses="text-success-500"
              actions={
                <div className="w-full mt-2 md:w-auto">
                  <Link href="/news">
                    <a>
                      <Button className="w-full md:w-auto" size="small" outlined>See all news</Button>
                    </a>
                  </Link>
                </div>
              }
            />
            <Section.Body>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ArticleCard
                  image="/demo/article-card-image-1.png"
                  date="February 12, 2021"
                  title="Black Ops Cold War Leak: Raid may return"
                />
                <ArticleCard
                  image="/demo/article-card-image-2.png"
                  date="February 12, 2021"
                  title="Cold War Rule Updates 11/16/2020"
                />
                <ArticleCard
                  image="/demo/article-card-image-3.png"
                  date="February 12, 2021"
                  title="Cold War is getting new scorestreaks"
                />
              </div>
            </Section.Body>
          </Section> */}

          {/* <Section>
            <Section.Body className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <TwitterCard />
              <TwitterCard />
              <TwitterCard />
              <TwitterCard />
              <TwitterCard />
              <TwitterCard />
            </Section.Body>
          </Section> */}

          <SectionFeaturedTeams />
        </Container>
      </Layout>
    </>
  )
}

export async function getServerSideProps (context) {
  const tournaments = await ApiService.getTournaments({ take: 3, state: 'pending,in_progress' })
  return {
    props: {
      tournaments
    }
  }
}

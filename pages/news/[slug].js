import Article from 'components/article'
import Layout from 'components/layout'
import Container from 'components/ui/container'
import SectionFeaturedTeams from 'containers/section-featured-teams'
import SectionLatestTweets from 'containers/section-latest-tweets'
import SectionOtherNews from 'containers/section-other-news'
import Head from 'next/head'

export default function NewsArticlePage () {
  return (
    <>
      <Head>
        <title>Article</title>
      </Head>
      <Layout>
        <Container className="mt-20">
          <div className="mb-6 pt-14 flex flex-col lg:flex-row">
            <main className="flex-1 lg:mr-8">
              <Article />
            </main>
            <aside className="mt-6 lg:mt-0 lg:w-96">
              <SectionLatestTweets />
              <SectionOtherNews className="mt-6" />
            </aside>
          </div>
          <SectionFeaturedTeams />
        </Container>
      </Layout>
    </>
  )
}

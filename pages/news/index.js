import Layout from 'components/layout'
import Container from 'components/ui/container'
import SectionFeaturedTeams from 'containers/section-featured-teams'
import SectionNewsGrid from 'containers/section-news-grid'
import SectionNewsPrimary from 'containers/section-news-primary'
import Head from 'next/head'

export default function NewsPage () {
  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <Layout>
        <Container className="mt-20">
          <SectionNewsPrimary />
          <SectionNewsGrid />
          <SectionFeaturedTeams className="-mt-16 relative z-50" />
        </Container>
      </Layout>
    </>
  )
}

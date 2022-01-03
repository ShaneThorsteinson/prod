
import ArticleCard from 'components/article/article-card'
import SectionLatestTweets from './section-latest-tweets'

const SectionNewsPrimary = () => {
  return (
    <div className="flex flex-col lg:flex-row pt-20">
      <ArticleCard
        id={1}
        size="large"
        className="mb-4 lg:mb-0 lg:mr-4"
        image="/demo/article-primary-image.jpg"
        date="February 12, 2021"
        title="Black Ops Cold War Leak: Raid may return"
      />

      <SectionLatestTweets />
    </div>
  )
}

export default SectionNewsPrimary

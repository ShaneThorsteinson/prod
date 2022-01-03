import Section from 'components/section'
import IconTrophy from 'icons/trophy'
import ArticleCard from 'components/article/article-card'

const SectionOtherNews = (props) => {
  return (
    <section {...props}>
      <Section.Header
        title="Other"
        titleSecondary="news"
        icon={<IconTrophy />}
        iconClasses="text-primary-500"
      />
      <Section.Body className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
        <ArticleCard
          id={1}
          image="/demo/article-card-image-1.png"
          date="February 12, 2021"
          title="Black Ops Cold War Leak: Raid may return"
        />
        <ArticleCard
          id={2}
          image="/demo/article-card-image-2.png"
          date="February 12, 2021"
          title="Black Ops Cold War Leak: Raid may return"
        />
      </Section.Body>
    </section>
  )
}

export default SectionOtherNews

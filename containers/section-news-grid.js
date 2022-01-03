import ArticleCard from 'components/article/article-card'
import Section from 'components/section'
import Button from 'components/ui/button'
import useMedia from 'hooks/use-media'
import { useState } from 'react'

const SectionNewsGrid = () => {
  const columnCount = useMedia(['lg', 'md'], [3, 2], 1)

  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [items, setItems] = useState([
    {
      id: 1,
      image: '/demo/article-card-image-1.png',
      date: 'February 12, 2021',
      title: 'Black Ops Cold War Leak: Raid may return'
    },
    {
      id: 2,
      image: '/demo/article-card-image-2.png',
      date: 'February 11, 2021',
      title: 'Cold War Rule Updates 11/16/2020'
    },
    {
      id: 3,
      image: '/demo/article-card-image-3.png',
      date: 'February 10, 2021',
      title: 'Black Ops Cold War Leak: Raid may return'
    },
    {
      id: 4,
      image: '/demo/article-card-image-4.png',
      date: 'February 09, 2021',
      title: 'Leak reveals Alcatraz coming to Warzone'
    },
    {
      id: 5,
      image: '/demo/article-card-image-5.png',
      date: 'February 08, 2021',
      title: 'Infinity Ward Bans 70k Warzone Cheaters'
    },
    {
      id: 6,
      image: '/demo/article-card-image-6.png',
      date: 'February 07, 2021',
      title: 'Call of Duty Challengers Cups #3 Recap'
    },
    {
      id: 7,
      image: '/demo/article-card-image-7.png',
      date: 'February 06, 2021',
      title: 'Black Ops Cold War Leak: Raid may return '
    },
    {
      id: 8,
      image: '/demo/article-card-image-8.png',
      date: 'February 05, 2021',
      title: 'Cold War is getting new scorestreaks'
    },
    {
      id: 9,
      image: '/demo/article-card-image-9.png',
      date: 'February 04, 2021',
      title: 'Cold War Rule Updates 11/16/2020'
    },
    {
      id: 10,
      image: '/demo/article-card-image-1.png',
      date: 'February 03, 2021',
      title: 'Black Ops Cold War Leak: Raid may return'
    },
    {
      id: 11,
      image: '/demo/article-card-image-1.png',
      date: 'February 02, 2021',
      title: 'Black Ops Cold War Leak: Raid may return'
    },
    {
      id: 12,
      image: '/demo/article-card-image-1.png',
      date: 'February 01, 2021',
      title: 'Black Ops Cold War Leak: Raid may return'
    }
  ])

  const handleLoadMore = () => {
    setIsLoadingMore(true)
    setTimeout(() => {
      setItems([
        ...items,
        ...[1, 2, 3, 4, 5, 6].map(() => ({ id: Math.floor(Math.random() * 1000), image: '/demo/article-card-image-1.png', date: 'February 01, 2021', title: 'Black Ops Cold War Leak: Raid may return' }))
      ])
      setIsLoadingMore(false)
    }, 1000)
  }

  return (
    <section className="section-news-grid">
      <Section.Body className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="section-news-grid__col space-y-4">
          {items.filter((_, index) => index % columnCount === 0).map(item => (
            <ArticleCard
              key={item.id}
              {...item}
            />
          ))}
        </div>

        {columnCount >= 2 && (
          <div className="section-news-grid__col space-y-4">
            {items.filter((_, index) => (index - 1) % columnCount === 0).map((item, i) => (
              <ArticleCard
                style={{ height: i === 0 ? 260 : null }}
                key={item.id}
                {...item}
              />
            ))}
          </div>
        )}

        {columnCount >= 3 && (
          <div className="section-news-grid__col space-y-4">
            {items.filter((_, index) => (index - 2) % columnCount === 0).map(item => (
              <ArticleCard
                key={item.id}
                {...item}
              />
            ))}
          </div>
        )}

      </Section.Body>

      <div className="section-news-grid__loadmore">
        <Button
          onClick={handleLoadMore}
          disabled={isLoadingMore}
          outlined
        >
          {isLoadingMore ? 'Loading...' : 'Load more'}
        </Button>
      </div>
    </section>
  )
}

export default SectionNewsGrid

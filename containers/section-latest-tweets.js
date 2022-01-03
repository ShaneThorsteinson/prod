import Section from 'components/section'
import TwitterCard from 'components/twitter/twitter-card'
import IconTwitter from 'icons/twitter'
import useMedia from 'hooks/use-media'
import { useEffect, useState } from 'react'

const SectionLatestTweets = () => {
  const tweetsCount = useMedia(['lg', 'md'], [3, 4], 6)
  const [tweets, setTweets] = useState([])
  useEffect(() => {
    const items = new Array(tweetsCount).fill(null)
    setTweets(items)
  }, [tweetsCount])

  return (
    <section>
      <Section.Header
        title="Latest"
        titleSecondary="from twitter"
        icon={<IconTwitter />}
        iconClasses="text-twitter"
        actions={
          <a href="#" className="text-xs text-twitter flex items-center">@ESPORTS_AGENTS</a>
        }
      />
      <Section.Body className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1 lg:gap-2">
        {tweets.map((_, index) => <TwitterCard key={index} />)}
      </Section.Body>
    </section>
  )
}

export default SectionLatestTweets

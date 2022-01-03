import ArticleBody from 'components/article/article-body'
import ArticleCover from 'components/article/article-cover'
import ArticleHeader from 'components/article/article-header'
import Link from 'next/link'
import IconArrowLeft from 'icons/arrow-left'

const Article = () => {
  return (
    <article>
      <Link href="/news">
        <a className="text-gray-500 uppercase text-sm inline-flex items-center"><IconArrowLeft size={14} /> <span className="ml-2">back to news</span></a>
      </Link>

      <ArticleHeader
        date="FEBRUARY 12, 2021"
        title="Black Ops Cold War Leak: Raid may return"
        author="John Doe"
      />
      <ArticleCover
        image="/demo/article-single.jpg"
        className="mt-6"
      />
      <ArticleBody className="mt-6">
        Treyarch has released another patch for Call of Duty: Black Ops Cold War that addresses an exploit and the weapon XP debacle.
        <br />The exploit that has been fixed was one that saw players escaping the boundaries of Nuketown &lsquo;84. Players had found a gap to exit the confines of the map that allowed them to stay alive and continue racking up kills on unsuspecting opponents.
        <br /><br />In regards to weapon XP, Treyarch dropped the ball with standardizing double XP between Multiplayer and Zombies. Both modes now allow for faster weapon leveling. Prior to this, players noticed a massive gain in weapon XP while playing Zombies. A hotfix actually made things worse, causing Zombies players to notice that weapon XP was nearly nonexistent in later rounds and as a Solo.
        <br /><br />Here is the full patch notes post directly from Treyarch:We hope everyone had a safe and relaxing holiday break!
        <br /><br />Coming out of last week’s 2XP + 2WXP event, we’ve made some additional tuning changes to global Weapon XP earn rates across the board. Starting today, you’ll now level up your weapons and unlock more attachments faster than the previous standard rate in both MP and Zombies.
        <br /><br />We’ve also addressed an issue in Zombies that was causing lower-than-targeted Weapon XP earn rates in solo matches and in later rounds. To thank everyone for their patience, we’re planning even more 2WXP events in December.
        <br /><br />While the patch is not a massive one, it will certainly be welcomed by Black Ops Cold War players. The announcement of even more double XP events in December is also great news.
      </ArticleBody>
    </article>
  )
}

export default Article

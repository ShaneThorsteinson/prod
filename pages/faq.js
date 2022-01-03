import Layout from 'components/layout'
import PageHeader from 'components/page/page-header'
// import Block from 'components/ui/block'
import Collapse from 'components/ui/collapse'
import Container from 'components/ui/container'
// import Input from 'components/ui/input'
import SectionFeaturedTeams from 'containers/section-featured-teams'
// import IconMagnifyingGlass from 'icons/magnifying-glass'
import Head from 'next/head'

const BlankLink = ({ href, children, ...props }) => {
  return <a className="text-primary-500 underline" target="_blank" rel="noreferrer" href={href} {...props}>{children || href}</a>
}

export default function FAQPage () {
  const twitterLink = <a className="text-primary-500 underline" target="_blank" rel="noreferrer" href="https://twitter.com/CallOfDutyAgent">@CallOfDutyAgent</a>
  return (
    <>
      <Head>
        <title>FAQ</title>
      </Head>
      <Layout>
        <Container className="mt-20 pt-10">
          <PageHeader
            title="Frequently Asked Questions"
            descripiton={<>If you have any further questions DM us on Twitter {twitterLink}</>}
          />

          {/* <Block className="p-6 mt-10" shined={false}>
            <Input placeholder="Please, type your question" iconRight={<IconMagnifyingGlass size={20} className="mr-4 cursor-pointer" />} />
          </Block> */}

          <Collapse.Group className="mt-6">
            <Collapse title="How do I get prestige if I don't have a card?">
              Go to <BlankLink href="https://www.patreon.com/codagent" /> and subscribe there.
              Send screenshot to {twitterLink} when done.
            </Collapse>
            <Collapse title="Does prestige pay for my whole team or just me?">
              Prestige only pays for one player. So if you have prestige and no one else on your team has it, in a $20 entry tourney the entry would be $15 (your 1/4 deducted). If two of you had it in the same scenario it would be $10. If all of you had it, it would be completely free!
            </Collapse>
            <Collapse title="If I don’t want to stream on PC can I periscope my screen with my phone?">
              Yes, link us the stream in twitter DMs {twitterLink}!
            </Collapse>
            <Collapse title="Can I request a monitor cam or PC reset?">
              Yes you can request both of these, make sure to do so with consent of an admin by dming {twitterLink} on Twitter.
            </Collapse>
            <Collapse title="How do I monitor cam and PC reset?">
              Watch this video for monitor cam:<br />
              Twitter live: <BlankLink href="https://youtube.com/shorts/1Byzq4Kbcec?feature=share" /><br />
              On stream (if they want delay): <BlankLink href="https://youtu.be/BPOQ-hx87t0" /><br />
              Watch this for PC reset: <BlankLink href="https://youtu.be/J7txIPpnvPo" /> (full video)
            </Collapse>
          </Collapse.Group>

          <SectionFeaturedTeams className="mt-6" />
        </Container>
      </Layout>
    </>
  )
}

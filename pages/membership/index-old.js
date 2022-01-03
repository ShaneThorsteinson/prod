import Layout from 'components/layout'
import PageHeader from 'components/page/page-header'
import Block from 'components/ui/block'
import Button from 'components/ui/button'
import Container from 'components/ui/container'
import List from 'components/ui/list'
import IconCheckCircle from 'icons/check-circle'
import Head from 'next/head'
import Link from 'next/link'

export default function MembershipPage () {
  return (
    <>
      <Head>
        <title>Upgrade Membership</title>
      </Head>
      <Layout>
        <Container className="mt-20 pt-10 page-membership__container">
          <PageHeader
            title="Upgrade Membership"
            descripiton="We offer three tiers of prestige so people of all backgrounds and budgets can compete in our highest tier tournaments!"
          />

          <div className="mt-10 mx-auto grid lg:grid-cols-3 gap-4">
            <div>
              <Block className="pb-8" shined>
                <div className="py-8 flex flex-col items-center justify-center">
                  <div className="text-gray-500 text-xl font-semibold">Free Member</div>
                  <div className="mt-2">
                    <span className="text-gray-500 text-xl align-top mr-[2px]">$</span>
                    <span className="text-white text-[40px] font-semibold leading-none">0</span>
                    <span className="text-gray-500 text-[30px] font-semibold">/mo</span>
                  </div>
                </div>

                <List className="grid md:grid-flow-col md:grid-cols-2 md:grid-rows-6 lg:grid-flow-row lg:grid-cols-none lg:grid-rows-none gap-1">
                  <List.Item icon={<IconCheckCircle size={18} />}>Team captain only can find a scrim</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>One team only</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>One default team logo</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Non-prestige scrim finder</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Standard earnings after winning scrim</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Priority in tournament seed</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Access to standard tournaments only</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Prestige player resume PDF export</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Post a highlight video on profile</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Track specific in-game states</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>See division rank only</List.Item>
                </List>
              </Block>
            </div>

            <div>
              <Block className="border-primary-700" shined>
                <div className="py-8 flex flex-col items-center justify-center">
                  <div className="text-gray-500 text-xl font-semibold">CODAgent Prestige</div>
                  <div className="mt-2">
                    <span className="text-gray-500 text-xl align-top mr-[2px]">$</span>
                    <span className="text-white text-[40px] font-semibold leading-none">4.99</span>
                    <span className="text-gray-500 text-[30px] font-semibold">/mo</span>
                  </div>
                </div>

                <List className="grid md:grid-flow-col md:grid-cols-2 md:grid-rows-6 lg:grid-flow-row lg:grid-cols-none lg:grid-rows-none gap-1">
                  <List.Item icon={<IconCheckCircle size={18} />}>All Prestige members can find scrim</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Unlimited number of teams</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Choose predefined team logo or upload yours</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Prestige scrim finder</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Earn 10% more ELO after winning scrim</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Priority in tournament seed</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Access to Premium and standard tournaments</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Prestige player resume PDF export</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Post a highlight video on profile</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Track specific in-game states</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>See exact player rank</List.Item>
                </List>

                <div className="py-8 px-5">
                  <Link href="/membership/upgrade">
                    <Button className="w-full" shined>Get started</Button>
                  </Link>
                </div>
              </Block>
            </div>

            <div>
              <Block shined>
                <div className="py-8 flex flex-col items-center justify-center">
                  <div className="text-gray-500 text-xl font-semibold">CODAgent Prestige Masters</div>
                  <div className="mt-2">
                    <span className="text-gray-500 text-xl align-top mr-[2px]">$</span>
                    <span className="text-white text-[40px] font-semibold leading-none">19.99</span>
                    <span className="text-gray-500 text-[30px] font-semibold">/mo</span>
                  </div>
                </div>

                <List className="grid md:grid-flow-col md:grid-cols-2 md:grid-rows-6 lg:grid-flow-row lg:grid-cols-none lg:grid-rows-none gap-1">
                  <List.Item icon={<IconCheckCircle size={18} />}>Free entry to all paid tournaments</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>All Prestige members can find scrim</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Unlimited number of teams</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Choose predefined team logo or upload yours</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Prestige scrim finder</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Earn 10% more ELO after winning scrim</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Priority in tournament seed</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Access to Premium and standard tournaments</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Prestige player resume PDF export</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Post a highlight video on profile</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>Track specific in-game states</List.Item>
                  <List.Item icon={<IconCheckCircle size={18} />}>See exact player rank</List.Item>
                </List>

                <div className="py-8 px-5">
                  <Link href="/membership/upgrade">
                    <Button className="w-full" shined>Get started</Button>
                  </Link>
                </div>
              </Block>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}

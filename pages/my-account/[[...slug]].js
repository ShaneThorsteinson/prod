import Layout from 'components/layout'
import ProfileHeader from 'components/profile/profile-header'
import Container from 'components/ui/container'
import Tabs from 'components/ui/tabs'
import SectionFeaturedTeams from 'containers/section-featured-teams'
import TabProfileOverview from 'containers/tab-profile-overview'
import TabProfileAccomplishments from 'containers/tab-profile-accomplishments'
import TabProfileMyTeams from 'containers/tab-profile-my-teams'
import TabProfileLinkedAccounts from 'containers/tab-profile-linked-accounts'
import TabProfileSubscriptionSettings from 'containers/tab-profile-subscription-settings'
// import TabProfileAccountSettings from 'containers/tab-profile-account-settings'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import withAuth from 'hoc/withAuth'
import Head from 'next/head'
import TabProfileMyWallet from 'containers/tab-profile-wallet'
import TabProfileMyTeamSingle from 'containers/tab-profile-my-team-single'

function ProfilePage () {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    if (router.query?.slug) {
      setActiveTab(router.query.slug[0])
    }
  }, [router.query])

  const handleClickTab = key => {
    router.replace(`/my-account/${key}`)
    setActiveTab(key)
  }

  return (
    <>
      <Head>
        <title>Account - {activeTab}</title>
      </Head>
      <Layout>
        <div className="mt-20" />
        <ProfileHeader />
        <Container>
          <Tabs
            activeKey={activeTab}
            onTabClick={handleClickTab}
            defaultActiveKey="overview"
            className="tab-profile"
            size="large"
          >
            <Tabs.Item tab="overview" key="overview">
              <TabProfileOverview />
            </Tabs.Item>
            <Tabs.Item tab="My Teams" key="teams">
              {router.query.slug.length === 1 && <TabProfileMyTeams />}
              {router.query.slug.length > 1 && <TabProfileMyTeamSingle teamId={router.query.slug[1]} />}
            </Tabs.Item>
            <Tabs.Item tab="accomplishments" key="accomplishments">
              <TabProfileAccomplishments />
            </Tabs.Item>

            <Tabs.Item tab="Linked Accounts" key="linked-accounts">
              <TabProfileLinkedAccounts />
            </Tabs.Item>
            <Tabs.Item tab="Subscription Settings" key="subscription-settings">
              <TabProfileSubscriptionSettings />
            </Tabs.Item>

            {/* <Tabs.Item tab="Account Settings" key="account-settings">
              <TabProfileAccountSettings />
            </Tabs.Item> */}
            <Tabs.Item tab="My wallet" key="wallet">
              <TabProfileMyWallet />
            </Tabs.Item>
          </Tabs>
          <SectionFeaturedTeams className="mt-4" />
        </Container>
      </Layout>
    </>
  )
}

export default withAuth(ProfilePage)

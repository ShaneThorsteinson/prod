import Layout from 'components/layout'
import PageHeader from 'components/page/page-header'
import Button from 'components/ui/button'
import Container from 'components/ui/container'
import Message from 'components/ui/message'
import ModalEditTeam from 'containers/modal-edit-team'
import ModalUseTeam from 'containers/modal-use-team'
import SectionFindScrim from 'containers/section-find-scrim'
import SectionLatestMatches from 'containers/section-latest-matches'
import Link from 'next/link'
import { useState } from 'react'
// import useRequireAuth from 'hooks/use-require-auth'

export default function FindScrimActiveMatchPage () {
  const [showModalCreateTeam, setShowModalCreateTeam] = useState(false)
  const [showModalUseTeam, setShowModalUseTeam] = useState(false)

  return (
    <>
      {showModalCreateTeam && <ModalEditTeam onClose={() => setShowModalCreateTeam(false)} />}
      {showModalUseTeam && <ModalUseTeam onClose={() => setShowModalUseTeam(false)} />}

      <Layout>
        <Container className="mt-20 pt-10">
          <PageHeader
            title="Scrim Finder"
            descripiton="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl tellus, elementum quis sodales at, sagittis ut nulla. Praesent sed turpis eu diam vulputate iaculis nec ac nunc."
          />
          <div className="mt-4" />
          <Message type="success">
            <div className="flex justify-between flex-col lg:items-center lg:flex-row">
              <div>
                Your team <span className="text-primary-500">Los Angeles Guerillas</span> has one activated scrim match at this time.
              </div>
              <div className="flex flex-col space-x-0 space-y-2 mt-2 items-start md:flex-row md:space-y-0 md:space-x-2 lg:mt-0">
                <Link href="/scrim-finder/match-team-a-captain">
                  <Button
                    className="w-full md:w-auto"
                    size="small"
                    outlined
                  >go to match page
                  </Button>
                </Link>
              </div>
            </div>
          </Message>

          <div className="mt-4 grid gap-4 lg:grid-cols-12">
            {/* <TeamInfo
              team={{}}
              className="p-4 md:pt-6 lg:p-8 lg:pt-6 lg:col-span-8"
              isActiveMatch
            /> */}
            <SectionFindScrim />
          </div>

          <SectionLatestMatches className="mt-4" />
        </Container>
      </Layout>
    </>
  )
}

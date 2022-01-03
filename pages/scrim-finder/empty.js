import { useState } from 'react'
import Layout from 'components/layout'
import PageHeader from 'components/page/page-header'
import Button from 'components/ui/button'
import Container from 'components/ui/container'
import ModalEditTeam from 'containers/modal-edit-team'
import SectionLatestMatches from 'containers/section-latest-matches'

export default function FindScrimEmptyPage () {
  const [showModalCreateTeam, setShowModalCreateTeam] = useState(false)
  return (
    <>
      {showModalCreateTeam && <ModalEditTeam onClose={() => setShowModalCreateTeam(false)} />}

      <Layout>
        <Container className="mt-20 page-findscrim-empty__container">
          <PageHeader
            title="Scrim Finder"
            descripiton="You currently have no team. In order to Find scrim, you’ll need to create team first. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper mattis nibh."
            className="pb-10 pt-5 md:py-[20vh]"
          >
            <Button
              onClick={() => setShowModalCreateTeam(true)}
              className="mt-4"
              shined
            >create a team
            </Button>
          </PageHeader>
          <SectionLatestMatches className="mt-4" />
        </Container>
      </Layout>
    </>
  )
}

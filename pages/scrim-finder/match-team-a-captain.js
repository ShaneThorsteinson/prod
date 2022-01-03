/* eslint-disable */
import Layout from 'components/layout'
import TeamCardMatch from 'components/team/team-card-match'
import Container from 'components/ui/container'
import Hexagon from 'components/ui/hexagon'
import ModalEditTeam from 'containers/modal-edit-team'
import SectionLatestMatches from 'containers/section-latest-matches'
import IconCrosshair from 'icons/crosshair'
import { useState } from 'react'

export default function FindScrimMatchPage () {
  const [showModalCreateTeam, setShowModalCreateTeam] = useState(false)

  return (
    <>
      {/* {showModalCreateTeam && <ModalEditTeam onClose={() => setShowModalCreateTeam(false)} />} */}
      null
      {/* <Layout>
        <Container className="mt-20 pt-14 bg-soldier--5">
          <div className="flex flex-col justify-center items-center">
            <Hexagon size={60} icon={<IconCrosshair size={18} />} className="text-primary-500" />
            <div className="mt-1 text-white text-4xl font-semibold">Ready! Steady! Match!</div>
          </div>

          <TeamCardMatch
            captain="A"
            className="mt-6"
          />

          <SectionLatestMatches className="mt-4" />
        </Container>
      </Layout> */}
    </>
  )
}

import clsx from 'clsx'
import Label from 'components/ui/label'
import RankDivision from 'components/ui/rank-division'
import ModalTeamInfo from 'containers/modal-team-info'
import IconCrosshair from 'icons/crosshair'
import IconTrophy from 'icons/trophy'
import { useState } from 'react'

const TeamCardMini = ({ logo, division, name, className, ...props }) => {
  const [showModalTeamInfo, setShowModalTeamInfo] = useState(false)

  return (
    <>
      {showModalTeamInfo && (
        <ModalTeamInfo
          logo={logo}
          name={name}
          onClose={() => setShowModalTeamInfo(false)}
        />
      )}

      <div
        className={clsx('team-card-mini', className)}
        onClick={() => setShowModalTeamInfo(true)}
        {...props}
      >
        <img className="team-card-mini__bg" src={logo} alt="" />
        <div className="team-card-mini__logo">
          <img src={logo} alt="" />
        </div>
        <div className="team-card-mini__content space-y-1">
          <div className="team-card-mini__name">{name}</div>
          <RankDivision
            size="small"
            division={division}
          />
          <Label.Group>
            <Label.Stats icon={<IconCrosshair size={18} />} w={22} l={12} />
            <Label.Stats icon={<IconTrophy />} w={22} l={12} />
          </Label.Group>
        </div>
      </div>
    </>
  )
}

export default TeamCardMini

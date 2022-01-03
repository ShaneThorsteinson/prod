import Section from 'components/section'
import Block from 'components/ui/block'
import Hexagon from 'components/ui/hexagon'
import IconInfo from 'icons/info'
import IconTrophy from 'icons/trophy'
import Message from 'components/ui/message'
import { useState } from 'react'
import Button from 'components/ui/button'
import IconPaperclip from 'icons/paperclip'

export default function TabTournamentRules ({ tournament }) {
  const [showMessage, setShowMessage] = useState(false)

  return (
    <>
      <div className="mt-4">
        {showMessage && <Message onClose={() => setShowMessage(false)} type="warning">This is some dynamic announcement WARNING message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper mattis nibh. Vestibulum varius sem id tortor dictum, a ullamcorper ante volutpat. Nam mattis blandit gravida. Donec id libero et elit venenatis euismod</Message>}

        <div className="mt-4 grid gap-4 lg:grid-cols-12">
          <Block className="p-4 md:pt-6 lg:p-8 lg:pt-6 lg:col-span-8">
            <Section.Header
              title="Tournament"
              titleSecondary="Rules"
              icon={<Hexagon style={{ color: 'rgba(0, 113, 238, 1)' }} icon={<IconTrophy />} />}
            />
            <div className="mt-4">
              <p className="text-gray-500 whitespace-pre-line">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper mattis nibh. Vestibulum varius sem id tortor dictum, a ullamcorper ante volutpat. Nam mattis blandit gravida. Donec id libero et elit venenatis euismod. Mauris sapien lacus, eleifend ut ultricies et, gravida eget risus.
                <br /><br />
                Donec sit amet luctus diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus nec ante tincidunt, auctor felis id, aliquam mauris. Mauris malesuada quam vel lorem vulputate, id venenatis nisl ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                <br /><br />
                Nullam massa elit, convallis non volutpat cursus, condimentum sit amet ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras bibendum laoreet tortor ac egestas. Donec interdum euismodmattis.
              </p>
            </div>
          </Block>

          <Block className="p-4 md:pt-6 lg:p-8 lg:pt-6 lg:col-span-4">
            <Section.Header
              title="Documents"
              icon={<Hexagon style={{ color: 'rgba(0, 113, 238, 1)' }} icon={<IconInfo />} />}
            />
            <div className="mt-4">
              <div className="space-y-2">
                {tournament.ruleLink && (
                  <a href={tournament.ruleLink} target="_blank" rel="noreferrer">
                    <Button.Link className="text-left" icon={<IconPaperclip />}>
                      {tournament.ruleLink}
                    </Button.Link>
                  </a>
                )}
              </div>
            </div>
          </Block>
        </div>
      </div>
    </>
  )
}

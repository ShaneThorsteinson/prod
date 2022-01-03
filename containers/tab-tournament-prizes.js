import Section from 'components/section'
import Block from 'components/ui/block'
import Hexagon from 'components/ui/hexagon'
import IconInfo from 'icons/info'
import IconTrophy from 'icons/trophy'
import Message from 'components/ui/message'
import { useState } from 'react'

export default function TabTournamentPrizes () {
  const [showMessage, setShowMessage] = useState(true)

  return (
    <>
      <div className="mt-4">
        {showMessage && <Message onClose={() => setShowMessage(false)} type="error">This is some dynamic announcement ERROR message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper mattis nibh. Vestibulum varius sem id tortor dictum, a ullamcorper ante volutpat. Nam mattis blandit gravida. Donec id libero et elit venenatis euismod</Message>}

        <div className="mt-4 grid gap-4 lg:grid-cols-12">
          <Block className="p-4 md:pt-6 lg:p-8 lg:pt-6 lg:col-span-8">
            <Section.Header
              title="Tournament"
              titleSecondary="Rules"
              icon={<Hexagon style={{ color: 'rgba(0, 113, 238, 1)' }} icon={<IconTrophy />} />}
            />
            <div className="mt-4">
              <div className="text-gray-500 whitespace-pre-line">
                <div className="font-roboto font-semibold text-white uppercase text-sm">1st Place Prize</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper mattis nibh. Vestibulum varius sem id tortor dictum, a ullamcorper ante volutpat. Nam mattis blandit gravida. Donec id libero et elit venenatis euismod. Mauris sapien lacus, eleifend ut ultricies et, gravida eget risus.
                <br /><br />
                <div className="font-roboto font-semibold text-white uppercase text-sm">2st Place Prize</div>
                Donec sit amet luctus diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus nec ante tincidunt, auctor felis id, aliquam mauris. Mauris malesuada quam vel lorem vulputate, id venenatis nisl ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                <br /><br />
                <div className="font-roboto font-semibold text-white uppercase text-sm">3st Place Prize</div>
                Nullam massa elit, convallis non volutpat cursus, condimentum sit amet ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras bibendum laoreet tortor ac egestas. Donec interdum euismodmattis.
              </div>
            </div>
          </Block>

          <Block className="p-4 md:pt-6 lg:p-8 lg:pt-6 lg:col-span-4">
            <Section.Header
              title="Additional"
              titleSecondary="Info"
              icon={<Hexagon style={{ color: 'rgba(0, 113, 238, 1)' }} icon={<IconInfo />} />}
            />
            <div className="mt-4">
              <p className="text-gray-500 whitespace-pre-line">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper mattis nibh. Vestibulum varius sem id tortor dictum, a ullamcorper ante volutpat.
                <br /><br />
                Nam mattis blandit gravida. Donec id libero et elit venenatis euismod. Mauris sapien lacus, eleifend ut ultricies et, gravida eget risus. Donec sit amet luctus diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </p>
            </div>
          </Block>
        </div>
      </div>
    </>
  )
}

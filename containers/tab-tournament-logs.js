import Block from 'components/ui/block'
import Logs from 'components/logs'

export default function TabTournamentLogs () {
  const data = [
    {
      time: '10:32',
      text: 'Reported a 1-0, 1-0, 0-0 win for Anax Esports over SKC'
    },
    {
      time: '10:32',
      text: 'Reported a 0-2, 0-0, 0-0 win for PRMLGG over Valence'
    },
    {
      time: '10:32',
      text: 'Reported a 0-3, 0-0, 0-0, 0-0, 0-0 win for Wichita Wolves over Anax Esports'
    },
    {
      time: '10:32',
      text: 'Reported a 1-0 win for SKC over Azure Allegiance'
    },
    {
      time: '10:32',
      text: 'Reported a 0-1 win for PRMLGG over Rogue Gaming White'
    },
    {
      time: '10:32',
      text: 'Reported a 1-0, 1-0, 0-0 win for Anax Esports over SKC'
    },
    {
      time: '10:32',
      text: 'Reported a 0-3, 0-0, 0-0, 0-0, 0-0 win for Wichita Wolves over Anax Esports'
    },
    {
      time: '10:32',
      text: 'Reported a 0-3, 0-0, 0-0, 0-0, 0-0 win for Wichita Wolves over Anax Esports'
    },
    {
      time: '10:32',
      text: 'Reported a 0-3, 0-0, 0-0, 0-0, 0-0 win for Wichita Wolves over Anax Esports'
    },
    {
      time: '10:32',
      text: 'Reported a 0-3, 0-0, 0-0, 0-0, 0-0 win for Wichita Wolves over Anax Esports'
    },
    {
      time: '10:32',
      text: 'Reported a 0-3, 0-0, 0-0, 0-0, 0-0 win for Wichita Wolves over Anax Esports'
    }
  ]
  return (
    <>
      <div className="mt-4">
        <Block className="p-4 md:pt-6 lg:p-8 lg:pt-6 lg:col-span-8" shined>
          <Logs data={data} />
        </Block>
      </div>
    </>
  )
}

export default function TabTournamentBrackets ({ active = false, url }) {
  return (
    <>
      <div className="mt-4">
        <iframe
          src={`https://challonge.com/${url}/module?multiplier=1&amp;match_width_multiplier=1&amp;show_final_results=0&amp;show_standings=0&amp;theme=2&amp;subdomain=`}
          width="100%"
          height="480"
          frameBorder="0"
          scrolling="auto"
          allowtransparency="true"
          className="bg-gray-800"
        />
      </div>
    </>
  )
}

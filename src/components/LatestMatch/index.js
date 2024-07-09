import './index.css'

const LatestMatch = ({latestMatchDetails}) => {
  const formattedLatestMatchDetails = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }

  return (
    <div className="latest-matches-container">
      <div className="text-box-left">
        <p className="team-name-LatestMatch">
          {formattedLatestMatchDetails.competingTeam}
        </p>
        <p className="match-date">{formattedLatestMatchDetails.date}</p>
        <p className="venue">{formattedLatestMatchDetails.venue}</p>
        <p className="result">{formattedLatestMatchDetails.result}</p>
      </div>
      <img
        className="team-logo-LatestMatch"
        src={formattedLatestMatchDetails.competingTeamLogo}
        alt={`latest match ${formattedLatestMatchDetails.competingTeam}`}
      />
      <div className="text-box-right">
        <p className="main first-innings">First Innings</p>
        <p className="first-innings-team">
          {formattedLatestMatchDetails.firstInnings}
        </p>
        <p className="main second-innings">Second Innings</p>
        <p className="second-innings-team">
          {formattedLatestMatchDetails.secondInnings}
        </p>
        <p className="main man-of-the-match">Man Of The Match</p>
        <p className="man-of-the-match">
          {formattedLatestMatchDetails.manOfTheMatch}
        </p>
        <p className="main umpires">Umpires</p>
        <p className="umpires-data">{formattedLatestMatchDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch

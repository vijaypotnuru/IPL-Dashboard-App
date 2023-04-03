import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="team-match-info-logo-container">
        <div className="match-info">
          <p className="competing-team-name">{competingTeam}</p>
          <p className="match-date">{date}</p>
          <p className="match-venue">{venue}</p>
          <p className="match-result">{result}</p>
        </div>
        <img
          className="competing-team-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="team-match-more-info">
        <h1 className="more-info-heading">First Innings</h1>
        <p className="more-info-text">{firstInnings}</p>

        <h1 className="more-info-heading">Second Innings</h1>
        <p className="more-info-text">{secondInnings}</p>

        <h1 className="more-info-heading">Man Of The Match</h1>
        <p className="more-info-text">{manOfTheMatch}</p>

        <h1 className="more-info-heading">Umpires</h1>
        <p className="more-info-text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch

import './index.css'

const MatchCard = props => {
  const {matchDetailsData} = props
  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = matchDetailsData
  const cssValueMatchStatus = matchStatus === 'Won' ? 'won' : 'lost'
  return (
    <li className="match-card-item">
      <img
        className="match-card-team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-card-team-name">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={`match-status ${cssValueMatchStatus}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard

import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, teamImageUrl} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="ipl-team-link">
      <li className="ipl-team-item">
        <img className="ipl-team-logo" src={teamImageUrl} alt={name} />
        <p className="ipl-team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard

import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = ({teamCardDetails}) => {
  const {name, teamImageUrl, id} = teamCardDetails

  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className="list-item-container">
        <img alt={`${name}`} className="team-image-url" src={teamImageUrl} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard

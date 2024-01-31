import {Link} from 'react-router-dom'

import './index.css'

const Skill = props => {
  const {skill} = props

  const {logoUrl, name, id} = skill

  return (
    <Link to={`/courses/${id}`} className="link">
      <li className="li">
        <button className="btn2" type="button">
          <img src={logoUrl} alt={name} className="logo" />
          <p className="skill_name">{name}</p>
        </button>
      </li>
    </Link>
  )
}

export default Skill

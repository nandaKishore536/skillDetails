import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <Link to="/">
    <div className="head_bg">
      <button type="button" className="btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png "
          alt="website logo"
          className="img"
        />
      </button>
    </div>
  </Link>
)

export default Header

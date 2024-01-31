import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Skill from '../Skill'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Tech extends Component {
  state = {
    data: [],
    status: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getData()
  }

  retryBtn = () => {
    this.getData()
  }

  getData = async () => {
    this.setState({status: apiStatusConstants.inProgress})

    const response = await fetch('https://apis.ccbp.in/te/courses')

    if (response.ok) {
      const jsonData = await response.json()

      const subData = jsonData.courses.map(each => ({
        id: each.id,
        logoUrl: each.logo_url,
        name: each.name,
      }))

      this.setState({data: subData, status: apiStatusConstants.success})
    } else {
      this.setState({status: apiStatusConstants.failure})
    }
  }

  items = () => {
    const {data} = this.state

    return (
      <div className="main_div">
        <h1 className="c_h1">Courses</h1>
        <ul className="ul">
          {data.map(each => (
            <Skill key={each.id} skill={each} />
          ))}
        </ul>
      </div>
    )
  }

  loader = () => (
    <div data-testid="loader" className="lo">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  errorPage = () => (
    <div className="error_bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
        className="error_img"
      />

      <h1 className="error_msg">Oops! Something Went Wrong</h1>
      <p className="error_des">
        We cannot seem to find the page you are looking for.
      </p>
      <button type="button" className="error_btn" onClick={this.retryBtn}>
        Retry
      </button>
    </div>
  )

  renderAll = () => {
    const {status} = this.state

    switch (status) {
      case apiStatusConstants.success:
        return this.items()

      case apiStatusConstants.inProgress:
        return this.loader()

      case apiStatusConstants.failure:
        return this.errorPage()

      default:
        return null
    }
  }

  render() {
    return <div className="main">{this.renderAll()}</div>
  }
}

export default Tech

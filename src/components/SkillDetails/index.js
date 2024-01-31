import {Component} from 'react'

import Loader from 'react-loader-spinner'

import OutPut from '../OutPut'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SkillDetails extends Component {
  state = {
    skillData: [],
    status: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getSkillData()
  }

  getSkillData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({status: apiStatusConstants.inProgress})

    const url = `https://apis.ccbp.in/te/courses/${id}`

    const response = await fetch(url)

    if (response.ok) {
      const jsonData = await response.json()
      const Data = {
        id: jsonData.course_details.id,
        description: jsonData.course_details.description,
        imageUrl: jsonData.course_details.image_url,
        name: jsonData.course_details.name,
      }
      this.setState({skillData: Data, status: apiStatusConstants.success})
    } else {
      this.setState({status: apiStatusConstants.failure})
    }
  }

  skillRep = () => {
    const {skillData} = this.state
    return (
      <div className="skill_bg">
        <OutPut key={skillData.id} skill={skillData} />
      </div>
    )
  }

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
      <button type="button" className="error_btn" onClick={this.getSkillData}>
        Retry
      </button>
    </div>
  )

  loader = () => (
    <div data-testid="loader" className="lo">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderItems = () => {
    const {status} = this.state

    switch (status) {
      case apiStatusConstants.success:
        return this.skillRep()
      case apiStatusConstants.inProgress:
        return this.loader()

      case apiStatusConstants.failure:
        return this.errorPage()
      default:
        return null
    }
  }

  render() {
    return <div className="main">{this.renderItems()}</div>
  }
}

export default SkillDetails

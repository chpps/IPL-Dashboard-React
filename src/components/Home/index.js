import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    teamCardData: [],
  }

  componentDidMount() {
    this.getTeamCardDetails()
  }

  getTeamCardDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({isLoading: false, teamCardData: formattedData})
  }

  getTeamCards = () => {
    const {teamCardData} = this.state

    return (
      <ul className="unordered-list-container">
        {teamCardData.map(eachCardData => (
          <TeamCard key={eachCardData.id} teamCardDetails={eachCardData} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        <div className="heading-logo-container-home">
          <img
            className="ipl-logo-home-container"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="home-cont-heading">IPL Dashboard</h1>
        </div>

        <div className="home-team-cards-container">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            this.getTeamCards()
          )}
        </div>
      </div>
    )
  }
}

export default Home

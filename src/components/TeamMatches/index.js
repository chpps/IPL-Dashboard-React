import {Component} from 'react'
import Loader from 'react-loader-spinner'

import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const teamBackgroundColors = {
  RCB: '#d91c1f',
  CSK: '#f7db00',
  MI: '#13418b',
  KXP: '#a4261d',
  KKR: '#5755a7',
  SH: '#f26d22',
  RR: '#da237b',
  DC: '#4f5db0',
}

class TeamMatches extends Component {
  state = {teamData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: {id},
      },
    } = this.props
    if (prevProps.match.params.id !== id) {
      this.getTeamData()
    }
  }

  getTeamData = async () => {
    const {
      match: {
        params: {id},
      },
    } = this.props
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamData: updatedData, isLoading: false})
  }

  renderTeamDetails = () => {
    const {teamData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamData

    return (
      <div className="matches-info">
        <img
          className="teamBanner-teamMatches"
          src={teamBannerUrl}
          alt="team banner"
        />
        <p className="latest-matches-text">Latest Matches</p>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="team-matches-recent-matches">
          {recentMatches.map(eachMatch => (
            <MatchCard key={eachMatch.id} eachMatchDetails={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const {
      match: {
        params: {id},
      },
    } = this.props
    const backgroundColor = teamBackgroundColors[id] || '#000'

    return (
      <div
        style={{
          backgroundImage: `linear-gradient(to top, #0f172a, ${backgroundColor})`,
          textAlign: 'center',
          padding: '15px',
          paddingTop: '40px',
        }}
      >
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches

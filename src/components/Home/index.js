// Write your code here
import GetHeader from '../Header'
import './index.css'

const GetHome = () => (
  <div className="homeMain">
    <div className="homeContent1">
      <GetHeader />
      <div className="homeContent2">
        <img
          className="homeImage"
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          alt="home"
        />
        <img
          className="homeImage2"
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
        />
      </div>
    </div>
  </div>
)

export default GetHome

// Write your code here
import GetHeader from '../Header'
import './index.css'

const GetAbout = () => (
  <div className="aboutMain">
    <div className="aboutContent1">
      <GetHeader />
      <div className="aboutContent2">
        <img
          className="aboutImage"
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          alt="about"
        />
        <img
          className="aboutImage2"
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          alt="about"
        />
      </div>
    </div>
  </div>
)

export default GetAbout

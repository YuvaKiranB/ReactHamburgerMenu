// Write your code here
import GetHeader from '../Header'
import './index.css'

const GetNotFound = () => (
  <div className="notFoundMain">
    <GetHeader />
    <div className="notFoundContainer">
      <img
        className="notFoundImage"
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
      />
      <h1 className="notFoundHeading">Lost Your Way?</h1>
      <p className="notFoundPara">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default GetNotFound

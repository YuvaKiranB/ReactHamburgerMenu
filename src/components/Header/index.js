// Write your code here
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import './index.css'

const renderPopupContent = close => (
  <div className="popup-content">
    <div className="closeButtonContainer">
      {/* eslint-disable-next-line */}
      <button
        className="closeButton"
        data-testid="closeButton"
        onClick={() => close()}
        type="button"
      >
        <IoMdClose className="closeIcon" />
      </button>
    </div>
    <ul className="popupMenu">
      <li className="homeMenu">
        <Link className="homeLink2" to="/">
          <button type="button" className="homeButton">
            <AiFillHome className="homeIcon" />
            <p className="homePara">Home</p>
          </button>
        </Link>
      </li>
      <li className="aboutMenu">
        <Link className="aboutLink" to="/about">
          <button type="button" className="aboutButton">
            <BsInfoCircleFill className="aboutIcon" />
            <p className="aboutPara">About</p>
          </button>
        </Link>
      </li>
    </ul>
  </div>
)

const overlayStyles = {
  backgroundColor: '#ffff',
}

const GetHeader = () => (
  <div className="headerContainer">
    <div className="headerContent">
      <Link className="headerImageLink" to="/">
        <img
          className="headerImage"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <div className="popupContainer">
        <Popup
          modal
          trigger={
            /* eslint-disable-next-line */
            <button
              type="button"
              className="headerButton"
              data-testid="hamburgerIconButton"
            >
              <GiHamburgerMenu className="hamburgerIcon" />
            </button>
          }
          overlayStyle={overlayStyles}
        >
          {close => renderPopupContent(close)}
        </Popup>
      </div>
    </div>
    <hr className="hr" />
  </div>
)

export default GetHeader

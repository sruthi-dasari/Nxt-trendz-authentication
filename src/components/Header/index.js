import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="main-logo"
      />
      <button className="logout-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          className="nav-logout"
        />
      </button>
    </div>

    <div className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        className="nav-item-icon"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        className="nav-item-icon"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        className="nav-item-icon"
      />
    </div>
  </div>
)

export default Header

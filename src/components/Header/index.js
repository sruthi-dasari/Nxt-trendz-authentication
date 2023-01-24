import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="logo-container-sm">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="main-logo"
      />
      <button type="button" className="logout-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          className="nav-logout"
          alt="nav logout"
        />
      </button>
    </div>
    <div className="logo-container-md">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="main-logo"
      />
      <div className="nav-container-text">
        <p className="nav-item-text">Home</p>
        <p className="nav-item-text">Product</p>
        <p className="nav-item-text">Cart</p>
        <button type="button" className="logout-btn-md">
          Logout
        </button>
      </div>
    </div>

    <div className="nav-container-icon">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        className="nav-item-icon"
        alt="nav home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        className="nav-item-icon"
        alt="nav products"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        className="nav-item-icon"
        alt="nav cart"
      />
    </div>
  </div>
)

export default Header

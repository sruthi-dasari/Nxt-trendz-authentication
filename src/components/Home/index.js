import {Component} from 'react'
import './index.css'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="content-container">
          <div className="text-container">
            <h1 className="main-heading">Clothes that Get YOU noticed</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="banner-img"
            />
            <p className="para">
              Fashion is a part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button type="button" className="shop-now-btn">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="banner-img-md"
          />
        </div>
      </div>
    )
  }
}

export default Home

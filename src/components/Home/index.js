// Write your code here+
import Navbar from '../Navbar'

import './index.css'

import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          <div
            className={
              isDarkTheme
                ? 'dark-home-background dark-theme'
                : 'dark-home-background'
            }
          >
            <img
              className="home-image-style"
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
              }
              alt="home"
            />
            <h1 className={isDarkTheme ? 'dark-home-heading' : ''}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home

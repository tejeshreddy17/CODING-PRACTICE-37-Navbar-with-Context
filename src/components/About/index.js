// Write your code here

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const About = () => (
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
                  ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
              }
              alt="about"
            />
            <h1 className={isDarkTheme ? 'dark-home-heading' : ''}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About

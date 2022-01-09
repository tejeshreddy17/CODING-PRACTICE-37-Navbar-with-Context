// Write your code here

import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
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
              className="not-found-image-style"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={isDarkTheme ? 'dark-home-heading' : ''}>
              Lost Your Way ?
            </h1>
            <p className={isDarkTheme ? 'dark-home-heading' : ''}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound

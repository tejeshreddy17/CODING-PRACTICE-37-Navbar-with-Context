// Write your code here

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const changingTheme = () => {
        toggleTheme()
      }
      return (
        <nav
          className={
            isDarkTheme ? 'navbar-background dark-navbar ' : 'navbar-background'
          }
        >
          <img
            className="logo-style"
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
            }
            alt="website logo"
          />
          <ul>
            <Link className="link-item" to="/">
              <li className={isDarkTheme ? 'dark-li' : ''}>Home</li>
            </Link>
            <Link className="link-item" to="/about">
              <li className={isDarkTheme ? 'dark-li' : ''}>About</li>
            </Link>
          </ul>
          <button onClick={changingTheme} testid="theme" type="button">
            <img
              className="logo-style"
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
              }
              alt="theme"
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar

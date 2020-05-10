import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-tree"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h4>Welcome to </h4>
        <h1>Juniper College Prep </h1>
        <p>
          build your essay-writing skills, learn application tips and tricks, and prep for success with Juniper! {" "}
          <br />
          Join us at Juniper College Prep 2020. 
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Details
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Meet the Team!
          </button>
        </li>

        <li>
          <button
              onClick={() => {
                props.onOpenArticle('colleges')
              }}
            >
            Student Results
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Sign up!
          </button>
        </li>
        
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header

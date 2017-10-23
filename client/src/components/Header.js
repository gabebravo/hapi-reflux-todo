import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid"> 
            <div className="navbar-header"> 
              <button type="button" className="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-5" aria-expanded="false"> 
                <span className="sr-only">Toggle navigation</span> 
                <span className="icon-bar"></span> 
                <span className="icon-bar"></span> 
                <span className="icon-bar"></span> 
              </button> 
              <p className="navbar-brand" style={{ fontSize: "3rem" }}>Happi Todos</p> 
            </div> 
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-5"> 
            <p className="navbar-text navbar-right" style={{ fontSize: "1.5rem" }}>
              <Link style={{ color: '#000' }}to={this.props.linkTo}>{this.props.linkText}</Link>
            </p> 
            </div> 
          </div> 
        </nav>
      </div>
    )
  }
}

export default Header

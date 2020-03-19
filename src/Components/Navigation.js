import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navigation extends Component {
  render() {
    return (
      <div className='bg-danger'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4'>
              <Link className='navbar-brand text-light' to='/summary'>
                COVID-19
              </Link>
            </div>
            <div className='col-sm-8 '>
              <nav className='nav justify-content-end'>
                <Link className='nav-item nav-link text-light' to='/'>
                  Home
                </Link>
                <Link
                  className='nav-item nav-link text-light'
                  to='/summary'>
                  Summary
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;

import React from 'react'
import { Link } from 'react-router'

class Navbar extends React.Component{
  constructor(props){
    super(props)

  }

render() {
      return <div>
          <div className="container-fluid">
            <div className="row">
              <ul className="list-unstyled nav_style">
                <Link to="/music"><li className="nav_style_li col-sm-3">Music</li></Link>
                <Link to="/movies"><li className="nav_style_li col-sm-3">Movies</li></Link>
                <Link to="/farming"><li className="nav_style_li col-sm-3">Farming</li></Link>
                <Link to="/nationalparks"><li className="nav_style_li col-sm-3">National Parks</li></Link>
                {/* <li className="nav_style_li"><span className="">See All</span></li> */}
              </ul>
            </div>
          </div>
  </div>
}}

export default Navbar

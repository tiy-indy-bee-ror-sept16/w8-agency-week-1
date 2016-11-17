import React from 'react'
import { Link } from 'react-router'

class Navbar extends React.Component{
  constructor(props){
    super(props)

  }

render() {
      return <div>
            <div className='tabLinks text-center'>
              <Link to='/Music'>
              <button className='link1'>Music</button>
              </Link>
              <Link to='/Movies'>
              <button className='link2'>Movies</button>
              </Link>
              <Link to='/NationalParks'>
              <button className='link3'>National Parks</button>
              </Link>
              <Link to='/farming'>
              <button className='link4'>Farming</button>
              </Link>
              <Link to='/Items'>
              <button className='link5'>All Patches</button>
              </Link>
            </div>
  </div>
}}

export default Navbar

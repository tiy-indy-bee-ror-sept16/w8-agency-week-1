import React from 'react'
import Item from './Item'
import Music from './Music'
import Farming from './Farming'
import NationalParks from './NationalParks'
import Movies from './Movies'
import Home from './Home'
import { Link } from 'react-router'

class Items extends React.Component {
    constructor(props) {
        super(props)
        this.fetchAllPatches = this.fetchAllPatches.bind(this)
        this.state = {
          Patches: []
        }
    }

    componentDidMount() {
        this.fetchAllPatches()
    }

    fetchAllPatches(){
        fetch('/api/items')
        .then(response => response.json())
        .then(response => this.setState({Patches: response}))
        // .then(response => console.log(response))
    }
    render() {
        var items = this.state.Patches.map((data, i) => {
      return <Item data={data} key={i} />
        })
        return <div>
            <div className="container-fluid">
                <div className="row">
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
                  <Link to='/Farming'>
                  <button className='link4'>Farming</button>
                  </Link>
                  <Link to='/Items'>
                  <button className='link5'>All Patches</button>
                  </Link>
                </div>
                </div>
                </div>
                <div className="container">
                    <div className="row">
                        {items}
                    </div>
                </div>
        </div>
    }
}

export default Items

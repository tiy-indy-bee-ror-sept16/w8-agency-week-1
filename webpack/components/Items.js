import React from 'react'
import Item from './Item'
import Music from './Music'
import Farming from './Farming'
import NationalParks from './NationalParks'
import Movies from './Movies'

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

    fetchFarmingPatches(){
    fetch('/api/items')
    .then(response => response.json())
    .then(response => this.setState({Patches: response}))
    }
    fetchMusicPatches(){
    fetch('/api/items')
    .then(response => response.json())
    .then(response => this.setState({Patches: response}))
    }
    fetchMoviesPatches(){
    fetch('/api/items')
    .then(response => response.json())
    .then(response => this.setState({Patches: response}))
    }
    fetchNationalParksPatches(){
    fetch('/api/items')
    .then(response => response.json())
    .then(response => this.setState({Patches: response}))
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
                  <a href='#' className='link1'>Music</a>
                  <a href='#' className='link2'>Movies</a>
                  <a href='#' className='link3'>National Parks</a>
                  <a href='#' className='link4'>Farming</a>
                  <a href='#' className='link5'>Search Results</a>
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

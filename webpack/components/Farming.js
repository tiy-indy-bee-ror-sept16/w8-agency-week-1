import React from 'react'
import Item from './Item'
import Music from './Music'
import NationalParks from './NationalParks'
import Movies from './Movies'
import Home from './Home'
import Items from './Items'
// import { Link } from 'react-router'
import Navbar from './Navbar'

class Farming extends React.Component {
    constructor(props) {
        super(props)
        this.fetchFarmingPatches = this.fetchFarmingPatches.bind(this)
        this.state = {
          farmingPatches: []
        }
    }

    componentDidMount() {
        this.fetchFarmingPatches()
    }


    fetchFarmingPatches(){
        fetch('/api/filter?filter[category_name_eq]=Farming')
        .then(response => response.json())
        .then(response => this.setState({farmingPatches: response}))
    }
    render() {
        var farmingItems = this.state.farmingPatches.map((data, i) => {
      return <Item data={data} key={i} />
        })
        return <div>
        <Navbar/>
                <div className="container">
                    <div className="row">
                        {farmingItems}
                    </div>
                </div>
        </div>
    }
}

export default Farming

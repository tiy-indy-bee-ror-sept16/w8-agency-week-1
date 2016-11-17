import React from 'react'
import Item from './Item'
import Music from './Music'
import NationalParks from './NationalParks'
import Movies from './Movies'
import Home from './Home'
import Items from './Items'
import { Link } from 'react-router'

class Farming extends React.Component {
    constructor(props) {
        super(props)
        this.fetchFarmingPatches = this.fetchFarmingPatches.bind(this)
        this.state = {
          Patches: []
        }
    }

    componentDidMount() {
        this.fetchFarmingPatches()
    }

    fetchFarmingPatches(){
        fetch('/api/filter?filter[category_name_eq]=Farming')
        .then(response => response.json())
        // .then(response => this.setState({Patches: response}))
        .then(response => console.log(response))
    }
    render() {
        var items = this.state.Patches.map((data, i) => {
      return <Item data={data} key={i} />
        })
        return <div>
                <div className="container">
                    <div className="row">
                        {items}
                    </div>
                </div>
        </div>
    }
}

export default Farming

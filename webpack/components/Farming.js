import React from 'react'
import Item from './Item'
import Music from './Music'
import NationalParks from './NationalParks'
import Movies from './Movies'
import Home from './Home'
import Items from './Items'

class Farming extends React.Component {
    constructor(props) {
        super(props)
        this.fetchAllPatches = this.fetchAllPatches.bind(this)
        this.state = {
          farmingPatches: []
        }
    }

    componentDidMount() {
        this.fetchAllPatches()
    }

    fetchAllPatches(){
        fetch('/api/items')
        .then(response => response.json())
        .then(response => this.setState({farmingPatches: response}))
        // .then(response => console.log(response))
    }
    render() {
        var items = this.state.farmingPatches.map((data, i) => {
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

export default Items

import React from 'react'
import Item from './Item'
import Movies from './Movies'
import Music from './Music'
import Farming from './Farming'
import Home from './Home'
import Items from './Items'
import { Link } from 'react-router'
import Navbar from './Navbar'


class NationalParks extends React.Component {
    constructor(props) {
        super(props)
        this.fetchNationalParksPatches = this.fetchNationalParksPatches.bind(this)
        this.state = {
          NationalParksPatches: []
        }
    }

    componentDidMount() {
        this.fetchNationalParksPatches()
    }


    fetchNationalParksPatches(){
        fetch('/api/filter?filter[category_name_eq]=National Parks')
        .then(response => response.json())
        .then(response => this.setState({NationalParksPatches: response}))
    }
    render() {
        var NationalParksItems = this.state.NationalParksPatches.map((data, i) => {
      return <Item data={data} key={i} />
        })
        return <div>
                <div className="container">
                    <div className="row">
                        {NationalParksItems}
                    </div>
                </div>
        </div>
    }
}

export default NationalParks

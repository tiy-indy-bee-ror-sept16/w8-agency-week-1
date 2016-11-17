import React from 'react'
import Item from './Item'
import Music from './Music'
import Farming from './Farming'
import NationalParks from './NationalParks'
import Movies from './Movies'
import Home from './Home'
import { Link } from 'react-router'
import Navbar from './Navbar'
import Modal from 'react-modal'


class Items extends React.Component {
    constructor(props) {
        super(props)
        this.fetchAllPatches = this.fetchAllPatches.bind(this)
        this.state = {
          Patches: [],
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
                <Navbar/>
                <div className="container">
                    <div className="row">
                        <div onClick={this.openModal}>{items}</div>
                    </div>
                </div>
        </div>
    }
}

export default Items

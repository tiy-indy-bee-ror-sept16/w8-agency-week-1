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
import Footer from './Footer'
import Header from './Header'


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
            <div className="row borderHeader">
                <Header />
            </div>
            <div className="container-fluid">
              <div className="row">
                <ul className="list-unstyled nav_style not_home_nav">
                  <Link to="/music"><li className="nav_style_li col-sm-3">Music</li></Link>
                  <Link to="/movies"><li className="nav_style_li col-sm-3">Movies</li></Link>
                  <Link to="/farming"><li className="nav_style_li col-sm-3">Farming</li></Link>
                  <Link to="/nationalparks"><li className="nav_style_li col-sm-3">National Parks</li></Link>
                </ul>
              </div>
            </div>
            <div className="container">
                <div className="row">
                    <div onClick={this.openModal}>{items}</div>
                </div>
            </div>
            <hr/>
            <div className="container-fluid">
                <div className="row">
                    <Footer />
                </div>
            </div>
        </div>
    }
}

export default Items

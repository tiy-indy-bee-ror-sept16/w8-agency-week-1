import React from 'react'
import Item from './Item'
import Header from './Header'
import Music from './Music'
import NationalParks from './NationalParks'
import Movies from './Movies'
import Home from './Home'
import Items from './Items'
import { Link } from 'react-router'
import Footer from './Footer'

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
            <div className="row borderHeader">
                <Header />
            </div>
            <div className="container-fluid">
              <div className="row">
                <ul className="list-unstyled nav_style not_home_nav">
                  <Link to="/music"><li className="nav_style_li col-sm-3">Music</li></Link>
                  <Link to="/movies"><li className="nav_style_li col-sm-3">Movies</li></Link>
                  <Link to="/items"><li className="nav_style_li col-sm-3">All</li></Link>
                  <Link to="/nationalparks"><li className="nav_style_li col-sm-3">National Parks</li></Link>
                  {/* <li className="nav_style_li"><span className="">See All</span></li> */}
                </ul>
              </div>
            </div>
            <div className="container">
                <div className="row">
                    {farmingItems}
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

export default Farming

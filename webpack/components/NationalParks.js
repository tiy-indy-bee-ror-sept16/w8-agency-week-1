import React from 'react'
import Item from './Item'
import Movies from './Movies'
import Music from './Music'
import Farming from './Farming'
import Home from './Home'
import Items from './Items'
import { Link } from 'react-router'
import Footer from './Footer'
import Header from './Header'

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
            <div className="row borderHeader">
                <Header />
            </div>
            <div className="container-fluid">
              <div className="row">
                <ul className="list-unstyled nav_style not_home_nav">
                  <Link to="/music"><li className="nav_style_li col-sm-3">Music</li></Link>
                  <Link to="/movies"><li className="nav_style_li col-sm-3">Movies</li></Link>
                  <Link to="/farming"><li className="nav_style_li col-sm-3">Farming</li></Link>
                  <Link to="/items"><li className="nav_style_li col-sm-3">All</li></Link>
                  {/* <li className="nav_style_li"><span className="">See All</span></li> */}
                </ul>
              </div>
            </div>
            <div className="container">
                <div className="row">
                    {NationalParksItems}
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

export default NationalParks

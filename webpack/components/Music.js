import React from 'react'
import Item from './Item'
import Movies from './Movies'
import NationalParks from './NationalParks'
import Farming from './Farming'
import Home from './Home'
import Items from './Items'
import { Link } from 'react-router'
import Footer from './Footer'
import Header from './Header'

class Music extends React.Component {
    constructor(props) {
        super(props)
        this.fetchMusicPatches = this.fetchMusicPatches.bind(this)
        this.state = {
          MusicPatches: []
        }
    }

    componentDidMount() {
        this.fetchMusicPatches()
    }


    fetchMusicPatches(){
        fetch('/api/filter?filter[category_name_eq]=Music')
        .then(response => response.json())
        .then(response => this.setState({MusicPatches: response}))
    }
    render() {
        var MusicItems = this.state.MusicPatches.map((data, i) => {
      return <Item data={data} key={i} />
        })
        return <div>
            <div className="row borderHeader">
                <Header />
            </div>
            <div className="container-fluid">
              <div className="row">
                <ul className="list-unstyled nav_style not_home_nav">
                  <Link to="/items"><li className="nav_style_li col-sm-3">All</li></Link>
                  <Link to="/movies"><li className="nav_style_li col-sm-3">Movies</li></Link>
                  <Link to="/farming"><li className="nav_style_li col-sm-3">Farming</li></Link>
                  <Link to="/nationalparks"><li className="nav_style_li col-sm-3">National Parks</li></Link>
                  {/* <li className="nav_style_li"><span className="">See All</span></li> */}
                </ul>
              </div>
            </div>
            <div className="container">
                <div className="row">
                    {MusicItems}
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

export default Music

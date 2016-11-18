import React from 'react'
import Item from './Item'
import Music from './Music'
import NationalParks from './NationalParks'
import Farming from './Farming'
import Home from './Home'
import Items from './Items'
import { Link } from 'react-router'
import Footer from './Footer'
import Header from './Header'


class Movies extends React.Component {
    constructor(props) {
        super(props)
        this.fetchMoviesPatches = this.fetchMoviesPatches.bind(this)
        this.state = {
          MoviesPatches: []
        }
    }

    componentDidMount() {
        this.fetchMoviesPatches()
    }


    fetchMoviesPatches(){
        fetch('/api/filter?filter[category_name_eq]=Movies')
        .then(response => response.json())
        .then(response => this.setState({MoviesPatches: response}))
    }
    render() {
        var MoviesItems = this.state.MoviesPatches.map((data, i) => {
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
                  <Link to="/items"><li className="nav_style_li col-sm-3">All</li></Link>
                  <Link to="/farming"><li className="nav_style_li col-sm-3">Farming</li></Link>
                  <Link to="/nationalparks"><li className="nav_style_li col-sm-3">National Parks</li></Link>
                  {/* <li className="nav_style_li"><span className="">See All</span></li> */}
                </ul>
              </div>
            </div>
            <div className="container">
                <div className="row">
                    {MoviesItems}
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

export default Movies

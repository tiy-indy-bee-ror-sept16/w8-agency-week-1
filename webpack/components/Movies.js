import React from 'react'
import Item from './Item'
import Music from './Music'
import NationalParks from './NationalParks'
import Farming from './Farming'
import Home from './Home'
import Items from './Items'
import { Link } from 'react-router'
import Navbar from './Navbar'


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
                <div className="container">
                    <div className="row">
                        {MoviesItems}
                    </div>
                </div>
        </div>
    }
}

export default Movies

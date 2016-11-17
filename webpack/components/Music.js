import React from 'react'
import Item from './Item'
import Movies from './Movies'
import NationalParks from './NationalParks'
import Farming from './Farming'
import Home from './Home'
import Items from './Items'
import { Link } from 'react-router'
import Navbar from './Navbar'


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
                <div className="container">
                    <div className="row">
                        {MusicItems}
                    </div>
                </div>
        </div>
    }
}

export default Music

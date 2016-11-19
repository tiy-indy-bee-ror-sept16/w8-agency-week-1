import React from 'react'
import Header from './Header'
import Feature from './Feature'
import Music from './Music'
import Farming from './Farming'
import { Link } from 'react-router'
import HomeItem from './HomeItem'
import MusicHome from './MusicHome'
import FarmingHome from './FarmingHome'
import MovieHome from './MovieHome'
import NationalParksHome from './NationalParksHome'
import Footer from './Footer'
import Item from './Item'
import Modal from 'react-modal'
import ModalComp from './ModalComp'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        Modal.setAppElement('body');
     }
    render() {
        return <div>
        <div className="container-fluid">
            <div className="row borderHeader">
                <Header />
            </div>
            <div className="row header">
                <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <img className="img-responsive containerMargin" src="img/iron-glory-logo-inverted.png" />
                    </div>
                <div className="col-sm-2"></div>
            </div>
            <div className="row">
              <ul className="list-unstyled nav_style">
                <Link to="/music"><li className="nav_style_li col-sm-3">Music</li></Link>
                <Link to="/movies"><li className="nav_style_li col-sm-3">Movies</li></Link>
                <Link to="/farming"><li className="nav_style_li col-sm-3">Farming</li></Link>
                <Link to="/nationalparks"><li className="nav_style_li col-sm-3">National Parks</li></Link>
              </ul>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row homeContainers">
                <Feature />
                {/* <button onClick={this.openModal}>hi</button> */}
            </div>
            <div className="row homeContainers">
                <MusicHome />
            </div>
            <div className="row homeContainers">
                <FarmingHome />
            </div>
            <div className="row homeContainers">
                <MovieHome />
            </div>
            <div className="row homeContainers">
                <NationalParksHome />
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
            <Footer />
            </div>
        </div>

        <Modal/>
        </div>
    }
}

export default Home

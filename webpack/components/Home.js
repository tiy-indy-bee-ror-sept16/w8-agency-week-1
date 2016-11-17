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
            <div className="row header containerMargin">
                <div className="col-sm-12 center-block headerBackgroundLogo">
                </div>
            </div>
        </div>
        <div className="container-fluid containerMargin">
            <div className="row borderBottom">
                <Feature /> <button onClick={this.openModal}>hi</button>
                <Link to='/items'>
                <button type='button' className='btn btn-default'>Show All</button>
                </Link>
            </div>
            <div className="row borderBottom">
                <MusicHome />
            </div>
            <div className="row borderBottom">
                <FarmingHome />
            </div>
            <div className="row borderBottom">
                <MovieHome />
            </div>
            <div className="row borderBottom">
                <NationalParksHome />
            </div>
        </div>
        <div className="container-fluid containerMargin">
            <div className="row">
            <Footer />
            </div>
        </div>

        <Modal/>
        </div>
    }
}

export default Home

import React from 'react'
import { Link } from 'react-router'


class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <div className="col-sm-10">
                <a href="https://facebook.com"><span><i className="social_icon fa fa-facebook fa-2x" aria-hidden="true"></i></span></a>
                <a href="https://twitter.com"><span><i className="social_icon fa fa-twitter fa-2x" aria-hidden="true"></i></span></a>
                <h5 className="headerText"><strong><p><a className="footer_links" href="#">Terms</a></p></strong></h5>
                <h5 className="headerText"><strong><p><a className="footer_links" href="#">Privacy</a></p></strong></h5>
                <h5 className="headerText"><strong><p><a className="footer_links" href="#">Employee Login</a></p></strong></h5>
                <ul className="list-unstyled list-inline">
                    <li><Link className="footer_links headerText" to="/music">Music</Link></li>
                    <li><Link className="footer_links headerText" to="/movies">Movies</Link></li>
                    <li><Link className="footer_links headerText" to="/farming">Farming</Link></li>
                    <li><Link className="footer_links headerText" to="/nationalparks">National Parks</Link></li>
                    <li><Link className="footer_links headerText" to="/items">All</Link></li>
                </ul>
            </div>
            <div className="col-sm-2">
              <Link to='/'><img className="footer_logo" src='/img/iron-glory-logo.png' alt="" /></Link>
            </div>
        </div>
    }
}

export default Footer

import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return <div>
            <div className="col-sm-6">
                <Link to='/'><img className="starLogo" src="/img/iron-glory-logo-star.png" alt="Iron Glory logo" /></Link>
            </div>
            <div className="col-sm-6 search_style">
                <div className="input-group">
                    <input className="form-control" type="text" name="search" placeholder="Search patches..." value="" />
                    <div className="input-group-btn">
                        <button className="btn btn-default search_btn" type="button"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                        <Link to="/checkout"><button type="button" className="btn btn-default search_btn"><span><i className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></i></span></button></Link>
                    </div>
                </div>
            </div>
        </div>
    }
}


export default Header

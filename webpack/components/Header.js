import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return <div>
            <div className="col-sm-5">
                <img className="starLogo" src="/img/iron-glory-logo-star.png" alt="Iron Glory logo" />
            </div>
            <div className="col-sm-5">
                <div className="input-group">
                    <input className="form-control" type="text" name="search" placeholder="Search patches..." value="" />
                <div className="input-group-btn">
                    <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                </div>
                </div>
            </div>
            <div className="col-sm-2 pull-right">
                <button type="button" className="btn btn-default btn-sm center-block"><span><i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i> Cart</span></button>
            </div>
        </div>
    }
}


export default Header

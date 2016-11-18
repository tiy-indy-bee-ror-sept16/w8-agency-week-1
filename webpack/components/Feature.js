import React from 'react'

class Feature extends React.Component {
    constructor(props) {
        super(props)
        this.addToCart = this.addToCart.bind(this)
    }
    addToCart() {
        console.log(this.props.data.year)
    }
    render() {
        return <div>
        <div className="col-sm-4 featuredContainer">
            <h1 className="headerText">Featured Patch</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h4 className="headerText">Superman</h4>
            <h4 className="">$175.00</h4>
            <button type="button" onClick={this.addToCart} className="btn cart_btn btn-block">Add to Cart</button>
            </div>
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
                <img className="img-responsive" src="/img/igp32.png" alt="Featured Patch" />
            </div>
            <div className="col-sm-2">
            </div>
        </div>
    }
}

export default Feature

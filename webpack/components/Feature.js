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
        <div className="col-sm-3">
            <h1 className="textColor">Featured Product</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
            <div className="col-sm-2">
            </div>
            <div className="col-sm-5">
                <img src="/img/igp32.png" alt="" />
                <h4 className="text-center">Title</h4>
                <h4 className="text-center textColor">$Price</h4>
                <button type="button" onClick={this.addToCart} className="btn btn-primary btn-sm center-block">Add to Cart</button>
            </div>
            <div className="col-sm-2">
            </div>
        </div>
    }
}

export default Feature

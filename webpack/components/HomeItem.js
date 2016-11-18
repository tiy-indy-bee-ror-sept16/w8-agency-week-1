import React from 'react'

class HomeItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
      var price = '$' + (this.props.data.price)/100 + '.00'
        return <div>
        <div className="col-sm-3">
          <img src={this.props.data.image} alt='a nice photo here' className='patchPhoto img-responsive' />
                <div className="col-sm-6 item_info">{this.props.data.product}</div>
                <div className="col-sm-6 headerText item_info text-right">{price}</div><br /><br />
            <button type="button" onClick={this.addToCart} className="btn cart_btn btn-block">Add to Cart</button><br/>
        </div>
      </div>
    }
}

export default HomeItem

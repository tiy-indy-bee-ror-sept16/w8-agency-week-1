import React from 'react'

class Item extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
        <div className="col-sm-4 text-center">
    <div className="listing">
        <img src={this.props.data.picture} alt='a nice photo here' className='patchPhoto img-responsive' />
      <div className="row">
        <div className='col-sm-6'>
          <p className='titleText text-left'>{this.props.data.product}</p>
        </div>
        <div className='col-sm-6'>
          <p className='priceText text-right'>{this.props.data.price}</p>
        </div>
      </div>
    </div>
  </div>
        </div>
    }
}

export default Item

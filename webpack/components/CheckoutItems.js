import React from 'react'
import ReactDOM from 'react-dom'

class CheckoutItems extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //   addToCartBtn: 'Add To Cart',
        // }
    }
    render() {
        var price = '$' + (this.props.data.price)/100 + '.00'
        return <div>
          <div className="col-sm-3">
            <img src={this.props.data.image} alt='a nice photo here' className='patchPhoto img-responsive' />
                  <div className="col-sm-6 item_info">{this.props.data.product}</div>
                  <div className="col-sm-6 headerText item_info text-right">{price}</div><br /><br />
              <button type="button" onClick={this.addToCart} className="btn cart_btn btn-block">{this.state.addToCartBtn}</button><br/>
          </div>
        </div>

        {/* modal starts */}
        {/* <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref="subtitle">Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal> */}
    }
}

export default CheckoutItems

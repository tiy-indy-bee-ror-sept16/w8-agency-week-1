import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

// const customStyles = {
// content : {
// top                   : '50%',
// left                  : '50%',
// right                 : 'auto',
// bottom                : 'auto',
// marginRight           : '-50%',
// transform             : 'translate(-50%, -50%)'
// }
// };


class Item extends React.Component {
    constructor(props) {
        super(props)
        // this.openModal = this.openModal.bind(this)
        // this.afterOpenModal = this.afterOpenModal.bind(this)
        // this.closeModal = this.closeModal.bind(this)
        // this.state = {
        //   modalIsOpen: false,
        // }
        this.addToCart = this.addToCart.bind(this)
        this.saveToken = this.saveToken.bind(this)
    }
    // openModal() {
    //     this.setState({modalIsOpen: true});
    //   }
    //
    //   afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     this.refs.subtitle.style.color = '#f00';
    //   }
    //
    //   closeModal() {
    //     this.setState({modalIsOpen: false});
    //   }

    addToCart() {
      var quant = 1
      var formData = new FormData()
      formData.append('item_id', this.props.data.id)
      formData.append('quantity', quant)
      formData.append('token', sessionStorage.getItem('token'))
        // console.log(this.props.data.id)
        fetch('/addtocart', {
        body: formData,
        method: 'POST',
      })

  .then(response => response.json())
  // .then(response => console.log(response))
  .then(this.saveToken)
    }
    saveToken(response){
      console.log(response)
      sessionStorage.setItem('token', JSON.stringify(response.cart.token))
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

export default Item

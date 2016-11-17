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
        console.log(this.props.data.id)
    }

    render() {
        return <div>
        <div className="col-sm-4 text-center">
          <div className="listing">
              <img src={this.props.data.image} alt='a nice photo here' className='patchPhoto img-responsive' />
              <h4 className="text-center">{this.props.data.product}</h4>
              <h4 className="text-center textColor"> {this.props.data.price}</h4>
              <button type="button" onClick={this.addToCart} className="btn btn-primary btn-sm center-block">Add to Cart</button>
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
      </div>
    }
}

export default Item

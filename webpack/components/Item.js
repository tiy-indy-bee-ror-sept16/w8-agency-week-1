import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

const customStyles = {
content : {
top                   : '50%',
left                  : '50%',
right                 : 'auto',
bottom                : 'auto',
marginRight           : '-50%',
transform             : 'translate(-50%, -50%)'
}
};

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          modalIsOpen: false,
        }
    }
    openModal() {
        this.setState({modalIsOpen: true});
      }

      afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.refs.subtitle.style.color = '#f00';
      }

      closeModal() {
        this.setState({modalIsOpen: false});
      }

    render() {
        return <div>
        <div className="col-sm-4 text-center">
          <div className="listing" onClick={this.openModal}>
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

        {/* modal starts */}
        <Modal
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
        </Modal>
      </div>
    }
}

export default Item

import React from 'react'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <div className="col-sm-2">
              <h5><strong>Social Media</strong></h5>
              <div className="footerEtsyLinks">
                <a href="https://facebook.com"><span><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></span></a>
                <a href="https://twitter.com"><span><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></span></a>
              </div>
            </div>
            <div className="col-sm-2">
              <h5><strong>Categories</strong></h5>
              <div className="footerEtsyLinks">
                <p><a href="#">Music</a></p>
                <p><a href="#">Farming</a></p>
                <p><a href="#">Movies</a></p>
                <p><a href="#">National Parks</a></p>
              </div>
            </div>
            <div className="col-sm-2">
              <h5><strong><p><a href="#">Privacy</a></p></strong></h5>
            </div>
            <div className="col-sm-2">
              <h5><strong><p><a href="#">Terms</a></p></strong></h5>
            </div>
            <div className="col-sm-2 pull-right">
              <img src={'/img/iron-glory-logo.png'} alt="" />
            </div>
        </div>
    }
}

export default Footer

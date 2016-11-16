import React from 'react'
import Header from './Header'
import { Link } from 'react-router'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
        <div className="container-fluid">
            <div className="row borderHeader">
                <Header />
            </div>
            <div className="row header containerMargin">
                <div className="col-sm-12 center-block headerBackgroundLogo">
                </div>
            </div>
        </div>
            <Link to='/items'>
            <button type='button' className='btn btn-default'>Click</button>
            </Link>
        </div>
    }
}

export default Home

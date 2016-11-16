import React from 'react'
import Header from './Header'
import { Link } from 'react-router'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <Header />
            <Link to='/items'>
            <button type='button' className='btn btn-default'>Click</button>
            </Link>
        </div>
    }
}

export default Home

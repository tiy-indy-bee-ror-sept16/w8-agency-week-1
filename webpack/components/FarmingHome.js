import React from 'react'
import { Link } from 'react-router'
import HomeItem from './HomeItem'


class FarmingHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          farmingPatches: [
            {
            image: 'https://unsplash.it/600?random',
            product: 'farming stuff',
            price: 'more stuff'
          },
          {
          image: 'https://unsplash.it/600?random',
          product: 'farm',
          price: 'more stuff'
        },
        {
        image: 'https://unsplash.it/600?random',
        product: 'farmer',
        price: 'more stuff'
      },
        ]
        }
    }
    render(){
      var items = this.state.farmingPatches.map((data, i) => {
        return <HomeItem data={data} key={i} />
          })
          return <div>
            <div className="col-sm-3">
              <h1 className="textColor">Farming</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </div>
          {items}
          </div>
    }
  }
  export default FarmingHome
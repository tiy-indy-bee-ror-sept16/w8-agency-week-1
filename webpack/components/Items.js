import React from 'react'
import Item from './Item'

class Items extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          allPatches: [
              {
              picture: 'https://unsplash.it/600?random',
              product: 'This is product name',
              price: '$55.00'
                },
            {
            picture: 'https://unsplash.it/600?random',
            product: 'another product',
            price: '$44.00'
              }

        ]
        }
    }
    // fetchAllPatches(){
    //     fetch(OURAPICALLGOESHERE)
    //     .then(response => response.json())
    //     .then(response => this.setState({allPatches: response}))
    // }
    render() {
        var items = this.state.allPatches.map((data, i) => {
      return <Item data={data} key={i} />
        })
        return <div>
                <div className="container">
                    <div className="row">
                        {items}
                    </div>
                </div>
        </div>
    }
}

export default Items

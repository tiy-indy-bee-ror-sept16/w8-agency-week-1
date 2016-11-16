import React from 'react'
import Item from './Item'

class Items extends React.Component {
    constructor(props) {
        super(props)
        this.fetchAllPatches = this.fetchAllPatches.bind(this)
        this.state = {
          allPatches: []
        }
    }
    fetchAllPatches(){
        fetch('/api/items')
        .then(response => response.json())
        // .then(response => this.setState({allPatches: response}))
        .then(response => console.log(response))
    }
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

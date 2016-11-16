import React from 'react'
import { Link } from 'react-router'


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          musicPatches: []
        }
    }
    render(){
      var items = this.state.allPatches.map((data, i) => {
        return <Item data={data} key={i} />
          })
          return
    }
  }

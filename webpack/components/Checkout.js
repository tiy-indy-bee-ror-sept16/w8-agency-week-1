import React from 'react'
// import { Accordion, Panel } from 'react-bootstrap'


class Checkout extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        var open = 3
        return (
                <Accordion>
                    <Panel header="Personal" eventKey='1' className="">
                      <input type="text"/>
                    </Panel>
                    <Panel header="Shipping" eventKey='2'>
                      More Info here
                    </Panel>
                    <Panel header="Billing" eventKey={open}>
                      Yet another Panel
                    </Panel>
                </Accordion>
        )
    }
}

export default Checkout

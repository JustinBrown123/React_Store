import React, { Component } from 'react'
import Title from "../Title"

export default class EmptyCart extends Component {
    render() {
        return (
            <React.Fragment>
                <Title name="Your Cart is" />
                <Title title="empty" />
           </React.Fragment>

           
           
        )
    }
}

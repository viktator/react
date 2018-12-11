import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'


 class Counter extends Component {
     static PropTypes = {
        counter: PropTypes.number
     }
    
     hanleIncrement = () => {
        console.log('____', 'increment')
     }
    render() {
         return (
                <div>
                  <h2>{this.props.counter}</h2>
                  <button onClick = {this.hanleIncrement}>Incremnt me</button>
                </div>
         )
}
 }

 function mapStateToProp(state) {
         return {
             counter: state.count
         }
}

const decorator = connect(mapStateToProp)

 export default decorator(Counter)
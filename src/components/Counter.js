import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment, less} from '../AC'

 class Counter extends Component {
     static PropTypes = {
        counter: PropTypes.number
     }
    
     handleIncrement = () => {
        console.log('____', 'increment');
         this.props.increment()

     }
     handleLess = () => {
         console.log('____', 'less');
         this.props.less()
     }

    render() {
         return (
                <div>
                  <h2>{this.props.counter}</h2>
                  <button onClick = {this.handleIncrement}>Incremnt me</button>
                  <button onClick = {this.handleLess}>Less me</button>
                </div>
         )
}
 }

//  const mapToDispatch = {increment};

//  function mapStateToProp(state) {
//          return {
//              counter: state.count
//          }
// }
//
// const decorator = connect(mapStateToProp, mapToDispatch);
//
//  export default decorator(Counter)
// const mapStateToProps = (state) => ({
//     counter: state.count
// })



export default connect((state) => ({
    counter: state.count,
}), {increment, less})(Counter)
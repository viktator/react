import React, {Component} from 'react'

export default (OriginalComponent) => class WrapperComp extends Component {
    state = {
        isOpen: false
    }
    toggleOpen = (ev) => {
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
    }
}
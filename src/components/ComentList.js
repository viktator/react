import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorates/toggleOpen.js'

 class CommentList extends Component {
    


getBody() {
   
    
    const {comments, isOpen} = this.props
    if(!isOpen) return null
    if(!comments || !comments.length) return <span>no comments</span>
    return (
        <ul>
            {comments.map((comment) => <li key = {comment.id}><Comment comment = {comment}/></li>)}
        </ul>
    )
}
    render() {
        const btnText = !this.props.isOpen ? 'show comment' : ' hide comment'
        const {toggleOpen} = this.props
        return (
             <div>
                 <button onClick = {toggleOpen}>{btnText}</button>
                 {this.getBody()}
             </div>
        )
    }
}

export default toggleOpen(CommentList)
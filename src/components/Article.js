import React, {Component} from 'react'
import ComentList from './ComentList'
// import toggleOpen from '../decorates/toggleOpen.js'
// import { CSSTransitionGroup } from 'react-transition-group'
import './article.css'
import {connect} from 'react-redux'
import {delete_article} from "../AC";


 class  Article extends Component {
     

    getBody() {
        const {article, isOpen} = this.props
        if(!isOpen) return null
        return <section>{article.text}
            <ComentList comments={article.comments}/>
        </section>
    }

    setContainerRef = ref => {
        this.container = ref
        console.log(ref)
    }
     deleteArticle  = () => {
        const {delete_article, article} = this.props
         delete_article(article.id)
        console.log('delete article')
     }

    render() {
        const {article, isOpen, toggleOpen} = this.props
        
        return (
            <div  ref = {this.setContainerRef}>
                <h1>{article.title}</h1>
                <button onClick = {toggleOpen}>{!isOpen ? 'Open' : 'Close'}</button>
                <button className={"space_right"} onClick = {this.deleteArticle}>Delete article</button>
                {/*<CSSTransitionGroup */}
                    {/*transitionName = "article"*/}
                    {/*transitionEnterTimeout={500}*/}
                    {/*transitionLeaveTimeout={300}*/}
                    {/*>*/}
                    {this.getBody()}
                {/*</CSSTransitionGroup>*/}
               
            </div>
        )
    }
}

export default connect(null, {delete_article})(Article)
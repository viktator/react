import React, {Component} from 'react'
import Article from './Article'


export default class ArticleList extends Component {

    state = {
        openArticleId : null
    }

    toggleOpenArticle = (openArticleId) => () => {
        this.setState({openArticleId: openArticleId === this.state.openArticleId ? null : openArticleId})
    }

    render() {
        const listArray = this.props.articles.map((article) => <li key = {article.id}>

            <Article article = {article}
                     isOpen = {article.id === this.state.openArticleId}
                     toggleOpen = {this.toggleOpenArticle(article.id)}/>
                     </li>)

                        return (
                            <ul>
                            {listArray}
                            </ul>
                            )
                         }
}
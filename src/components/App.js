import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import Counter from './Counter'
import UserForm from './UserForm'



 class App extends Component {
     static PropTypes = {
    
     }
    render() {
         return (
                <div>
                    <Counter />
                   <ArticleList articles = {this.props.articles}/>
                 
                </div>
         )
}
 }

 export default App
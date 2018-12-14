import {articles as defaultArticles} from '../fixtures.js'
import {DELETE_ARTICLE} from '../constants'

export default (articleState = defaultArticles, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE: return articleState.filter(article => article.id !== payload.id )
    }
    return articleState
}
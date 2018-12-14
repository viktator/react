import {DELETE_ARTICLE,INCREMENT, LESS} from '../constants'


export function increment() {
    return {
        type: INCREMENT
    }
}
export function less() {
    return {
        type: LESS
    }
}

export function delete_article(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {id}
    }
}
import {
    GET_NEWS,
    LOAD_NEWS,
} from '../constants'


const initialState = {
    loading: false,
    news: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_NEWS:
            return {
                ...state,
                loading: false,
                news: action.payload
            }
        case LOAD_NEWS:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}
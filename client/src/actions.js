import axios from 'axios'
import {
    GET_NEWS,
    LOAD_NEWS,
} from './constants'

export const getNews = (searchNewsText) => (dispatch) => {
    dispatch({ type: LOAD_NEWS })

    if (searchNewsText) {
        axios.post(`https://uj5wyc0l7x-dsn.algolia.net/1/indexes/Item_production/query?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%203.32.0&x-algolia-application-id=UJ5WYC0L7X&x-algolia-api-key=8ece23f8eb07cd25d40262a1764599b1`, {
            params: `query=${searchNewsText}&hitsPerPage=20&minWordSizefor1Typo=4&minWordSizefor2Typos=8&advancedSyntax=true&ignorePlurals=false&clickAnalytics=true&tagFilters=%5B%22story%22%5D&numericFilters=%5B%5D&page=0&queryType=prefixNone&typoTolerance=true&restrictSearchableAttributes=%5B%5D&minProximity=8&getRankingInfo=true`
        })
        .then(res => dispatch({
            type: GET_NEWS,
            payload: res.data.hits
        }))
        .catch(err => console.log(err))
    } else {
        axios.get(`https://api.hnpwa.com/v0/news/1.json`)
        .then(res => dispatch({
            type: GET_NEWS,
            payload: res.data
        }))
        .catch(err => console.log(err))
    }
}
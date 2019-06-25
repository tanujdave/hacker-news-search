import React from 'react'
import { connect } from 'react-redux'
import { getNews } from '../actions'
import News from './News'

class NewsList extends React.Component {
    componentDidMount() {
        this.props.getNews()
    }
    render () {
        const { news } = this.props

        return (
            <ul>
                {
                    news.length > 0 ? news.map(newsData => <News key={newsData.time} newsData={newsData} />) : <li>No news found!</li>
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    news: state.reducer.news
})

export default connect(mapStateToProps, { getNews })(NewsList)
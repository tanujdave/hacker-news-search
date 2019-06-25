import React from 'react'
import { connect } from 'react-redux'

import { getNews } from '../actions'

class SearchNews extends React.Component {
    constructor (props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (e) {
        if (e.key === 'Enter') {
            this.props.getNews(e.target.value)
        }
    }

    render () {
        return (
            <div>
                <input 
                    placeholder="Search News..."
                    onKeyPress={this.handleSubmit}
                />
            </div>
        )
    }
}


export default connect(null, { getNews })(SearchNews)
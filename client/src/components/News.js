import React from 'react'
import { connect } from 'react-redux'


class News extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        const { newsData } = this.props
        return (
            <li>
                <span><a title={newsData.url} href={newsData.url} target="_blank">{newsData.title}</a></span>            
            </li>
        )
    }
}

export default connect(null, null)(News)
import React, { Component } from 'react'
import { markdown } from '../../api/index'
import './index.less'
export default class article extends Component {
    state = {
        mark: ''
    }
    componentDidMount() {
        this.getMarkdown()
    }
    getMarkdown = async () => {
        const mark = await markdown(this.props.location.state.body)
        this.setState({mark})
    }
    render() {
        const { state } = this.props.location
        return (
            <div className='article'>
                <h1>{state.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: this.state.mark }}></div>
            </div>
        )
    }
}

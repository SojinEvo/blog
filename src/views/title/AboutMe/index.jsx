import React, { Component } from 'react'
import Card from '../../../components/card'
import { getTags } from '../../../api/index'
export default class JavaScript extends Component {
    state = {
        labels: [],
    }
    componentDidMount() {
        this.getNew()
    }

    getNew = async () => {
        const labels = await getTags('About me')
        console.log(labels)
        this.setState({ labels })
    }
    render() {
        return (
            <Card labels={this.state.labels}></Card>
        )
    }
}

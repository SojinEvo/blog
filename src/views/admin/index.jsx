import React, { Component } from 'react'
import './index.less'
import { Issues,dele } from '../../api/index'
import { Link, } from 'react-router-dom'
import { Tag, Button } from 'antd';


export default class Admin extends Component {
    state = {
        all: []
    }
    componentDidMount() {
        this.getAll()
    }
    getAll = async () => {
        const all = await Issues()
        this.setState({ all })
    }
    del = async (name) => {
        const res = await dele(name)
        console.log(res)
    }
    render() {
        return (
            <div className='adminContainer'>
                <Link className='icon' to='/'></Link>
                <Link className='add' to='/add'></Link>
                <div className='center'>
                    {
                        this.state.all.map((item, index) => {
                            return <div className='box' key={index}>
                                <Link className='title'
                                    to={{
                                        pathname: `/edit/${item.title}`,
                                        state: item
                                    }}
                                >{item.title}</Link>
                                <Tag className='tag' color='volcano'>{item.labels[0]  ? (item.labels[0].name!='undefined' ? item.labels[0].name : '') : '' }</Tag>
                                <p dangerouslySetInnerHTML={{ __html: item.body }}></p>
                                <Button className='del' type="dashed" danger onClick={this.del.bind(this,item.title)}>删除</Button>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

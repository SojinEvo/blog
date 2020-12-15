import React, { Component } from 'react'
import { Layout } from 'antd';
import './index.less'
// 导入路由库
import { Link } from 'react-router-dom'

import Loading from '../../components/loading'
const { Content } = Layout;

export default class Home extends Component {
    render() {
        return (
            <Layout className='layout'>
                <Content>
                    <div className='box'>
                        <h1 className="animate__animated animate__bounce"><Link to='/blog' className='link'>Jine_are Blog ~</Link></h1>
                        <Loading />
                    </div>
                </Content>
            </Layout>
        )
    }
}

import React, { Component } from 'react'
import { Layout, Input } from 'antd';
import { Route, Switch,  Redirect, NavLink} from 'react-router-dom'
import { Link } from 'react-router-dom'

import './index.less'

import New from '../title/New'
import AboutMe from '../title/AboutMe'
import Article from '../article'


const { Header, Content } = Layout;
const { Search } = Input;
export default class Blog extends Component {
    state = {
        isStatus: false,
    }

    search = (val) => {
        console.log(val)
        const isStatus = true
        this.setState({ isStatus })
    }

    render() {
        return (
            <Layout className='bg'>
                <Header className='header'>
                    <span className='icon'><Link className='link' to='/'></Link></span>
                    <div className='center'>
                        <ul className='menuList'>
                            <NavLink className='nav' to='/blog/new' activeClassName='active_boder' key='/new'><li>New</li></NavLink>
                            <NavLink className='nav' to='/blog/About_me' activeClassName='active_boder' key='/About_me'><li>About me</li></NavLink>
                        </ul>
                        <Search placeholder="input search" onSearch={this.search} loading={this.state.isStatus} />
                    </div>
                    <a className='admin' href='/admin'></a>
                </Header>
                <Content className='content'>
                    <div className='center'>
                        <Switch>
                            <Redirect from='/blog/' exact to='/blog/new' />
                            <Route path='/blog/new' component={New}></Route>
                            <Route path='/blog/About_me' component={AboutMe} />
                            <Route path='/blog/article/' component={Article}></Route>
                        </Switch>
                    </div>
                </Content>
            </Layout>
        )
    }
}

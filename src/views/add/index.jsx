import React, { Component } from 'react'
import './index.less'
import { AddDate } from '../../api/index'
import E from 'wangeditor'

import { Button } from 'antd'

export default class Add extends Component {
    state = {
        title: ''
    }
    componentDidMount() {
        // 初始化实例编辑器
        const elemMenu = this.editorElemMenu;
        const elemBody = this.editorElemBody;
        const editor = new E(elemMenu, elemBody)
        editor.create()
    }

    Add = async () => {
        const body = this.text.parentNode.innerHTML
        const { title } = this.state
        const res = await AddDate({title,body})
        console.log(res)
        this.props.history.replace('/admin')
    }
    change = (event) => {
        const title = event.target.value
        this.setState({ title })
    }
    render() {
        return (
            <div className='edit'>
                <div className='header'>
                    <input onChange={this.change} type="text" placeholder={this.state.title} />
                </div>
                <div
                    ref={arg => this.editorElemMenu = arg}
                    style={{
                        backgroundColor: "#f1f1f1",
                        border: "1px solid #ccc",
                    }}
                ></div>
                <div className='content'>
                    {/* 富文本编辑器 */}

                    <div
                        style={{
                            border: "1px solid #ccc",
                            borderTop: "none",
                            zIndex: 20,
                        }}
                        ref={arg => this.editorElemBody = arg}
                    >
                        <div ref={arg => this.text = arg}></div>
                    </div>
                </div>
                <div className='update'>
                    <Button onClick={this.Add}>Add data</Button>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import './index.less'
import { markdown, UpdateData } from '../../api/index'
import E from 'wangeditor'

import { Button } from 'antd'
import NewTag from '../../components/tag'

export default class Editor extends Component {
    constructor(props){
        super(props)
        const labelName = props.location.state.labels[0]?props.location.state.labels[0].name : ''
        this.state = {
            mark: '',
            title: '',
            number: '',
            labelName,
            labels:[]
        }
    }
    
    componentDidMount() {
        this.getMarkdown()
    }
    getMarkdown = async () => {
        // 初始化实例编辑器
        const elemMenu = this.editorElemMenu;
        const elemBody = this.editorElemBody;
        const editor = new E(elemMenu, elemBody)
        editor.create()  
        const data = this.props.location.state
        const { number, title } = data
        const mark = await markdown(data.body)
        this.setState({ mark, title, number })
    }
    Update = async () => {
        const body = this.text.parentNode.innerHTML
        const {title,number,labels} = this.state
        const res = await UpdateData({number,title,body,labels})
        this.props.history.replace('/admin')
    }
    change = (event) => {
        const title = event.target.value
        this.setState({ title })
    }
    funny = (val) => {
        console.log('val',val)
        const labels = [{name:`${val[0]}`}]
        this.setState({labels})
    }
    render() {
        return (
            <div className='edit'>
                <div className='header'>
                    <input onChange={this.change} type="text" placeholder={this.state.title} />
                    <NewTag fun={this.funny.bind(this)} labelName={[this.state.labelName]}></NewTag>
                </div>
                <div
                    ref={arg => this.editorElemMenu = arg}
                    style={{
                        backgroundColor: "#f1f1f1",
                        border: "1px solid #ccc",
                    }}
                ></div>
                <div className='content' >
                    {/* 富文本编辑器 */}

                    <div
                        style={{
                            border: "1px solid #ccc",
                            borderTop: "none",
                            zIndex: 20,
                        }}
                        ref={arg => this.editorElemBody = arg}
                    >
                        <div ref={arg => this.text = arg} dangerouslySetInnerHTML={{ __html: this.state.mark }}></div>
                    </div>
                </div>
                <div className='update'>
                    <Button onClick={this.Update}>Update data</Button>
                </div>
            </div>
        )
    }
}

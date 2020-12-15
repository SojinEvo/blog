import React, { Component } from 'react'
import './index.less'
import { Link } from 'react-router-dom'

export default class Card extends Component {
    render() {
        return (
            <div className='container'>
                {
                    this.props.labels.map((tag, index) => {
                        return <div className='tag' key={index}>
                            <p>
                                <Link to=
                                    {{
                                        pathname: `/blog/article/${tag.title}`,
                                        state: tag
                                    }}>{tag.title}</Link>
                            </p>
                            <p className='txt' dangerouslySetInnerHTML={{ __html: tag.body }}></p>
                            <p>{tag.updated_at}</p></div>
                    })
                }
            </div>
        )
    }
}

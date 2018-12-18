import React, { Component } from 'react';
import './Articles.css'
import { withContext } from '../../ContextAPI/Context_HOC'
import articlesList from './Articles_List'
import MarkdownRenderer from '../Tools/MarkdownRenderer'

class Articles extends Component {
    state = {
        selectedArticle: -1
    }

    clicky = (id) => {
        this.setState({ selectedArticle: id })
    }

    render() {
        // console.log('------------ articlesList', articlesList)
        return (
            <div className={`articles-container ${this.props.context.fadeEffect}`}>
                <div className="articles-head">
                    <div className="title-text">
                        ARTICLES
                    </div>
                    <div className="subtitle-text">
                        Knowledge is a Ceaseless Quest
                    </div>
                </div>
                <div className="articles-list">
                    {articlesList.map(article => {
                        return (
                            <div className={`article ${this.state.selectedArticle === article.id && 'selected'}`} key={article.id} onClick={() => this.clicky(article.id)}>
                                <div className="article-head">
                                    <div className='picture-frame'>
                                        <img src={article.picture} alt=""/>
                                    </div>
                                    <div className='title-container'>
                                        <span>{article.title}</span>
                                    </div>
                                </div>
                                <div className={`article-body ${this.state.selectedArticle === article.id && 'show'}`}>
                                    <div className={`horizontal-line ${this.state.selectedArticle === article.id && 'animate-line'}`}></div>
                                    <div className="article-text">
                                        <div>{article.subtitle}</div>
                                        <br/>
                                        {article.link ? 
                                            <a href={article.body} target='_blank' rel="noopener noreferrer"><div className='body-text centered'>{article.body}</div></a>
                                        :
                                            <div className="body-text">
                                                <MarkdownRenderer text={article.body}/>
                                            </div>
                                        }
                                        
                                    </div>
                                </div>   
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default withContext(Articles)
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'


export default class FullheightIframe extends Component {

    constructor() {
        super();
        this.state = {
            iFrameHeight: '0px'
        }
    }

    render() {
        return (
            <iframe 
                style={{maxWidth:640, width:'100%', height:this.state.iFrameHeight, overflow:'visible'}}
                onLoad={() => {
                    const obj = ReactDOM.findDOMNode(this);
                    this.setState({
                        "iFrameHeight":  obj.contentWindow.document.body.scrollHeight + 'px'
                    });
                }} 
                ref="iframe" 
                src="https://vishal8266.github.io/clust.github.io/" 
                width="100%" 
                height={this.state.iFrameHeight} 
                scrolling="no" 
                frameBorder="0"
            />
        );
    }
}
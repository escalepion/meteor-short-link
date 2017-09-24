import React, { Component } from 'react';
import Clipboard from 'clipboard';

export default class LinksListItem extends Component {
    componentDidMount() {
        this.clipboard = new Clipboard(this.refs.copy);
        
        this.clipboard.on('success', () => {
            alert('It worked');
        }).on('error', () => {
            alert('unable to copy.');
        });

    }
    componentWillUnmount() {
        this.clipboard.destroy();
    }
    render() {
        return (
            <div>
                <p>{this.props.url}</p>
                <p>{this.props.shortUrl}</p>
                <button ref="copy" data-clipboard-text={this.props.shortUrl}>Copy</button>
            </div>
        );
    }
}

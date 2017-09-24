import React, { Component } from 'react';

export default class LinksListItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.url}</p>
                <p>{this.props.shortUrl}</p>
            </div>
        );
    }
}

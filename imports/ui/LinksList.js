import React, { Component } from 'react';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import { Links } from '../api/links';
import LinksListItem from './LinksListItem';

export default class LinksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: []
        };
    }
    componentDidMount () {
        this.linksTracker = Tracker.autorun(() => {
            const links = Links.find({
                visible: Session.get('showVisible')
            }).fetch();
            this.setState({ links });
            Meteor.subscribe('linksPub');
        });
    }
    componentWillUnmount() {
        this.linksTracker.stop();
    }
    renderLinksListItems() {
        if (this.state.links.length === 0) {
           return (
               <div className="item">
                <p className="item__status-message">No links found</p>
               </div>
           ); 
        }

        return this.state.links.map((link) => {
            const shortUrl = Meteor.absoluteUrl(link._id);
            return <LinksListItem key={link._id} shortUrl={shortUrl} {...link} />
            // return <p key={link._id}>{link.url}</p>;
        });
    }
    render () {
        return (
            <div>
                <div>
                    {this.renderLinksListItems()}
                </div>
            </div>
        );
    }
}
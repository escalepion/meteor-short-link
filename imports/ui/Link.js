import React, { Component } from 'react';

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';

class Link extends Component {
    render() {
        return (
            <div>
                <PrivateHeader />
                <LinksList />
                <AddLink />
            </div>
        );
    }
}

export default Link;

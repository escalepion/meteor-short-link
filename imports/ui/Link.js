import React from 'react';

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';

export default () => {
    return (
        <div>
            <PrivateHeader title='Short Link' />
            <LinksList />
            <AddLink />
        </div>
    );
};

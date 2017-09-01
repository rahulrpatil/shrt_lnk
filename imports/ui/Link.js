import React from 'react';
import LinkList from './LinksList';
import LinksListFilters from './LinksListFilters';
import PrivateHeader from './PrivateHeader'
import AddLink from './AddLink'

export default () => {
    return (
        <div>
            <PrivateHeader title={"Your Links"}/>
            <LinksListFilters/>
            <LinkList/>
            <AddLink />
        </div>
    )
}
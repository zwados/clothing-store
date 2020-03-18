import React, { Component } from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            collections: SHOP_DATA,
         }
    }
    render() { 
        const {collections} = this.state;
        return ( <div>
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div> );
    }
}
 
export default ShopPage;
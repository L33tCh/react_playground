import React from 'react';
import { Product } from '../../types/Product';

import './card.styles.css';

interface IProps {
    product: Product
};

export const Card: React.FC<IProps> = props => {
    console.log({component: "Card", props});
    return (
        <div className='card-container'>
            <img alt='face' src={`https://robohash.org/${props.product.id}?set=set2&size=180x180`} />
            <h2>{props.product.name}</h2>
            <p>{props.product.description}</p>
        </div>
    );
};

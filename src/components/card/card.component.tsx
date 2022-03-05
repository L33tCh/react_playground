import React from 'react';
import { Product } from '../../types/Product';

import './card.styles.css';

interface IProps {
    product: Product
};

export const Card: React.FC<IProps> = ({product}) =>
    <div className='card-container'>
        <img alt='face' src={`https://robohash.org/${product.id}?set=set2&size=180x180`} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
    </div>;

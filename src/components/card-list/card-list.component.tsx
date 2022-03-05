import React from 'react';
import { Product } from '../../types/Product';
import { Card } from '../card/card.component';

import './card-list.styles.css';

interface IProps {
    products: Product[]
};

export const CardList: React.FC<IProps> = ({products}) =>
  <div className='card-list'>
    { products.map(product => <Card key={product.id} product={product}></Card>) }
  </div>;

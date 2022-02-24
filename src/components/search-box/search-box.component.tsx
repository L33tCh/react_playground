import React, { Dispatch, SetStateAction } from 'react';

import './search-box.styles.css';

interface IProps {
    placeHolder: string;
    handleChange: Dispatch<SetStateAction<string>>;
};

export const SearchBox: React.FC<IProps> = props => (
    <input
        className='search-box'
        type='search'
        placeholder={props.placeHolder}
        onChange={e => props.handleChange(e.target.value)}
    />
);

import React, { Dispatch, SetStateAction } from 'react';

import './search-box.styles.css';

interface IProps {
    placeHolder: string;
    handleChange: Dispatch<SetStateAction<string>>;
};

export const SearchBox: React.FC<IProps> = ({placeHolder, handleChange}) =>
    <input
        className='search-box'
        type='search'
        placeholder={placeHolder}
        onChange={e => handleChange(e.target.value)}/>

import React, { Dispatch, SetStateAction } from 'react';

import './search-box.styles.css';

interface IProps {
    classesName: string;
    placeHolder: string;
    handleChange: Dispatch<SetStateAction<string>>;
};

export const SearchBox: React.FC<IProps> = ({classesName, placeHolder, handleChange}) =>
    <input
        className={`search-box ${classesName}`}
        type='search'
        placeholder={placeHolder}
        onChange={e => handleChange(e.target.value)}/>

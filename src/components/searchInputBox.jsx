import React, { useState } from 'react';
import { debounce } from '../helpers/utils';

const SearchInputBox = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const sendData = debounce((value) => {
    // All the taxing stuff you do
    if (value.trim().length > 2) {
      props.searchValues(value);
    }
  }, 200);
  const searchTextChange = (e) => {
    setSearchValue(e.target.value);
    sendData(e.target.value);
  } 
  return (
    <div className="input-with-icon">
      <input type="text" value={searchValue} onChange={searchTextChange} />
      <i className="icono-search custom-rotate" aria-hidden="true"></i>
    </div>
  )
}

export default SearchInputBox

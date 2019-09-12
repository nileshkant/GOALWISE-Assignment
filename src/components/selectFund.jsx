import React, { useState } from 'react';
import SearchSide from './searchSide';
import '../css/scss/custom.css';

const SelectFund = () => {
  const [searchData, setSearchData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // tried various ways to fetch data but getting CORS error.
  // Used google chrome extention to fetch api and made a dummy json and called through *json-server *
  // json is in db.json file
  const searchValues = async(searchData) => {
    try {
      setIsLoading(true);
      let response = await fetch(`http://localhost:4000/search?q=${searchData}`);
      let data = await response.json();
      setIsLoading(false);
      setSearchData(data)
    } catch(e) {
      console.log('error', e);
    }
  }

  // added cart data
  const addToCart = (data) => {
    setCartItems(data);
    setIsLoading(false);
  }

 return (
  <div className="container">
    <div className="row">
      <div className="col text-center">
        <h1>
          Select funds To  invest in
        </h1>
      </div>
    </div>
     <div className="row">
       <div className="col-2">
         <div className="search-heading">
            Search
          </div>
        </div>
     </div>
    <div className="row">
       <SearchSide searchValues={searchValues} searchData={searchData} isLoading={isLoading} addToCart={addToCart} />
       <SearchSide searchData={cartItems} isCartSide addToCart={addToCart}/>
    </div>
  </div>
 );
}

export default SelectFund;
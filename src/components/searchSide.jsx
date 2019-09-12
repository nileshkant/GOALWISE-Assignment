import React, { useState } from 'react';
import SearchInputBox from './searchInputBox';
import AmountInput from './amountInput';

const SearchSide = ({ searchValues, searchData, addToCart, isCartSide = false, isLoading }) => {
  const [cart, setCart] = useState([]);

  //  making array to add cart
  //  *checking duplicate entry should not be there.
  const addCart = (data) => {
    if (cart.indexOf(data) !== -1) return;
    const addDataToArray = [...cart, data];
    setCart(addDataToArray);
    addToCart(addDataToArray);
  }
  
  const listOfStock = () => {
    return (
      <>
        {isLoading && (
          <div>
            Loading...
          </div>)}
        {searchData && searchData.map((stock, index) => {
          const splitArray = stock.fundname.split('-');
          return (
            <div key={index} className="row p-10">
              <div className="col">
                <div className="row box-container mx-0">
                  <div className="col-9">
                    <div className="row pt-10">
                      <div className="col-12">
                        {splitArray[0]} {splitArray[1]}
                      </div>
                      {splitArray[2] && <div className="col-12">
                        {splitArray[2]}
                      </div>}
                    </div>
                    <div className="row pt-10">
                      <div className="col invest-color">
                        Equity
                      </div>
                    </div>
                    <div className="row pt-10 pb-10">
                      <div className="col">
                        Min SIP Amount: 
                        <span className="mr-10 font-medium">₹{stock.minsipamount}</span>
                        <span>SIP Multiple: </span>
                        <span className="mr-10 font-medium">₹{stock.minsipmultiple}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 centered-item">
                    {!isCartSide && <button type="button" className="btn-primary" onClick={() => addCart(stock)}>
                      Add
                    </button>}
                    {isCartSide && (
                      <AmountInput minsipmultiple={stock.minsipmultiple} minsipamount={stock.minsipamount} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        )}
      </>
    );
  }
  return (
    <div className="col">
      <div className="box-container side-box-height">
        {!isCartSide && (
        <div className="col pt-10">
          <SearchInputBox searchValues={searchValues} />
        </div>)}
        <div className="col">
          {listOfStock()}
        </div>
      </div>
    </div>
  )
}

export default SearchSide;

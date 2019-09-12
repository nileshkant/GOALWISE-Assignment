import React, { useState } from 'react';

const AmountInput = ({ minsipamount, minsipmultiple}) => {
  const [investAmount, setInvestAmount] = useState(minsipamount);
  const [errorMsg, setErrorMsg] = useState('')

  const investment = (e) => {
    setInvestAmount(e.target.value);

    // input validation and error messages
    if (e.target.value < minsipamount) {
      setErrorMsg(`Minimum amount ₹ ${minsipamount} required`);
    } else if (e.target.value > minsipamount && !(e.target.value % minsipmultiple === 0)) {
      setErrorMsg(`Amount should be multiple of ₹ ${minsipmultiple}`);
    } else {
      setErrorMsg('');
    }
  }

  return (
    <div>
      <input type='number' value={investAmount} onChange={investment} placeholder="Amount" />
      <div className="fs-10 color-error">
        {errorMsg}
      </div>
    </div>
  )
}

export default AmountInput

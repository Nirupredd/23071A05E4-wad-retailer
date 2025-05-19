import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const navigate = useNavigate();
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    address: ''
  });

  const handleChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment logic here
    console.log('Payment processed:', paymentInfo);
    // Navigate to invoice page after successful payment
    navigate('/invoice');
  };

  return (
    <div className="payment-page">
      <h2>Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name on Card</label>
          <input type="text" name="cardName" value={paymentInfo.cardName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Card Number</label>
          <input type="text" name="cardNumber" value={paymentInfo.cardNumber} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Expiry Date</label>
            <input type="text" name="expiry" placeholder="MM/YY" value={paymentInfo.expiry} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input type="text" name="cvv" value={paymentInfo.cvv} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-group">
          <label>Billing Address</label>
          <textarea name="address" value={paymentInfo.address} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn">Complete Payment</button>
      </form>
    </div>
  );
}

export default Payment;
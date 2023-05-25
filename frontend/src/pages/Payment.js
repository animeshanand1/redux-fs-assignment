import React, { useState } from 'react';

const Payment = () => {
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send payment details to the server
    try {
      const response = await fetch('http://localhost:5000/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          cardNumber,
          expiryMonth,
          expiryYear,
          cvv,
        }),
      });

      const result = await response.json();

      // Handle success response
      console.log(result);
    } catch (error) {
      // Handle error response
      console.error('Payment processing failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Expiry Month"
        value={expiryMonth}
        onChange={(e) => setExpiryMonth(e.target.value)}
      />
      <input
        type="text"
        placeholder="Expiry Year"
        value={expiryYear}
        onChange={(e) => setExpiryYear(e.target.value)}
      />
      <input
        type="text"
        placeholder="CVV"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
      />
      <button type="submit">Submit Payment</button>
    </form>
  );
};

export default Payment;



const Card = ({ cardNumber, cardHolder, expire, cvc, vendor }) => {
  return (
    
      <div className="card">
        <p>{cardNumber}</p>
        <p>{cardHolder}</p>
        <p>{expire}</p>
        <p>{cvc}</p>
        <p>{vendor}</p>
      </div>

  );
};

export { Card };

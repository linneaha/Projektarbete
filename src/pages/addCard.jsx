import { useDispatch, useSelector } from "react-redux";
import { addCards } from "../redux/walletSlice";
import { Link,useHistory } from "react-router-dom";
import { useState } from "react";

const AddCard = () => {
  let dispatch = useDispatch();
  const history = useHistory();
  
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardExpire, setCardExpire] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [cardVendor, setCardVendor] = useState("");

  const addCard = () => {
    let newCard = {
      vendor: cardVendor,
      cardNumber: cardNumber,
      cardHolder: cardHolder,
      expire: cardExpire,
      cvc: cardCvc,
    };
    dispatch(addCards(newCard));
    history.push("/")
  };

  return (
    <div>
      <h1>Add a new card</h1>
      <p>New card</p>
      <div id="placeholderCard">
        <p>{cardNumber}</p>
        <p>{cardHolder}</p>
        <span>{cardExpire}</span>
        <p>{cardCvc}</p>
        <p>{cardVendor}</p>
      </div>
      <div>
        {/* Number */}
        <div>
          <label htmlFor="cardNumberInput">Card number</label>
          <input
            type="tel"
            id="cardNumberInput"
            maxLength={16}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        {/* Holder */}
        <div>
          <label htmlFor="cardHolderInput">Cardholder name</label>
          <input
            type="text"
            id="cardHolderInput"
            onChange={(e) => setCardHolder(e.target.value)}
          />
        </div>
        <div>
          {/* Expire */}
          <label htmlFor="expireInput">Valid thru</label>
          <input
            type="text"
            id="expireInput"
            placeholder="MM/YY"
            onChange={(e) => setCardExpire(e.target.value)}
          />
        </div>
        {/* CCV */}
        <div>
          <label htmlFor="cvcInput">CVV/CVC</label>
          <input
            type="number"
            id="cvcInput"
            onChange={(e) => setCardCvc(e.target.value)}
          />
        </div>
        {/* Vendor */}
        <div>
          <label htmlFor="vendorSelect">Vendor</label>
          <select
            id="vendorSelect"
            onChange={(e) => setCardVendor(e.target.value)}
          >
            <option value="amex">Amex</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
            <option value="klarna">Klarna</option>
          </select>
        </div>
        {/* Submit */}
        <div>
          {/* <Link to="/"> */}
            <button onClick={addCard}>Add card</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export { AddCard };

// .value eller states? Eller globala states med redux?

// let cardNumber = document.querySelector("#cardNumberInput").value;
// let cardHolder = document.querySelector("#cardHolderInput").value;
// let expire = document.querySelector("#expireInput").value;
// let cvc = document.querySelector("#cvcInput").value;
// let vendor = document.querySelector("#vendorSelect").value;
//  <Link to="/">
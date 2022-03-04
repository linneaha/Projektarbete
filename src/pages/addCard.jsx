import "../App.css";
import { useDispatch } from "react-redux";
import { addCards } from "../redux/walletSlice";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Card from "../components/MyCards";

const AddCard = () => {
  let dispatch = useDispatch();
  const history = useHistory();

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const [bank, setBank] = useState("");

  const addCard = () => {
    if (number.toString().length !== 19) {
      document.querySelector("#cardNumberInput").style.border = "2px solid red";
    } else {
      let newCard = {
        number: number,
        name: name,
        expiry: expiry,
        cvc: cvc,
      };
      dispatch(addCards(newCard));
      history.push("/");
    }
  };

  const validateNumber = (e) => {
    let regexNumber =
      e.target.value
        .replace(/\D+/g, "")
        .replace(/\D/g, "")
        .match(/.{1,4}/g) || [];
    setNumber(regexNumber.join(" ").slice(0, 19));
  };

  const flipCard = () => {
    const card = document.querySelector(".card");
    if (card.classList.contains("is-flipped")) {
      card.classList.remove("is-flipped");
    }
  };

  return (
    <div className="App">
      {/* <h1>Adding new card</h1> */}
      <p id="active">new card</p>
      <Card
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
        bank={bank}
      />

      <form>
        <div id="inputWrapper">
          <label htmlFor="cardNumberInput">Card Number</label>
          <input
            type="text"
            name="number"
            id="cardNumberInput"
            value={number}
            onChange={validateNumber}
            onFocus={flipCard}
          />

          <label htmlFor="cardHolderInput">Card holder</label>
          <input
            type="text"
            name="name"
            id="cardHolderInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={flipCard}
          />

          <label htmlFor="expiryInput">Valid thru</label>
          <input
            type="number"
            name="expiry"
            id="expiryInput"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={flipCard}
          />
          <label htmlFor="cvcInput">CVC</label>
          <input
            type="tel"
            name="cvc"
            id="cvcInput"
            value={cvc}
            onChange={(e) => setCvc(e.target.value.slice(0, 3))}
            onFocus={() => {
              const card = document.querySelector(".card");
              card.classList.toggle("is-flipped");
            }}
          />
          <label htmlFor="selectBank">Vendor</label>
          <select
            required
            onChange={(e) => {
              const selectedBank = e.target.value;
              setBank(selectedBank);
            }}
            defaultValue={"Vendor"}
            id="selectBank"
            onFocus={flipCard}
          >
            <option value="Vendor" disabled hidden>
              Vendor
            </option>
            <option value="handelsbanken">Handelsbanken</option>
            <option value="sparbanken">Sparbanken</option>
            <option value="seb">SEB</option>
          </select>
        </div>
        <button type="button" onClick={addCard}>
          Add card
        </button>
      </form>
    </div>
  );
};

export { AddCard };

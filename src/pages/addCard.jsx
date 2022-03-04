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
    if (number.toString().length != 16) {
      document.querySelector("#cardNumberInput").style.border = "2px solid red";
    } else {
      let newCard = {
        number: number,
        name: name,
        expiry: expiry,
        cvc: cvc,
        bank: bank,
      };
      dispatch(addCards(newCard));
      history.push("/");
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
          <input
            type="number"
            name="number"
            id="cardNumberInput"
            placeholder="Card Number"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />

          <select
            required
            onChange={(e) => {
              if (e.target.value === "swedbank") {
                document.querySelector(".card__logo").src =
                  "https://vandergragt.eu/images/swedbank.png";
              } else if (e.target.value === "icabank") {
                document.querySelector(".card__logo").src =
                  "https://vandergragt.eu/images/ICA.png";
              } else if (e.target.value === "nordea") {
                document.querySelector(".card__logo").src =
                  "https://vandergragt.eu/images/nordea.png";
              } else if (e.target.value === "handelsbanken") {
                document.querySelector(".card__logo").src =
                  "https://vandergragt.eu/images/handelsbbanken.png";
              }
              setBank(e.target.value);
            }}
            defaultValue={"Vendor"}
          >
            <option value="Vendor" disabled hidden>
              Vendor
            </option>
            <option value="handelsbanken">Handelsbanken</option>
            <option value="swedbank">swedbank</option>
            <option value="icabank">icabank</option>
            <option value="nordea">nordea</option>
          </select>
        </div>
        <button id="addNewCardBtn" type="button" onClick={addCard}>
          Add card
        </button>
        {bank}
      </form>
    </div>
  );
};

export { AddCard };

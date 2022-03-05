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
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
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
        expiryMonth: expiryMonth,
        expiryYear: expiryYear,
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
        expiryMonth={expiryMonth}
        expiryYear={expiryYear}
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
          
          <div className="validThru">
          <label htmlFor="month">month</label>
          <input
            autoComplete="off"
            className="exp"
            id="month"
            maxLength="2"
            pattern="[0-9]*"
            inputMode="numerical"
            placeholder="MM"
            type="text"
            data-pattern-validate
            onChange={(e) => {
              const selectedMonth = e.target.value;
              setExpiryMonth(selectedMonth);
            }}
          />
          </div>
          <div className="validThru">
          <label htmlFor="year">year</label>
          <input
            autoComplete="off"
            className="exp"
            id="year"
            maxLength="2"
            pattern="[0-9]*"
            inputMode="numerical"
            placeholder="YY"
            type="text"
            data-pattern-validate
            onChange={(e) => {
              const selectedYear = e.target.value;
              setExpiryYear(selectedYear);
            }}
          />
          </div>
          <label htmlFor="cvcInput">CVC</label>
          <input
            type="number"
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
            id="selectBank"
            onFocus={flipCard}
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
        <button type="button" onClick={addCard}>
          Add card
        </button>
      </form>
    </div>
  );
};

export { AddCard };

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
    if (number.toString().length != 16) {
      document.querySelector("#cardNumberInput").style.border = "2px solid red";
    } else {
      let newCard = {
        number: number,
        name: name,
        expiryMonth: expiryMonth,
        expiryYear: expiryYear,
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
        expiryMonth={expiryMonth}
        expiryYear={expiryYear}
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
              const selectedBank = e.target.value;
              setBank(selectedBank);
            }}
            defaultValue={"Vendor"}
          >
            <option value="Vendor" disabled hidden>
              Vendor
            </option>
            <option value="handelsbanken">Handelsbanken</option>
            <option value="sparbanken">Sparbanken</option>
            <option value="seb">SEB</option>
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

import "../App.css";
import { useDispatch } from "react-redux";
import { addCards } from "../redux/walletSlice";
import { useHistory } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Card from "../components/MyCards";
// import "react-credit-cards/es/styles-compiled.css";

const AddCard = () => {
  let dispatch = useDispatch();
  const history = useHistory();

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  const addCard = () => {
    let newCard = {
      number: number,
      name: name,
      expiry: expiry,
      cvc: cvc,
    };
    dispatch(addCards(newCard));
    history.push("/");
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  const ref = useRef(null);
  return (
    <div className="App">
      <Card
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      /> 

      {/* kortet renderas med hjälp av useEffect*/}

      <form>
        <input
          type="number"
          name="number"
          placeholder="Card Number"
          maxLength={16}
          value={number}
          onChange={(e) => {setNumber(e.target.value)} }
          onFocus={(e) => setFocus(e.target.name)}
          ref={ref}
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
          type="number"
          name="expiry"
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="number"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <button type="button" onClick={addCard}>
          Add card
        </button>
      </form>
    </div>
  );
};

export { AddCard };

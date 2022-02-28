import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const MyCards = ({ number, name, expiry, cvc }) => {
  return (
    <div className="App">
      <Cards number={number} name={name} expiry={expiry} cvc={cvc} />
    </div>
  );
};

export { MyCards };

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from "../components/Card";

const Home = () => {
  const { cards } = useSelector((state) => state.wallet);

  return (
    <div>
      <h1>E-Wallet</h1>
      <p>Active card</p>
      {cards.map((card, i) => {
        return <Card {...card} key={i} />;
      })}
      <Link
        to="/addcard"
        onClick={(e) => {
          if (cards.length >= 4) {
            document.querySelector("#error").innerHTML = "You have to many cards!"
            e.preventDefault();
          }
        }}
      >
      <p id="error"></p>
        <button>Add a new card</button>
      </Link>
    </div>
  );
};

export { Home };
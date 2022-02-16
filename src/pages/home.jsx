import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>E-Wallet</h1>
      <p>Active card</p>
      <Link to="/addcard">
        <button>Add a new card</button>
      </Link>
    </div>
  );
};

export { Home };

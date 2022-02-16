import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>home</p>
      <Link to="/addcard">
        <button>Add a new card</button>
      </Link>
    </div>
  );
};

export { Home };

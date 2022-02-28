import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MyCards } from "../components/MyCards";
import { handleCards, removeCard } from "../redux/walletSlice";

const Home = () => {
  let dispatch = useDispatch();
  const { activeCards } = useSelector((state) => state.wallet);
  const { inactiveCards } = useSelector((state) => state.wallet);

  var timer;
  return (
    <div>
      <h1>E-Wallet</h1>
      <p>Active card</p>
      <div id="container">
        <div>
          {activeCards.map((card, i) => {
            return <MyCards {...card} key={i} />;
          })}
        </div>
        {inactiveCards.map((card, i) => (
          <div
            key={i}
            onClick={(e) => {
              clearTimeout(timer);

              if (e.detail === 1) {
                timer = setTimeout(() => {
                  dispatch(handleCards(card));
                }, 200);
              } else if (e.detail === 2) {
                dispatch(removeCard(card));
              }
            }}
          >
            <MyCards {...card} />
          </div>
        ))}
      </div>

      <Link
        to="/addcard"
        onClick={(e) => {
          if (inactiveCards.length >= 3) {
            document.querySelector("#error").innerHTML =
              "You have to many cards!";
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

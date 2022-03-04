import { useEffect } from "react";
import "./MyCards.css";

const Card = ({ name, expiry, cvc, bank }) => {
  useEffect(() => {
    const card = document.querySelector(".card");
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });
  }, []);
  return (
    <main className="main-container">
      <div className="scene">
        {/* Card */}
        <div className={`card ${bank}`}>
          {/* card front */}
          <div className="card__front">
            <img
              className="card__logo"
              src="https://vandergragt.eu/images/nordea.png"
              alt=""
            />
            <img
              src="https://img.icons8.com/plasticine/100/000000/sim-card-chip.png"
              className="chip"
              alt=""
            />
            <img
              src="https://vandergragt.eu/images/mastercard.png"
              className="master-card"
              alt=""
            />
            <img
              src="https://vandergragt.eu/images/NFC.png"
              className="NFC"
              alt=""
            />
            <div className="card__number number">
              <div className="number-group number-group--0">4011</div>
              <div className="number-group number-group--1">2016</div>
              <div className="number-group number-group--2">7239</div>
              <div className="number-group number-group--3">1586</div>
            </div>
            <div className="card__details">
              <div className="card__holder">
                <span className="card__holder__title">Card Holder</span>
                <span className="card__holder__name">{name}</span>
              </div>

              <div className="card__expiration">
                <span className="card__expiration__title">valid thru</span>
                <span className="card__expiration__date">{expiry}</span>
              </div>
            </div>
          </div>

          {/* Card Back */}
          <div className="card__back">
            <div className="card__stripe"></div>
            <div className="card__signature">
              <span className="card_cvv">CVV</span>
              <span className="card__cvv-number">{cvc}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Card;

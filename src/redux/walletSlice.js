import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    activeCards: [
      {
        vendor: "Amex",
        cardNumber:
          (Math.random() + " ").substring(2, 10) +
          (Math.random() + " ").substring(2, 10),
        cardHolder: "Jane Doe".toUpperCase(),
        expire: "12/03",
        cvc: Math.floor(Math.random() * (999 - 100 + 1) + 100),
      },
    ],
    inactiveCards: [],
  },
  reducers: {
    addCards: (state, action) => {
      state.inactiveCards = [...state.inactiveCards, action.payload];
    },
    handleCards: (state, action) => {
      state.inactiveCards.splice(
        state.inactiveCards.indexOf(action.payload),
        0,
        state.activeCards[0]
      );

      // Nedan kod funkar likadant som ovan och får samma bugg
      // state.inactiveCards = [
      //   ...state.inactiveCards.slice(
      //     0,
      //     state.inactiveCards.indexOf(action.payload)
      //   ),
      //   state.activeCards[0],
      //   ...state.inactiveCards.slice(
      //     state.inactiveCards.indexOf(action.payload)
      //   ),
      // ];

      state.activeCards = [action.payload];

      state.inactiveCards = state.inactiveCards.filter(
        (card) => card.cardNumber !== action.payload.cardNumber
      );
      console.log(state.inactiveCards);
    },
    removeCard: (state, action) => {
      state.inactiveCards = state.inactiveCards.filter(
        (card) => card.cardNumber !== action.payload.cardNumber
      );
    },
  },
});
export default walletSlice.reducer;
export const { addCards, handleCards, removeCard } = walletSlice.actions;

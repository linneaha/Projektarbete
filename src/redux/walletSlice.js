import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    activeCards: [
      {
        vendor: "Amex",
        number:
          (Math.random() + " ").substring(2, 10) +
          (Math.random() + " ").substring(2, 10),
        name: "Jane Doe".toUpperCase(),
        expiry: "12/03",
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
        (card) => card.number !== action.payload.number
      );
      console.log(state.inactiveCards);
    },
    removeCard: (state, action) => {
      state.inactiveCards = state.inactiveCards.filter(
        (card) => card.number !== action.payload.number
      );
    },
  },
});
export default walletSlice.reducer;
export const { addCards, handleCards, removeCard } = walletSlice.actions;

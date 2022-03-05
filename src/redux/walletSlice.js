import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    activeCards: [
      {
        vendor: "Handelsbanken",
        number: "4431441314123416".match(/.{1,4}/g).join(" "),
        name: "Jane Doe".toUpperCase(),
        expiryMonth: "12",
        expiryYear: "24",
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
      const index = state.inactiveCards
        .map((card) => card.number)
        .indexOf(action.payload.number);

      state.inactiveCards.splice(index, 0, state.activeCards[0]);

      state.activeCards = [action.payload];

      state.inactiveCards = state.inactiveCards.filter(
        (card) => card.number !== action.payload.number
      );
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

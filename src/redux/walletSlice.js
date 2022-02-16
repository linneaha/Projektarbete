import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    cards: [
      {
        vendor: "Amex",
        cardNumber: 0,
        cardHolder: "Jane Doe",
        expire: "22/2",
        cvc: 123,
      },
    ],
  },
  reducers: {
    addCards: (state, action) => {
      state.cards = [...state.cards, action.payload];
      console.log(state.cards);
    },
  },
});
export default walletSlice.reducer;
export const { addCards } = walletSlice.actions;

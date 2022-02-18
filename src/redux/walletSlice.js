import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    cards: [
      {
        vendor: "Amex",
        cardNumber: 1234567891234567,
        cardHolder: "Jane Doe",
        expire: "12/3",
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

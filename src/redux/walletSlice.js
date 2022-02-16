import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    cards: [
      {
        vendor: "Amex",
        cardNumber: 0,
        cardholder: "Jane Doe",
        expireMonth: 1,
        expireYear: 22,
        CCV: 123,
      },
    ],
  },
  reducers:null
});
export default walletSlice.reducer;
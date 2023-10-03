import { createSlice } from "@reduxjs/toolkit";
import { FaqState } from "./tepes";
import { fetchFaq } from "./asyncAction";


const initialState: FaqState = {
  isLoading: false,
  faqs: []
}

export const faqLoading = createSlice({
  name: "faqLoading",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFaq.fulfilled, (state, action) => {
      state.isLoading = true;
      state.faqs = [...action.payload];
    })
    builder.addCase(fetchFaq.rejected, (state) => {
      console.log('ошибка')
    })
  }
}) 

export default faqLoading.reducer;
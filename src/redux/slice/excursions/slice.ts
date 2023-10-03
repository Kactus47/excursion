import { createSlice } from "@reduxjs/toolkit";
import { ExcursionsSlice } from "./types";
import { fetchExcursion } from "./asyncAction";

const initialState: ExcursionsSlice = {
  isLoading: false,
  excursions: []
}


export const excursionLoading = createSlice({
  name: "excursionLoading",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExcursion.fulfilled, (state, action) => {
      state.isLoading = true;
      state.excursions = [...action.payload];
    })
    builder.addCase(fetchExcursion.rejected, (state) => {
      console.log('ошибка')
    })
  }
})

export default excursionLoading.reducer;
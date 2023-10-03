import { createSlice } from "@reduxjs/toolkit";
import { ReviewsSlice } from "./types";
import { fetchReview } from "./asyncActions";

const initialState: ReviewsSlice = {
  isLoading: false,
  reviews: []
}

export const reviewsLoading = createSlice({
  name: 'reviewsLoading',
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder.addCase(fetchReview.fulfilled, (state, action) => {
      state.isLoading = true;
      state.reviews = [...action.payload];
    })
    builder.addCase(fetchReview.rejected, (state) => {
      console.log('ошибка')
    })
  }
})

export default reviewsLoading.reducer;
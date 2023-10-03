import { createAsyncThunk } from "@reduxjs/toolkit";
import { ReviewsObject } from "./types";

export const fetchReview = createAsyncThunk<ReviewsObject[]>(
  'review/fetchReviewStatus',
  async () => {
    const response = fetch('https://6515538adc3282a6a3ce39ce.mockapi.io/Reviews').then(data => data.json());
    return response;
  }
)
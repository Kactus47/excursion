import { createAsyncThunk } from "@reduxjs/toolkit";
import { FaqObject } from "./tepes";

export const fetchFaq = createAsyncThunk<FaqObject[]>(
  'faq/fetchFaqStatus',
  async () => {
    const resolve = fetch('https://651161ac829fa0248e3ff983.mockapi.io/Faq').then(res => res.json());
    return resolve;
  }
)
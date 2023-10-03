import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExcursionObject } from "./types";

export const fetchExcursion = createAsyncThunk<ExcursionObject[]>(
  'excursion/fetchExcursionStatus',
  async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await fetch('https://651161ac829fa0248e3ff983.mockapi.io/Excursions').then(data => data.json());
    return response;
  }
)
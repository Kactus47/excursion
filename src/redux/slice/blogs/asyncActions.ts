import { createAsyncThunk } from "@reduxjs/toolkit";
import { BlogsObject } from "./types";

export const fetchBlog = createAsyncThunk<BlogsObject[]>(
  'blog/fetchBlogStatus',
  async (id) => {
    const response = fetch('https://6515538adc3282a6a3ce39ce.mockapi.io/Blog').then(data => data.json());
    return response;
  }
)
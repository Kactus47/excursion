import { createSlice } from "@reduxjs/toolkit";
import { BlogsSlice } from "./types";
import { fetchBlog } from "./asyncActions";

const initialState: BlogsSlice = {
  isLoading: false,
  blogs: []
}

export const blogsLoading = createSlice({
  name: 'blogsLoading',
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder.addCase(fetchBlog.fulfilled, (state, action) => {
      state.isLoading = true;
      state.blogs = [...action.payload];
    })
    builder.addCase(fetchBlog.rejected, (state) => {
      console.log('ошибка')
    })
  }
})

export default blogsLoading.reducer;
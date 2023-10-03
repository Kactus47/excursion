import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import excursionLoading from './slice/excursions/slice'
import faqLoading from './slice/faq/slice'
import blogsLoading from './slice/blogs/slice'
import reviewsLoading from './slice/reviews/slice'

const store = configureStore({
  reducer: {
    excursionLoading,
    faqLoading,
    blogsLoading,
    reviewsLoading
  },
})
export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
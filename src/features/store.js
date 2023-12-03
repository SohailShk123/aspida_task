import { configureStore } from '@reduxjs/toolkit'
import usersSlice from '../features/slices/usersSlice'
import usersSlice from './slices/usersSlice'

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
})
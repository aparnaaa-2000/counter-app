import { configureStore } from '@reduxjs/toolkit'
import counterRed from './counter'


export const store = configureStore({
  reducer: {
    counter:counterRed
  },
})
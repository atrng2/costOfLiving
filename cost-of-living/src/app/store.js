import { configureStore } from '@reduxjs/toolkit'
import yearReducer from '../components/searchYearSlice'

export default configureStore({
    reducer: {
        yearInput: yearReducer,
      },
})
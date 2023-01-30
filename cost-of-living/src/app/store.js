import { configureStore } from '@reduxjs/toolkit'
import yearReducer from '../components/features/inputBars/inputYearSlice'

export default configureStore({
    reducer: {
        inputYear: yearReducer,
      },
})
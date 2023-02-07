import { configureStore } from '@reduxjs/toolkit'
import yearReducer from '../components/features/inputBars/inputYearSlice'
import cityReducer from '../components/features/inputBars/inputCitySlice'

export default configureStore({
    reducer: {
        inputYear: yearReducer,
        inputCity: cityReducer,
      },
})
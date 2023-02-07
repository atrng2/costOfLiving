import { createSlice } from '@reduxjs/toolkit'

export const inputCitySlice = createSlice({
  name: 'searchCityInput',
  initialState: {
    value: "",
  },
  reducers: {
    updateCity: (state, action) => {
      state.value = action.payload
    },
    removeCity: (state) => {
      state.value = ""
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateCity, removeCity } = inputCitySlice.actions

export default inputCitySlice.reducer
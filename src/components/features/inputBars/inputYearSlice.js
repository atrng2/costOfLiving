import { createSlice } from '@reduxjs/toolkit'

export const inputYearSlice = createSlice({
  name: 'searchYearInput',
  initialState: {
    value: "",
  },
  reducers: {
    updateYear: (state, action) => {
      state.value = action.payload
    },
    removeYear: (state) => {
      state.value = ""
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateYear, removeYear } = inputYearSlice.actions

export default inputYearSlice.reducer
import { createSlice } from '@reduxjs/toolkit'


//TODO add reducers functionality
export const tableSlice = createSlice({
  name: 'tableInput',
  initialState: {
    value: new Array(8),
  },
  reducers: {
    updateTable: (state, action) => {
      state.value[0] = action.payload
    },
    clearTable: (state) => {
      state.value = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateYear, removeYear } = tableSlice.actions

export default tableSlice.reducer
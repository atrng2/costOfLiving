import { createSlice } from '@reduxjs/toolkit'


//TODO add reducers functionality
export const tableSlice = createSlice({
  name: 'tableInput',
  initialState: {
    value: new Array(8).fill("n/a"),
  },
  reducers: {
    updateTable: (state, action) => {
      state.value = action.payload
    },
    clearTable: (state) => {
      state.value = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateTable, clearTable} = tableSlice.actions

export default tableSlice.reducer
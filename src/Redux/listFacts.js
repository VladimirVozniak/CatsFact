import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "facts",
  initialState: {
    listFacts: [],
    listFilteredFacts: [],
    filterFacts: [],
    animals: [],
    month: [],
    page: 1
  },
  reducers: {
    getFacts(state, action) {
      state.listFacts = action.payload
      state.listFilteredFacts = action.payload
    },
    changeFilteredFacts(state, action) {
      state.listFilteredFacts = action.payload
    },
    changeFilter(state, action) {
      state.filterFacts = action.payload
    },
    changeAnimals(state, action) {
      state.animals = action.payload
    },
    changeMonth(state, action) {
      state.month = action.payload
    },
    changePage(state, action) {
      state.page = action.payload
    }
  }
})

export const {
  getFacts,
  changeFilter,
  changePage,
  changeAnimals,
  changeMonth,
  changeFilteredFacts
} = toolkitSlice.actions
export default toolkitSlice.reducer

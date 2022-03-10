import {combineReducers, configureStore} from "@reduxjs/toolkit";
import facts from "./listFacts"

const rootReducer = combineReducers({
  facts
})

export const store = configureStore({
  reducer: rootReducer
})
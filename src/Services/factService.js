import {getFacts} from "../Redux/listFacts";
import api from "../API";

export const getAllFacts = () => {
  return async dispatch => {
    const facts = (await api.get("/facts")).data
    dispatch(getFacts(facts))
  }
}
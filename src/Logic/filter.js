import {changeFilteredFacts} from "../Redux/listFacts";

export const filter = (listFacts, filterType, month, animals, page) => {
  return dispatch => {
    if (!listFacts.length)
      return

    let filteredFacts = listFacts
    filterType.forEach(type => {
      switch (type) {
        case "source":
          filteredFacts = listFacts.filter(fact => fact.source === "user")
          break
        case "verify":
          filteredFacts = listFacts.filter(fact => fact.status.verified)
          break
      }
    })

    if (month.length)
      filteredFacts = filteredFacts.filter(fact => month.includes(String(Number(fact.createdAt.split("-")[1]))))

    if (animals.length)
      filteredFacts = filteredFacts.filter(fact => animals.includes((fact.type)))

    const cropCountFacts = []
    let count = 0
    for (let i = (page - 1) * 10; i < 10 * page; i++) {
      if (i < filteredFacts.length) {
        count++
        cropCountFacts.push(filteredFacts[i])
      } else
        break
    }
    dispatch(changeFilteredFacts(cropCountFacts))
  }
}
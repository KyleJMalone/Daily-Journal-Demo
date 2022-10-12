const API =" http://localhost:8080"

const applicationState ={
    journalEntries: []
}
export const fetchJournalEntries = async () => {
    const dataFetch = await fetch(`${API}/entries`)
    const entries = await dataFetch.json()
    applicationState.journalEntries=entries
  };
export const deletejournalEntries = async (id) => {
   await fetch(`${API}/entries/${id}`,{method:"DELETE"})
   document.dispatchEvent(new CustomEvent("stateChanged"))
   
}
const getNewEntryId = () => {
    let highestEntryId = applicationState.journalEntries.sort((a, b) => b.id - a.id)[0].id;
    return highestEntryId + 1
}

// export const addNewJournalEntry =(newEntry) => {
//     const newEntryId = getNewEntryId()
//     newEntry.id = newEntryId
//     journalEntries.push(newEntry)
//     document.dispatchEvent(new CustomEvent("stateChanged"))
// }

export const getJournalEntries = () => {
    const copyOfEntries = applicationState.journalEntries.map(entry => ({...entry}))
    return copyOfEntries
   

}







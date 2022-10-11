import { fetchEntries } from "./dataAccess.js";

// const getNewEntryId = () => {
//     let highestEntryId = journalEntries.sort((a, b) => b.id - a.id)[0].id;
//     return highestEntryId + 1
// }

// export const addNewJournalEntry =(newEntry) => {
//     const newEntryId = getNewEntryId()
//     newEntry.id = newEntryId
//     journalEntries.push(newEntry)
//     document.dispatchEvent(new CustomEvent("stateChanged"))
// }

export const getJournalEntries = async () => {
    const copyOfEntries = await fetchEntries()
    return copyOfEntries
   

}







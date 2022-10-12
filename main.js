import { getJournalEntries,fetchJournalEntries,deletejournalEntries } from "./entries.js";

const renderHtml = async () => {
  await fetchJournalEntries()
  displayjournalEntries();
}

// Array Of Objects//
//  and putting code inside of a function//
const displayjournalEntries = () => {
  const journalEntries = getJournalEntries();
  let html = "";
  for (const journalEntry of journalEntries) {
    html += `<div class="card">
<h1> Daily Journal ${journalEntry.id}</h1>
        <section> Date: ${journalEntry.date} </section>
        <section> Concept: ${journalEntry.concept}</section>
        <section> Entry: ${journalEntry.entry}</section>
        <section> Mood: ${journalEntry.mood}</section>
        <button id="delete--${journalEntry.id}">Delete</button>
        </div>`;
       
  }
  document.getElementById("journalEntry1").innerHTML = html;
};
//calling the function//
renderHtml()

//adding event listener for button function//
document.addEventListener("click", (e) => {
  if (e.target.id === "recordJournalEntry") {
    e.preventDefault();
    const journalEntry = document.getElementById("journalEntry").value;
    const conceptsCovered = document.getElementById("conceptsCovered").value;
    const entryDate = document.getElementById("entryDate").value;
    const mood = document.querySelector("select[name=currentMood]")?.value;

    const newjournalEntry = {
      date: entryDate,
      concept: conceptsCovered,
      entry: journalEntry,
      mood: mood,
    };
    addNewJournalEntry(newjournalEntry)
  }
});
document.addEventListener("stateChanged", (e) => {
  displayjournalEntries()
});
document.addEventListener("click", (e) => {
  if(e.target.id.startsWith("delete")){
    e.preventDefault()
    const entryId = e.target.id.split("--")[1]
    deletejournalEntries(entryId)
  }})

  document.addEventListener("stateChanged", (e) => {
    renderHtml()
})
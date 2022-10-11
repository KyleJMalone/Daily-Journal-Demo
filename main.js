import { getJournalEntries } from "./entries.js";



// Array Of Objects//
//  and putting code inside of a function//
const displayjournalEntries = async () => {
  const journalEntries = await getJournalEntries();
  let html = "";
  for (const journalEntry of journalEntries) {
    html += `<div class="card">
<h1> Daily Journal ${journalEntry.id}</h1>
        <section> Date: ${journalEntry.date} </section>
        <section> Concept: ${journalEntry.concept}</section>
        <section> Entry: ${journalEntry.entry}</section>
        <section> Mood: ${journalEntry.mood}</section>
        </div>`;
  }
  document.getElementById("journalEntry1").innerHTML = html;
};
//calling the function//
displayjournalEntries();

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

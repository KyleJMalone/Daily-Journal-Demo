import {getJournalEntries} from "./entries.js"

// Array Of Objects//
//  and putting code inside of a function//
const displayjournalEntries =() => {
    const journalEntries = getJournalEntries()
let html=""
for (const journalEntry of journalEntries) {
html += `<div class="card">
<h1> Daily Journal ${journalEntry.id}</h1>
        <section> Date: ${journalEntry.date} </section>
        <section> Concept: ${journalEntry.concept}</section>
        <section> Entry: ${journalEntry.entry}</section>
        <section> Mood: ${journalEntry.mood}</section>
        </div>`
}
document.getElementById('journalEntry').innerHTML = html
}
//calling the function//
displayjournalEntries()


// console.log(html)

// console.log(journalEntries)
// // Adding loops//
// // independent entries//
// for(const journalEntry of journalEntries){
//     console.log(journalEntry.entry)
// }
// //Only Title Of Entry//
// for(const Title of journalEntries){
//     console.log(Title.id)
// }
// //Only Odd Numbers//
// for(const oddNumbers of journalEntries){
//     if(journalEntries % 2 !== 0 )
//     console.log(oddNumbers.entry  % 2 !== 0)
// }
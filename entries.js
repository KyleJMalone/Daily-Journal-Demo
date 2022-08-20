const journalEntries = [ {
    id: 1,
    date:"07/11/2022",
    concept:"Flexbox,Html,Css",
    entry:"learned about Html,Css and Flexbox",
    mood:"Happy"

},
{
    id:2,
    date:"07/12/2022",
    concept: "Flexbox",
    entry:"Struggled learning flexbox for coffee shop exercise,Sydney introduced me to a frog game that helped.",
    mood:"Happy",

},
{
    id:3,
    date:"07/16/2022",
    concept:"Html,Css,Flexbox",
    entry: "Started working on The Quotebook project and had my 1 on 1.",
    mood:"Ok"
    
},
{
    id:4,
    date:"07/18/2022",
    concept:"Git and Github",
    entry:"Started learning about Git/Github",
    mood:"Ok",
},
{
    id:5,
    date:"07/19/2022",
    concept:"Group project with the cobbers",
    entry: "Watched intructors demonstrate Git and Github, my head felt like it was swimming. Started our group projects with the cobbers, learned how to clone repository and push and pull in GitHub",
    mood:"Happy"
},
{
    id:6,
    date:"07/23/2022",
    concept:"Yin and Yang",
    entry:"Since we spent so long making a beautiful page we got to completly ruin it! luckily it was a separate project lol",
    mood:"Happy"

}, {
    id: 7,
    date: "08/01/2022",
    concept: "JavaScript",
    entry: "I finished my Lenoids-Toys project today with no help. I am enjoying learning JavaScript",
    mood: "Happy"
}
]
export const getJournalEntries = () => {
    const copyOfEntries = journalEntries.map(entry => ({...entry}))
    return copyOfEntries
}



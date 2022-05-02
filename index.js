// write js code here corresponding to index.html
// You should add submit event on the form
var arr =JSON.parse(localStorage.getItem("schedule"))||[]
document.querySelector("form").addEventListener("submit",function(){
    event.preventDefault()
    var obj ={
        matchnumber:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value
    }
    arr.push(obj)
    localStorage.setItem("schedule",JSON.stringify(arr))
})

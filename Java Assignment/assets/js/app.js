// var courses=[]
// var input = "computer science"
// courses[0] = input
// console.log(courses)

// var  course1 = document.querySelector("input").value
// console.log(course1.value)
// var courses = []
// console.log(courses)
// courses[0]=course1
// console.log(courses)

// var input = document.querySelector(".course1")
// var courses = []
// function pizza(){
//     // courses[0]=input.value
//     courses.push(input.value)
//     console.log(courses)
// }
var attendance=[];
var input = document.querySelector("#timein")
function timein(){
    attendance.push(input.value)
    input.value = ""
    console.log(attendance)
}
var totalAttendance = document.querySelector("#totalAttendance")
function checkAttendance(){
    totalAttendance.innerHTML = "total attendance "+ attendance.length
}
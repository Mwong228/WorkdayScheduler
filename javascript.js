const date = moment().format('MMMM Do YYYY')
const time = moment().format('HH')
let currentHour = parseInt(moment().format('HH'))

document.querySelector("#currentDay").innerText = `${date}`

for (i = 9; i <= 17; i++) {
    //when the page is relaoded, the input will be pulled from local storage
    var myInput = localStorage.getItem(i) || ""
    //Changes colour of the background based on the time
    if (i < currentHour) {
        bgColor = "bg-secondary"
    }
    else if (i === currentHour) {
        bgColor = "bg-danger"
    }
    else
        bgColor = "bg-success"
    document.querySelector("#time").innerHTML += `<div><div class="input-group-text" id="basic-addon1">${i}:00</div>`
    document.querySelector("#event").innerHTML += `<input value ="${myInput}" type="text" id="eventID${i}" class="form-control ${bgColor}">`
    document.querySelector("#save").innerHTML += `<div><button onClick="save(event)" id="_${i}" class="btn btn-primary">Save</button></div>`

}
//This function will store the value of the text box to local storage
function save(event) {
    event.preventDefault()
    var id = Number(event.target.id.substr(1))
    console.log(id)
    var input = document.querySelector(`#eventID${id}`).value
    localStorage.setItem(id, input);
    console.log(input);

}
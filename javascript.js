const date = moment().format('MMMM Do YYYY')
const time = moment().format('HH')
let currentHour = parseInt(moment().format('HH'))

document.querySelector("#currentDay").innerText = `${date}`

for (i = 9; i <= 17; i++) {
    //If current time has already past, the textbox background will be grey to show that the time has past
    if (i < currentHour) {
        document.querySelector("#time").innerHTML += 
        `<div><div class="input-group-text" id="basic-addon1">${i}:00<input type="text" id="eventID${i}" class="form-control bg-secondary" ><button type="button" id="storageEl" class="btn btn-primary">Save</button></div></div>`

    }
    //If current time is now, the textbox will be highlighted red
    else if (i === currentHour) {
        document.querySelector("#time").innerHTML += `<div><div class="input-group-text" id="basic-addon1">${i}:00<input type="text" id="eventID${i}" class="form-control bg-danger"><button type="button" id="storageEl" class="btn btn-primary">Save</button></div></div>`
    }
    //If current time has not past yet, the textbox will be green
    else {
        document.querySelector("#time").innerHTML += `<div><div class="input-group-text" id="basic-addon1">${i}:00<input type="text" id="eventID${i}" class="form-control bg-success"><button type="button" id="storageEl" class="btn btn-primary">Save</button></div></div>`
    }
}

var storageEl = Array.from(document.querySelectorAll("#storageEl"))
var buttons = document.querySelectorAll("button");
buttons.forEach(function (item) {
    //For each time a button is clicked, the function will record the text value in the textarea associated to the button and record it to local storage
    item.addEventListener("click", function () {
        var id = this.previousElementSibling.attributes.id.value;
        console.log(id);
        var input = this.previousElementSibling.value;
        localStorage.setItem(id, input);
        console.log(input);
    })
});

//Value is being saved to local storage so it can be displayed on the scene after the page is relaoded
var input1 = document.querySelector("#eventID9")
var input2 = document.querySelector("#eventID10")
var input3 = document.querySelector("#eventID11")
var input4 = document.querySelector("#eventID12")
var input5 = document.querySelector("#eventID13")
var input6 = document.querySelector("#eventID14")
var input7 = document.querySelector("#eventID15")
var input8 = document.querySelector("#eventID16")
var input9 = document.querySelector("#eventID17")

input1.value = localStorage.getItem("eventID9")
input2.value = localStorage.getItem("eventID10")
input3.value = localStorage.getItem("eventID11")
input4.value = localStorage.getItem("eventID12")
input5.value = localStorage.getItem("eventID13")
input6.value = localStorage.getItem("eventID14")
input7.value = localStorage.getItem("eventID15")
input8.value = localStorage.getItem("eventID16")
input9.value = localStorage.getItem("eventID17")

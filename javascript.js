
const date = moment().format('MMMM Do YYYY')
const time = moment().format ('LT')

document.querySelector("#time").innerText = `<div> hello </div>`

for (i = 9.00; i < 17.00; i++){
    document.querySelector("#time").innerText = `<div> ${i} </div>`
}
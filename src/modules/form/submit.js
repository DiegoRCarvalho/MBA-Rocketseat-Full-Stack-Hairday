import dayjs from "dayjs"

const form = document.querySelector("form")
const selectDate = document.getElementById("date")
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// loads the current date and sets the minimum date
selectDate.value = inputToday
selectDate.min = inputToday

form.onsubmit = (event) => {
  // prevents default form submission behavior
  event.preventDefault()

  console.log("Enviado")
}
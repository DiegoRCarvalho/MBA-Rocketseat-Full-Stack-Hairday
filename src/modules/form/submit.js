import dayjs from "dayjs"
import {scheduleNew} from "../../services/schedule-new.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectDate = document.getElementById("date")
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// loads the current date and sets the minimum date
selectDate.value = inputToday
selectDate.min = inputToday

form.onsubmit = async(event) => {
  // prevents default form submission behavior
  event.preventDefault()
  try {

    // Retrieve customer name.
    const name = clientName.value.trim()
    if(!name){
      return alert("Informe o nome do cliente.")
    }

    // Retrieve the selected hour.
    const hourSelected = document.querySelector(".hour-selected")
    if(!hourSelected){
      return alert("Informe a hora.")
    }
    
    // Recover only the hour.
    const [hour] = hourSelected.innerText.split(":")

    // Insert time into date.
    const when = dayjs(selectDate.value).add(hour,"hour")

    // Generate an ID
    const id = new Date().getTime()

    await scheduleNew({
      id,
      name, 
      when
    })

  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }
}
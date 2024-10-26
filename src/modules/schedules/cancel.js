import { schedulesDay } from "../schedules/load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

// Select all appointments.
const periods = document.querySelectorAll(".period")

// Generate click event for each list (morning, afternoon and evening)
periods.forEach((period)=> {

  // Captures click event
  period.addEventListener("click", async (event) =>{
    if(event.target.classList.contains("cancel-icon")){

      // Captures the ID of the element that was clicked.
      const item = event.target.closest("li")
      const { id } = item.dataset

      if(id){
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")
        if(isConfirm){
          await scheduleCancel({id})
          schedulesDay()
        }  
      }
    }
  })
})
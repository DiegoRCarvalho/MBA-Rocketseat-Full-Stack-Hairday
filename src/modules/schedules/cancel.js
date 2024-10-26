// Select all appointments.
const periods = document.querySelectorAll(".period")

// Gerar evento de click para cada lista( manhã, tarde e noite)
periods.forEach((period)=> {

  // Generate click event for each list (morning, afternoon and evening)vvvv
  period.addEventListener("click", (event) =>{
    if(event.target.classList.contains("cancel-icon")){

      // Captures the ID of the element that was clicked.
      const item = event.target.closest("li")
      const { id } = item.dataset

      if(id){
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")
        if(isConfirm){

        }  
      }
    }
  })
})
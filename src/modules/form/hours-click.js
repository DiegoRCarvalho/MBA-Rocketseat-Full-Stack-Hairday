export function hoursClick(){
  const hours = document.querySelectorAll(".hour-available")
  
  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {

      // Removes the "hour-selected" class from all unselected "li".
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected")
      })

      // Adds the class to the clicked li.
      selected.target.classList.add("hour-selected")
    })
  })
}
import dayjs from "dayjs"

// Select morning, afternoon and evening sessions.
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({ dailySchedules }) {

  try {

    // Clear the lists
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""
    
    // Render schedules by period.
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const name = document.createElement("span")
      
      // Add element id
      item.setAttribute("data-id", schedule.id)
      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name
    
      // Create cancel icon
      const cancelIcon = document.createElement("img")
      cancelIcon.classList.add("cancel-icon")
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
      cancelIcon.setAttribute("alt", "cancelar")

      // Add time, name and icon to the item.
      item.append(time, name, cancelIcon)

      // Get only hour
      const hour = dayjs(schedule.when).hour()

      // Render the schedule in the session (morning, afternoon or evening).
      if(hour <= 12){
        periodMorning.appendChild(item)
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }
    })
  } catch (error) {
    console.log(error)
    alert("Não foi possível exibir os agendamentos.")
  }
}
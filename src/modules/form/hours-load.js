import dayjs from "dayjs"
import { openingHours} from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({date}){
  // only loads the hours
  const opening = openingHours.map((hour) => {
    // creates an array using the data that was separated by : and retrieves only the first element from each position of the array.
    const [scheduleHour] = hour.split(":")
    
    // Add hours to the date and check if it has passed
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
    return {
      hour,
      available: isHourPast,
    }
    
  })

  // Render available times
  opening.forEach(({hour, available}) => {
    const li = document.createElement("li")

    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")
    li.textContent = hour

    if (hour === "9:00"){
      hourHeaderAdd("Manhã")
    } else if(hour === "12:00"){
      hourHeaderAdd("Tarde")
    } else if(hour === "18:00"){
      hourHeaderAdd("Noite")
    } 
    hours.append(li)
  })

  // Add the click event to the available hours
  hoursClick()
}

function hourHeaderAdd(title) {
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title
  hours.append(header)
}
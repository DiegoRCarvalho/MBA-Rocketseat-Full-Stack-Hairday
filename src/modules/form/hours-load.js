import dayjs from "dayjs"
import { openingHours} from "../../utils/opening-hours.js"

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
}
/*
  This module will load the schedules for scheduling
*/

import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"
import { schedulesShow } from "./show.js"


const selectedDate = document.getElementById("date")

export async function schedulesDay(){

  /* Search for available times to display on the left side of the screen. Only future times and times that have not yet been scheduled*/

  // Gets the date from input
  const date = selectedDate.value

  // Search the API for appointments to load on the right side of the screen.
  const dailySchedules = await scheduleFetchByDay({date})
  
  // Show appointments
  schedulesShow({dailySchedules})

  // Renders available hours
  hoursLoad({date, dailySchedules})

}
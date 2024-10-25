/*
  This module will load the schedules for scheduling
*/

import { hoursLoad } from "../form/hours-load.js"

const selectedDate = document.getElementById("date")

export function schedulesDay(){

  /* Search the API for appointments to load on the right side of the screen.*/


  /* Search for available times to display on the left side of the screen. Only future times and times that have not yet been scheduled*/

  // Obtéma data do input
  const date = selectedDate.value

  // Renderiza as horas disponíveis
  hoursLoad({date})

}
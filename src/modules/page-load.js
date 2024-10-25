/*
  This module will be executed every time the page is refreshed
*/ 

import { schedulesDay } from "./schedules/load.js"

document.addEventListener("DOMContentLoaded", function () {
  schedulesDay()
})
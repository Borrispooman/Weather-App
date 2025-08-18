import WeatherAPIController from "./weather.js";
import DomController from "./dom.js";
import "./style.css";
import "./reset.css";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const search = document.querySelector("input").value;

  const weatherObj = await WeatherAPIController.getWeather(search);
  console.log(weatherObj);
  if (weatherObj === "NotFound") {
    DomController.displayNotFound();
  } else {
    DomController.displayWeather(weatherObj);
    console.log("Else block trying to pass weatherObj to the function");
  }
  document.querySelector("input").value = "";
});

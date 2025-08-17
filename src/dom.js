const DomController = (() => {
  const displayWeather = function (weatherObj) {
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML = "";
    const weatherDiv = document.createElement("div");
    weatherDiv.className = "weather";

    const header = document.createElement("h2");
    header.className = "location-name";
    header.textContent = `${weatherObj.resolvedAddress}`;
    weatherDiv.append(header);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.className = "description";
    descriptionDiv.textContent = `${weatherObj.description}`;
    weatherDiv.append(descriptionDiv);

    const tempContainerDiv = document.createElement("div");
    tempContainerDiv.className = "info-icon-container";
    const tempSvgNS = "http://www.w3.org/2000/svg";
    const tempSvg = document.createElementNS(tempSvgNS, "svg");
    tempSvg.setAttribute("viewbox", "0 0 24 24");
    const path = document.createElementNS(tempSvgNS, "path");
    path.setAttribute(
      "d",
      "M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",
    );
    tempSvg.appendChild(path);
    const tempDiv = document.createElement("div");
    tempDiv.textContent = `Temperature: ${((weatherObj.currentConditions.temp - 32) * (5 / 9)).toFixed(1)}°C`;
    tempContainerDiv.append(tempDiv, tempSvg);
    weatherDiv.append(tempContainerDiv);

    const feelsLikeDiv = document.createElement("div");
    feelsLikeDiv.className = "info-icon-container";
    feelsLikeDiv.textContent = `Feels like: ${((weatherObj.currentConditions.feelslike - 32) * (5 / 9)).toFixed(1)}°C`;
    weatherDiv.append(feelsLikeDiv);

    const humidContainerDiv = document.createElement("div");
    humidContainerDiv.className = "info-icon-container";
    const humidSvgNS = "http://www.w3.org/2000/svg";
    const humidSvg = document.createElementNS(tempSvgNS, "svg");
    humidSvg.setAttribute("viewbox", "0 0 24 24");
    const humidPath = document.createElementNS(tempSvgNS, "path");
    humidPath.setAttribute(
      "d",
      "M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z",
    );
    humidSvg.appendChild(humidPath);
    const humidDiv = document.createElement("div");
    humidDiv.textContent = `Humidity: ${weatherObj.currentConditions.humidity}%`;
    humidContainerDiv.append(humidDiv, humidSvg);
    weatherDiv.append(humidContainerDiv);

    const windContainerDiv = document.createElement("div");
    windContainerDiv.className = "info-icon-container";
    const windSvgNS = "http://www.w3.org/2000/svg";
    const windSvg = document.createElementNS(windSvgNS, "svg");
    windSvg.setAttribute("viewbox", "0 0 24 24");
    const windPath = document.createElementNS(windSvgNS, "path");
    windPath.setAttribute(
      "d",
      "M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z",
    );
    windSvg.appendChild(windPath);
    const windDiv = document.createElement("div");
    windDiv.textContent = `Wind: ${weatherObj.currentConditions.windspeed}km/h`;
    windContainerDiv.append(windDiv, windSvg);
    weatherDiv.append(windContainerDiv);

    mainContent.append(weatherDiv);
  };
  return { displayWeather };
})();

export default DomController;

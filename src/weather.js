const WeatherAPIController = (() => {
  const getWeather = async (search) => {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}?unitGroup=us&key=AKD9SD54ULJ287EJ85DYS8CCF&contentType=json`,
      );
      const weatherData = await response.json();
      return weatherData;
    } catch (error) {
      return "NotFound";
    }
  };

  return { getWeather };
})();

export default WeatherAPIController;

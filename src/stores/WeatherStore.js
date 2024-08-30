import { defineStore } from "pinia";

const ApiKey = import.meta.env.VITE_API_KEY; //Get API KEY from .env file

export const useWeatherStore = defineStore("Weather", {
  state: () => ({
    WeatherData: null,
    error: null,
    loading: false,
  }),

  actions: {
    async GetWeather(CityName) {
      this.loading = true;
      if (!ApiKey || ApiKey.trim() === "") {
        this.error = "You need an API KEY to run";
        this.loading=false;
        alert(this.error); //Trigger when API KEY empty
        return;
      }
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&units=metric&appid=${ApiKey}`
        );
        const data = await response.json();
        if (data.cod === "404") {
          alert(data.message); // If API returned error code 404 and message
        } 
        else {
          this.WeatherData = data;          
        }
        this.loading = false;
      } catch (error) {
        this.error = "Error fetching data";
      }
    },
  },
});

<template>
  <div>
    <div class="absolute right-10 top-10 w-20">
      <img :src="getWeatherIcon(IconWeather)" class="md:w-[200px]" />
    </div>
    <div>
      <div v-if="error">{{ error }}</div>
      <div v-if="WeatherData" class="relative text-white text-center">
        <div class="text-4xl">{{ WeatherData.name }}</div>
        <div class="pt-4 w-[300px]">
          <p class="flex justify-between"><span class="italic">Temperature:</span> {{ WeatherData.main.temp }}°C</p>
          <p class="flex justify-between"><span class="italic">Condition:</span> {{ WeatherData.weather[0].main }}</p>
          <p class="flex justify-between"><span class="italic">Humidity:</span> {{ WeatherData.main.humidity }}%</p>
          <p class="flex justify-between"><span class="italic">Wind Speed:</span> {{ WeatherData.wind.speed }} m/s</p>
        </div>
        <!-- Spinner appear when loading is true -->
        <div v-if="loading" role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
          <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor" />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill" />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useWeatherStore } from "../stores/WeatherStore";
import ClearIcon from "../assets/svg/clear.svg";
import DrizzleIcon from "../assets/svg/drizzle.svg";
import MistIcon from "../assets/svg/mist.svg";
import CloudsIcon from "../assets/svg/clouds.svg";
import ThunderStormIcon from "../assets/svg/thunderstorm.svg";
import RainIcon from "../assets/svg/rain.svg";

const store = useWeatherStore(); //Get data from store Pinia

const WeatherData = computed(() => store.WeatherData);
const error = computed(() => store.error);
const loading = computed(() => store.loading);
const IconWeather = computed(() => WeatherData.value?.weather[0]?.main); //Get weather condition

const getWeatherIcon = (condition) => {
  switch (condition) {
    case "Clear":
      return ClearIcon;
    case "Drizzle":
      return DrizzleIcon;
    case "Mist":
      return MistIcon;
    case "Clouds":
      return CloudsIcon;
    case "Thunder Storm":
      return ThunderStormIcon;
    case "Rain":
      return RainIcon;
    default:
      return null;
  }
}; //Display weather icon
</script>

<style scoped>
p {
  font-weight: 500;
}
</style>

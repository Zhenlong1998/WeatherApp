<template>
  <div class="flex flex-col md:flex-row gap-4 w-[80%] md:w-[500px] m-auto">
    <multiselect v-model="SelectedCity" placeholder="Select a city" :options="CityList" :custom-label="nameWithLang"
      :max-height="160" label="name"></multiselect>
    <!-- Disable the button when input empty -->
    <button @click="HandleSearch" :disabled="SelectedCity === null && !loading"
      :class="SelectedCity === null && !loading ? 'opacity-50 bg-[#fce5709e]' : ''"
      class="bg-[#FCE570] border-solid border-[#FDB813] border-[2px] rounded p-[4px] px-10 whitespace-nowrap">
      Get Weather
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useWeatherStore } from "../stores/WeatherStore";
import Multiselect from "vue-multiselect";

const store = useWeatherStore();// Weather Store from Pinia
const SelectedCity = ref(null);// Ref for selected city

// List of city options
const CityList = [
  { name: "George Town" },
  { name: "Kuala Lumpur" },
  { name: "Ipoh" },
  { name: "Kuching" },
  { name: "Johor Bahru" },
  { name: "Putrajaya" },
  { name: "Kota Kinabalu" },
  { name: "Shah Alam" },
  { name: "Malacca" },
  { name: "Alor Setar" },
  { name: "Miri" },
  { name: "Petaling Jaya" },
  { name: "Kuala Terengganu" },
  { name: "Iskandar Puteri" },
  { name: "Seberang Perai" },
  { name: "Seremban" },
  { name: "Subang Jaya" },
  { name: "Pasir Gudang" },
  { name: "Kuantan" },
  { name: "Klang" },
];

// Search Button
const HandleSearch = () => {
  if (SelectedCity.value) {
    store.GetWeather(SelectedCity.value.name); // Call API in store with city name
  } else {
    alert("Please enter or select a city."); // Pop when input empty and button clicked
  }
};

const loading = computed(() => store.loading);
const nameWithLang = ({ name }) => `${name}`;// Custom label formatting
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style>
.multiselect__tags {
  background: #ffffff0a !important;
  text-align: center;
}

.multiselect__input,
.multiselect__single {
  background: transparent;
  color: white;
}

.multiselect__content-wrapper {
  opacity: 0.85;
}
</style>
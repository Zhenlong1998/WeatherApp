# Weather App

An app that can seach the weather of cities in Malaysia

20 areas in the country are officially termed cities by law. 
For more details,refer [Wikipedia cities in Malaysia](https://en.wikipedia.org/wiki/List_of_cities_in_Malaysia)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Prerequisite 

### Environment variable file

To sucessfully run the application, you need to create **.env** file which store API KEY. For your convenient, a **.env.example** is included. Please follow the step below,

1. Copy **.env.example** , then remove .example, final file name should be **.env**
2. Request the APIKEY from author or get your free API KEY here [Open Weather Map](https://openweathermap.org/price). Then replace the APIKEY with the real key.

> NOTE  
> **.env** should be placed in the root directory of your project, same location with the package-lock.json

## Installation

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
Pick your favourite browser and enjoy the app!

## References
1. Vue3 Installation. [Vuejs](https://vuejs.org/guide/quick-start.html)

2. Tailwind Installation. [Tailwind](https://v2.tailwindcss.com/docs/guides/vue-3-vite)

3. Environment Variable File. [Env File](https://cli.vuejs.org/guide/mode-and-env.html)

4. Api Used and Api Response. [Open Weather Map](https://openweathermap.org/current#name) & [Unit in API](https://openweathermap.org/weather-data) 

5. State Management Library for sharing data between components. [Pinia](https://pinia.vuejs.org/core-concepts/state.html)

6. MultiSelect Input to avoid invalid input. [Vue-Multiselect](https://vue-multiselect.js.org/)

7. Spinner Component. [Spinner](https://flowbite.com/docs/components/spinner/)

8. Optional Chaining. [Optional Chaining](https://www.geeksforgeeks.org/javascript-optional-chaining/)

9. Disable button when input box empty. [Button Disable](https://stackoverflow.com/questions/54876820/how-to-disable-button-in-vuejs)

10. Check Network Status. [Online Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine)




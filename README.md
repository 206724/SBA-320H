# React Weather Component

This simple React component allows you to fetch and display weather information based on city names using the OpenWeatherMap API.

### Features:
- **Search**: Enter a city name to fetch weather data.
- **Current Weather Display**: Shows temperature, location, humidity, and wind speed.
- **Icons**: Weather icons dynamically change based on the current weather conditions.

### Technologies Used:
- React
- CSS (for styling)
- OpenWeatherMap API (for weather data)

### Prerequisites:
- Node.js installed on your machine
- OpenWeatherMap API key (free registration required)

### Installation:
1. Clone the repository:
   ```
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your environment:
   - Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api) by signing up.
   - Create a `.env` file in the root directory.
   - Add your API key to the `.env` file:
     ```
     VITE_APP_ID=your_api_key_here
     ```

### Usage:
1. Import the `Weather` component into your React application:
   ```jsx
   import React from 'react';
   import Weather from './Weather';
   import './Weather.css'; // Example CSS import
   ```

2. Use the `Weather` component in your JSX markup:
   ```jsx
   function App() {
     return (
       <div className="App">
         <h1>Weather App</h1>
         <Weather />
       </div>
     );
   }

   export default App;
   ```

3. Customize styles:
   - Modify `Weather.css` to adjust the appearance of the weather component.

4. Run your React application:
   ```
   npm start
   ```


### Notes:
- This component uses `fetch` to call the OpenWeatherMap API.
- Icons for weather conditions are sourced from local assets (`search_icon`, `clear_icon`, etc.). Ensure these assets are correctly imported or replaced with your own.

### Credits:
- Icons sourced from [OpenWeatherMap](https://openweathermap.org/weather-conditions).

---


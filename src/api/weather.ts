const weatherData = {
  Delhi: {
    coord: { lon: 77.1025, lat: 28.7041 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    main: { temp: 35.0, feels_like: 38.2, temp_min: 33.5, temp_max: 36.0, pressure: 110, humidity: 45 },
    visibility: 10000,
    wind: { speed: 3.5, deg: 270 },
    clouds: { all: 0 },
    dt: 1605182400,
    sys: { country: "IN", sunrise: 1605153000, sunset: 1605195000 },
    timezone: 19800,
    id: 1273294,
    name: "Delhi",
    cod: 200,
  },
  Mumbai: {
    coord: { lon: 72.8777, lat: 19.076 },
    weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
    main: { temp: 30.5, feels_like: 34.0, temp_min: 29.0, temp_max: 32.0, pressure: 102, humidity: 70 },
    visibility: 9000,
    wind: { speed: 5.0, deg: 250 },
    clouds: { all: 40 },
    dt: 1605182400,
    sys: { country: "IN", sunrise: 1605150000, sunset: 1605192000 },
    timezone: 19800,
    id: 1275339,
    name: "Mumbai",
    cod: 200,
  },
  Bangalore: {
    coord: { lon: 77.5946, lat: 12.9716 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    main: { temp: 28.0, feels_like: 30.5, temp_min: 26.0, temp_max: 29.5, pressure: 103, humidity: 60 },
    visibility: 10000,
    wind: { speed: 4.0, deg: 220 },
    clouds: { all: 20 },
    dt: 1605182400,
    sys: { country: "IN", sunrise: 1605151000, sunset: 1605193000 },
    timezone: 19800,
    id: 1277333,
    name: "Bangalore",
    cod: 200,
  },
  Chennai: {
    coord: { lon: 80.2785, lat: 13.0878 },
    weather: [{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }],
    main: { temp: 31.0, feels_like: 35.5, temp_min: 30.0, temp_max: 32.5, pressure: 100, humidity: 75 },
    visibility: 10000,
    wind: { speed: 6.0, deg: 230 },
    clouds: { all: 90 },
    dt: 1605182400,
    sys: { country: "IN", sunrise: 1605152000, sunset: 1605194000 },
    timezone: 19800,
    id: 1264527,
    name: "Chennai",
    cod: 200,
  },
  Kolkata: {
    coord: { lon: 88.3639, lat: 22.5726 },
    weather: [{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }],
    main: { temp: 32.0, feels_like: 36.0, temp_min: 30.0, temp_max: 34.0, pressure: 101, humidity: 65 },
    visibility: 8000,
    wind: { speed: 4.2, deg: 240 },
    clouds: { all: 60 },
    dt: 1605182400,
    sys: { country: "IN", sunrise: 1605149000, sunset: 1605191000 },
    timezone: 19800,
    id: 1275004,
    name: "Kolkata",
    cod: 200,
  },
  Hyderabad: {
    coord: { lon: 78.4867, lat: 17.385 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    main: { temp: 29.5, feels_like: 32.0, temp_min: 28.0, temp_max: 31.0, pressure: 103, humidity: 55 },
    visibility: 10000,
    wind: { speed: 4.5, deg: 220 },
    clouds: { all: 25 },
    dt: 1605182400,
    sys: { country: "IN", sunrise: 1605151000, sunset: 1605193000 },
    timezone: 19800,
    id: 1269843,
    name: "Hyderabad",
    cod: 200,
  },
  Pune: {
    coord: { lon: 73.8567, lat: 18.5204 },
    weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
    main: { temp: 28.5, feels_like: 31.0, temp_min: 27.0, temp_max: 30.0, pressure: 114, humidity: 65 },
    visibility: 10000,
    wind: { speed: 4.5, deg: 230 },
    clouds: { all: 50 },
    dt: 1605182400,
    sys: { country: "IN", sunrise: 1605152000, sunset: 1605193000 },
    timezone: 19800,
    id: 1259229,
    name: "Pune",
    cod: 200,
  },
  Ahmedabad: {
    coord: { lon: 72.5714, lat: 23.0225 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    main: { temp: 34.0, feels_like: 37.5, temp_min: 32.0, temp_max: 35.5, pressure: 101, humidity: 50 },
    visibility: 10000,
    wind: { speed: 5.0, deg: 240 },
    clouds: { all: 0 },
    dt: 1605182400,
    sys: { country: "IN", sunrise: 1605150000, sunset: 1605192000 },
    timezone: 19800,
    id: 1279233,
    name: "Ahmedabad",
    cod: 200,
  },
  Jaipur: {
    coord: { lon: 75.7873, lat: 26.9124 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    main: { temp: 36.0, feels_like: 39.0, temp_min: 34.0, temp_max: 37.5, pressure: 109, humidity: 40 },
    visibility: 10000,
    wind: { speed: 3.5, deg: 260 },
    clouds: { all: 5 },
    dt: 1605182400,
    sys: { country: "IN", sunrise: 1605148000, sunset: 1605190000 },
    timezone: 19800,
    id: 1269515,
    name: "Jaipur",
    cod: 200,
  },
  Lucknow: {
    coord: { lon: 80.9462, lat: 26.8467 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    main: { temp: 33.0, feels_like: 36.0, temp_min: 31.0, temp_max: 4.5, pressure: 102, humidity: 55 },
    visibility: 10000,
    wind: { speed: 4.0, deg: 270 },
    clouds: { all: 20 },
    dt: 1605182400,
    sys: { country: "IN", sunrise: 1605149000, sunset: 1605191000 },
    timezone: 19800,
    id: 1264733,
    name: "Lucknow",
    cod: 200,
  },
} as const;

export default weatherData;
// Ensures strict typing

// Define the type for valid city responses
type WeatherSuccessResponse = typeof weatherData[keyof typeof weatherData];

// Define the type for error response
type WeatherErrorResponse = { cod: number; message: string };

// Define a union type that allows both success and error responses
type WeatherResponse = WeatherSuccessResponse | WeatherErrorResponse;

export const fetchWeatherData = async (city: string | { lat: number; lng: number }): Promise<WeatherResponse> => {
  if (typeof city === "string" && city in weatherData) {
    return weatherData[city as keyof typeof weatherData];
  }
  return { cod: 404, message: "City not found" }; // Ensuring cod and message exist in error response
};

// **Fix the error handling when accessing message**
export const getWeatherMessage = (data: WeatherResponse): string => {
  if ("message" in data) {
    return data.message; // Only exists in error response
  }
  return `Weather data for ${data.name} loaded successfully.`;
};

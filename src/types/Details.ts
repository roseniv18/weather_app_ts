export type Details = {
    [key: string]: string | number
    sunrise: string
    sunset: string
    apparent_temperature_min: number
    apparent_temperature_max: number
    temperature: number
    windspeed: number
    winddirection: number
    weathercode: number
    precipitation_probability_mean: number
    rain_sum: number
    snowfall_sum: number
    uv_index_max: number
}

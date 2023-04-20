export type Weather = {
    current_weather?: {
        is_day: number
        temperature: number
        time: string
        weathercode: number
        winddirection: number
        windspeed: number
    }
    daily?: {
        apparent_temperature_max: number[]
        apparent_temperature_min: number[]
        precipitation_hours: number[]
        precipitation_probability_max: number[]
        precipitation_sum: number[]
        rain_sum: number[]
        shortwave_radiation_sum: number[]
        showers_sum: number[]
        snowfall_sum: number[]
        sunrise: string[]
        sunset: string[]
        temperature_2m_max: number[]
        temperature_2m_min: number[]
        time: string[]
        uv_index_clear_sky_max: number[]
        uv_index_max: number[]
        weathercode: number[]
        winddirection_10m_dominant: number[]
        windgusts_10m_max: number[]
        windspeed_10m_max: number[]
    }
    daily_units?: {
        apparent_temperature_max: string
        apparent_temperature_min: string
        precipitation_hours: string
        precipitation_probability_max: string
        precipitation_sum: string
        rain_sum: string
        shortwave_radiation_sum: string
        showers_sum: string
        snowfall_sum: string
        sunrise: string
        sunset: string
        temperature_2m_max: string
        temperature_2m_min: string
        time: string
        uv_index_clear_sky_max: string
        uv_index_max: string
        weathercode: string
        winddirection_10m_dominant: string
        windgusts_10m_max: string
        windspeed_10m_max: string
    }
    elevation?: number
    generationtime_ms?: number
    hourly?: {
        apparent_temperature: number[]
        is_day: number[]
        precipitation: number[]
        precipitation_probability: number[]
        rain: number[]
        relativehumidity_2m: number[]
        showers: number[]
        snowfall: number[]
        surface_pressure: number[]
        temperature_2m: number[]
        time: string[]
        uv_index: number[]
        visibility: number[]
        weathercode: number[]
        winddirection_10m: number[]
        windgusts_10m: number[]
        windspeed_10m: number[]
    }
    hourly_units?: {
        apparent_temperature: string
        is_day: string
        precipitation: string
        precipitation_probability: string
        rain: string
        relativehumidity_2m: string
        showers: string
        snowfall: string
        surface_pressure: string
        temperature_2m: string
        time: string
        uv_index: string
        visibility: string
        weathercode: string
        winddirection_10m: string
        windgusts_10m: string
        windspeed_10m: string
    }
    latitude?: number
    longitude?: number
    timezone?: string
    timezone_abbreviation?: string
    utc_offset_seconds?: number
}
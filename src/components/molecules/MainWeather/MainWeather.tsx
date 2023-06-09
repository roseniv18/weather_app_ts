import { useAppSelector } from "../../../store/store"
import Location from "../../atoms/Location/Location"
import Temperature from "../../atoms/Temperature/Temperature"
import WeatherIcon from "../../atoms/WeatherIcon/WeatherIcon"
import Details from "../Details/Details"
import weatherCodes from "../../../utils/weatherCodes"
import styles from "./MainWeather.module.scss"

const MainWeather = () => {
    const { daily, date, mainParams, location } = useAppSelector((store) => store.weather)
    const { weathercode } = daily[date]

    const temperature = daily[date].temperature
    const units = mainParams.tempUnit === "celsius" ? "°C" : "°F"

    return (
        <article className={styles.container}>
            <div className={styles.main}>
                <Location
                    name={location.name}
                    country_code={location.country_code}
                    description={weatherCodes[weathercode].description}
                />
                <div className={styles.temperatureContainer}>
                    <WeatherIcon icon={weatherCodes[weathercode].icon.l} />
                    <Temperature
                        temperature={temperature}
                        units={units}
                        fontSize={"54px"}
                    />
                </div>
            </div>

            <div>
                <Details />
            </div>
        </article>
    )
}

export default MainWeather

import { useAppSelector } from "../../../store/store"
import weatherCodes from "../../../utils/weatherCodes"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

import styles from "./HourlyForecast.module.scss"
import dayjs from "dayjs"
import ForecastDetail from "../../molecules/ForecastDetail/ForecastDetail"
import useMouse from "../../../hooks/useMouse"

export const HourlyForecast = () => {
	const { hourly, mainParams } = useAppSelector((store) => store.weather)
	const { slides } = useAppSelector((store) => store.carouselWidth)

	const units = mainParams.tempUnit === "celsius" ? "°C" : "°F"

	// Get mouse position
	// This is used to stop the carousel from playing on mouse hover
	// Ref is attached to a div inside the CarouselProvider
	const [_, ref, isIntersecting] = useMouse()

	return (
		<CarouselProvider
			naturalSlideHeight={300}
			naturalSlideWidth={250}
			totalSlides={24}
			visibleSlides={slides}
			isPlaying={!isIntersecting}
			step={2}
			className={styles.carousel}
		>
			<div ref={ref}>
				<ButtonBack className={styles.btnBack}>
					<span>&lt;</span>
				</ButtonBack>
				<Slider className={styles.slider}>
					{Object.keys(hourly).map((hour, index) => {
						const temp: number = hourly[hour]["temperature_2m"]
						const weathercode: number = hourly[hour]["weathercode"]
						return (
							<Slide key={hour} index={index}>
								<ForecastDetail
									icon={weatherCodes[weathercode].icon.xs}
									time={dayjs(hour).format("HH:mm")}
									temp={temp}
									units={units}
								/>
							</Slide>
						)
					})}
				</Slider>

				<ButtonNext className={styles.btnNext}>
					<span>&gt;</span>
				</ButtonNext>
			</div>
		</CarouselProvider>
	)
}

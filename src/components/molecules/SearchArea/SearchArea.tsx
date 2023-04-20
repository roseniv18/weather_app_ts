import { useAppSelector } from "../../../store/store"
import InputField from "../../atoms/InputField/InputField"
import SearchSuggestions from "../../atoms/SearchSuggestions/SearchSuggestions"
import Time from "../../atoms/Time/Time"
import styles from "./SearchArea.module.scss"

const SearchArea = () => {
    const { isDropDownOpen } = useAppSelector((store) => store.weather)
    return (
        <div className={styles.container}>
            <InputField />
            {isDropDownOpen && <SearchSuggestions />}
            <Time />
        </div>
    )
}

export default SearchArea
import { useState } from "react";
import { useDispatch} from "react-redux";
import { resetResults, runSearch } from "../../redux/trucksSlice";
import FilterList from "../FiltersList/FiltersList";
import { equipmentsList, vehicleTypes } from "../../helpers/mapper";
import Button from "../Button/Button";
import style from "./FiltersSection.module.css";

export default function FiltersSection() {
  const [location, setLocation] = useState("");
  const [filters, setFilters] = useState([]);
  const [type, setType] =useState(null)
  const dispatch = useDispatch()

  const changeLocation = e => {
    setLocation(e.target.value)
  }

  const onSearch = () => {
    const form = {location: location?.trim() || "", type, equipments: filters};
      dispatch(resetResults())
 dispatch(runSearch(form))

  };

 
  return (
    <div className={style.container}>
      <div className={style.meta}>
        <label htmlFor="location" className={style.label}>
          Location
        </label>
        <div className={style.inputWrapper}>
          <span>
            {" "}
            <i className="bi bi-map" aria-hidden="true" />
            <input
              type="text"
              className={style.input}
              value={location} placeholder="Ukraine, Kyiv"
              onChange={changeLocation}
            />
          </span>
        </div>
      </div>

      <div>
        <div className={style.labelFilters}>Filters</div>
        <div className={style.sectionFilters}>
          <FilterList
            title="Vehicle equipment"
            items={equipmentsList}
            multiple
            value={filters}
            setValue={setFilters}
          />

          <FilterList title="Vehicle type" items={vehicleTypes} value={type}  setValue={setType}/>
        </div>
      </div>

      <Button onClickBtn={onSearch}>Search</Button>
    </div>
  );
}

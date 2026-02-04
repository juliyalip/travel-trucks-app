import { useState } from "react";
import FilterList from "../FiltersList/FiltersList";
import { equipmentsList, vehicleTypes } from "../../helpers/mapper";
import Button from "../Button/Button";
import style from "./FiltersSection.module.css";

export default function FiltersSection() {
  const [location, setLocation] = useState("Ukraine, Kyiv");
  const [filters, setFilters] = useState([]);
  const [type, setType] =useState(null)

  const onChange = (e) => {
    setLocation(e.target.value);
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
              value={location}
              onChange={onChange}
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

      <Button>Search</Button>
    </div>
  );
}

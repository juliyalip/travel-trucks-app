import { useState } from "react";
import FilterList from "../FiltersList/FiltersList";
import { equipmentsList, vehicleTypes } from "../../helpers/mapper";
import style from "./FiltersSection.module.css";

export default function FiltersSection() {

  const [location, setLocation] = useState('')

  const onChange = e=>{
    setLocation(e.target.value)
  }
  return (
    <div className={style.container}>
      <div className={style.meta}>
        <label htmlFor="location" className={style.label}>
          Location
        </label>
        <input type="text" className={style.input} value={location} onChange={onChange}/>
      </div>

      <div>
        <div className={style.labelFilters}>Filters</div>
        <div className={style.sectionFilters}>
          <FilterList title="Vehicle equipment" items={equipmentsList} />

          <FilterList title="Vehicle type" items={vehicleTypes} />
        </div>
      </div>
    </div>
  );
}

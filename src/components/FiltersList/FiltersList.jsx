import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { useState } from "react";
import style from './FiltersList.module.css'

export default function FilterList({title,  items }) {
  const [filters, setFilters] = useState([]);

  const handleFilter = (event, newValue) => {
    setFilters(newValue);
  };
  return (
    <div className={style.filterSection}>
           <p className={style.title}>{title}</p>
      <ToggleButtonGroup className={style.list}
        value={filters}
        onChange={handleFilter}
        aria-label="filters"
      >
        {items.map(({ label, icon }) => (
          <ToggleButton value={label} key={label} className={style.item}>
            {" "}
            <i className={`bi ${icon}`} aria-hidden="true" />
            {label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}

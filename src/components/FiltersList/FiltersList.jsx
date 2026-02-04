import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

import style from './FiltersList.module.css'

export default function FilterList({title,  items, multiple = false, value, setValue }) {
 

  const handleFilter = (event, newValue) => {
    if(!multiple && newValue === null) return

    setValue(newValue);
  };
  return (
    <div className={style.filterSection}>
           <p className={style.title}>{title}</p>
      <ToggleButtonGroup className={style.list}
        value={value} exclusive={!multiple}
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

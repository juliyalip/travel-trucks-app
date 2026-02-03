import { Mapper } from '../../helpers/mapper';
import style from './EquipmentList.module.css'


export default function EquipmentList({ equipments }) {
  const items = Object.entries(equipments)
    .map(([key, value]) => {
      if (!value) return null;

      const config = Mapper[key];
      if (!config) return null;

      if (config.values) {
        const label = config.values[value];
        if (!label) return null;
        return { label, icon: config.icon };
      }
      if(config.label){
        return {label: config.label, icon: config.icon}
      }
      return null
    })
    .filter(Boolean);

  return (
    <ul className={style.list}>
      {items.map(({label, icon}) => (
        <li key={label} className={style.item}>

            <i className={`bi ${icon}`} aria-hidden="true"/>
            {label}</li>
      ))}
    </ul>
  );
}

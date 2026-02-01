import style from './EquipmentList.module.css'

const Mapper = {
  transmission: {
    values: {
      automatic: "Automatic",
      manual: "Manual",
    },
    icon: "bi-diagram-3",
  },
  engine: {
    values: {
      diesel: "Diesel",
      petrol: "Petrol",
      hybrid: "Hybrid",
    },
    icon: "bi-fuel-pump",
  },
  kitchen: {
    label: "Kitchen",
    icon: "bi-cup-hot",
  },
  ac: {
    label: "AC",
    icon: "bi-wind",
  },
};

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

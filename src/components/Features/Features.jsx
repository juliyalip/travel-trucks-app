import { useSelector } from "react-redux";
import { selectTruckDetails } from "../../redux/selectors";
import EquipmentList from "../EquipmentList/EquipmentList";
import Modal from '../Modal/Modal'
import style from './Features.module.css'

export default function Features() {
  const { item } = useSelector(selectTruckDetails);

  if (!item) return null;
  const {
    kitchen,
    transmission,
    engine,
    ac,
    length,
    width,
    height,
    tank,
    consumption,
    form,
  } = item;

  const details = [
    { label: "From", value: form },
    { label: "Length", value: length },
    { label: "Width", value: width },
    { label: "Heigth", value: height },
    { label: "Tank", value: tank },
    { label: "Consumption", value: consumption },
  ];

  return (<div className={style.container}>
    <div className={style.section}>
      <EquipmentList equipments={{  transmission, engine, kitchen, ac }} />
      <p className={style.title}>Vehicle details</p>
  
      <ul className={style.detailsList} >
        {details.map(({ label, value }) => (
          <li key={label} className={style.row}>
            <span>{label}</span>
            <span> {value}</span>
          </li>
        ))}
      </ul>
    </div>

    <Modal />
    </div>
  );
}

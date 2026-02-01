import { useSelector } from "react-redux";
import { selectTrucksItems } from "../../redux/selectors";
import TruckItem from "../TruckItem/TruckItem";
import style from './TrucksList.module.css'

export default function TrucksList() {
  const { items } = useSelector(selectTrucksItems);

  return (
    <ul className={style.list}>
      {items.map((item) => (
        <TruckItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

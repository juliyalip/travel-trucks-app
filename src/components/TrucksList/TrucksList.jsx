import { useSelector } from "react-redux";
import { selectTrucksItems } from "../../redux/selectors";
import TruckItem from "../TruckItem/TruckItem";

export default function TrucksList() {
  const { items } = useSelector(selectTrucksItems);

  return (
    <ul>
      {items.map((item) => (
        <TruckItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

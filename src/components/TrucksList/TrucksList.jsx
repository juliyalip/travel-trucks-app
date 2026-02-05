import { useSelector, useDispatch } from "react-redux";
import {
  selectVisibleTrucks,
  selectHasMoreTrucks,
} from "../../redux/selectors";
import { loadMore } from "../../redux/trucksSlice";
import Button from "../Button/Button";
import TruckItem from "../TruckItem/TruckItem";
import style from "./TrucksList.module.css";

export default function TrucksList() {
  const dispatch = useDispatch();
  const items = useSelector(selectVisibleTrucks);

  const hasMore = useSelector(selectHasMoreTrucks);
  const handleLoadMore = () => {
    dispatch(loadMore());
  };
  return (
    <div>
      <ul className={style.list}>
        {items.map((item) => (
          <TruckItem key={item.id} {...item} />
        ))}
      </ul>
      {hasMore && <Button onClickBtn={handleLoadMore} baseColor> Load more</Button>}
    </div>
  );
}

import { useSelector } from "react-redux";
import { selectTruckDetails } from "../../redux/selectors";
import Modal from '../Modal/Modal'
import style from "./Reviews.module.css";

export default function Reviews() {
      const { item: {reviews}} = useSelector(selectTruckDetails);
  return (
    <div className={style.container}>
    <ul>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
        <li key={reviewer_name}>
            <div className={style.titleSection}>
          <div className={style.avatar}></div>
          <div>
            <p>{reviewer_name}</p>
            <p>{reviewer_rating}</p>
          </div>
          </div>
          <p>{comment}</p>
        </li>
      ))}
    </ul>
    <Modal />
    </div>
  );
}

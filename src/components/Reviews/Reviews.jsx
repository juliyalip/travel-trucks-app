import { useSelector } from "react-redux";
import { selectTruckDetails } from "../../redux/selectors";
import Modal from '../Modal/Modal'
import RatingStar from "../RaitingStar/RaitingStar"
import style from "./Reviews.module.css";

export default function Reviews() {
      const { item: {reviews}} = useSelector(selectTruckDetails);

      if(reviews.length === 0){
        return <p>We don't have any reviews yet!</p>
      }
  return (
    <>
    <ul className={style.list}>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
        <li key={reviewer_name}>
            <div className={style.titleSection}>
          <div className={style.avatar}>{reviewer_name[0]}</div>
          <div>
            <p className={style.name}>{reviewer_name}</p>
           <RatingStar countStar={reviewer_rating}/>
          </div>
          </div>
          <p className={style.comment}>{comment}</p>
        </li>
      ))}
    </ul>
    <Modal />
    </>
  );
}

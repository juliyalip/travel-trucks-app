import { useDispatch, useSelector } from "react-redux";
import { useParams , NavLink, Outlet} from "react-router-dom";
import { useEffect } from "react";
import clsx from "clsx";
import { selectTruckDetails } from "../../redux/selectors";
import { fetchTruckById } from "../../redux/trucksOperations";
import Container from '../../components/Container/Container'
import ImageList from "../../components/ImageList/ImageList";
import Loader from "../../components/Loader/Loader";
import style from "./TruckDetailsPage.module.css";

export default function TruckDetailPage() {
  const { truckId } = useParams();
  const dispatch = useDispatch();

  const { isLoading, item, error } = useSelector(selectTruckDetails);

  useEffect(() => {
    dispatch(fetchTruckById(truckId));
  }, [dispatch, truckId]);

  if (isLoading) return   <Loader/>;
  if (error) return <p>Something went wrong. Please try again.</p>;
  if (!item) return null;

const buildLinkClass = ({ isActive }) => {
  return clsx(style['base'], isActive && style['active']);
};
  const { name, gallery, reviews, description, location, price, rating } = item;
  const priceNumber = Number(price) || 0;
  const reviewsCount = reviews?.length ?? 0;
  return (
    <div>
    <Container>
   
      <div className={style.header}>
        <p className={style.title}>{name}</p>

        <div className={style.meta}>
          <div>
            <i className="bi bi-star" />
            <span>
              {rating} ({reviewsCount} Reviews)
            </span>
          </div>
          <div>
            <i className="bi bi-map" />
            <span> {location}</span>
          </div>
        
        </div>
  <span className={style.title}>&#8364;{priceNumber.toFixed(2)}</span>

      </div>
      <ImageList gallery={gallery}/>
      <p className={style.description}>{description}</p>

      <ul className={style.detailsNav}>
        <li className={style.detailsNavItem}>
          <NavLink to="features" className={buildLinkClass}>Features</NavLink>

        </li>
        <li className={style.detailsNavItem}>
          <NavLink to="reviews" className={buildLinkClass}>Reviews</NavLink>
        </li>

      </ul>
      <div className={style.containerMenu}>
      <Outlet />
      </div>
    </Container>
    </div>
  );
}

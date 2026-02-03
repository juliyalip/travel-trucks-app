import EquipmentList from "../EquipmentList/EquipmentList";
import NavButton from "../NavButton/NavButton";
import { getSpoiler } from "../../helpers/getSpoiler";
import style from "./TruckItem.module.css";

export default function TruckItem({
  name,
  description,
  id,
  gallery,
  AC: ac,
  location,
  price,
  rating,
  kitchen,
  transmission,

  engine,
  reviews,
}) {
  const url = gallery?.[0]?.thumb;
  const reviewsCount = reviews?.length ?? 0;
  const priceNumber = Number(price) || 0;
  const spoilerText = getSpoiler(description);
  return (
    <li className={style.card}>
      <div className={style.container}>
        <div className={style.wrapperImg}>
          <img src={url} alt={name} loading="lazy" className={style.image} />
        </div>

        <div className={style.mainContent}>


          <div className={style.content}>
            <div>
              <div className={style.header}>
                <p className={style.title}>{name}</p>

                <div className={style.sectionPrice}>
                  <span >
                    &#8364;{priceNumber.toFixed(2)}
                  </span>
                  <button
                    type="button"
                    aria-label="Add to favorites"
                    className={style.favoriteBtn}
                  >
                    <i className="bi bi-heart" />
                  </button>
                </div>
              </div>

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
            </div>

            <p className={style.description}>{spoilerText}</p>

            <EquipmentList equipments={{  transmission, engine, kitchen, ac  }} />
          </div>
           <div className={style.btnWrap}>
          <NavButton path={`/catalog/${id}`}>Show more</NavButton>
        </div>
        </div>
       



      </div>
    </li>
  );
}

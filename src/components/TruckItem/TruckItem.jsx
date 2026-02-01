import EquipmentList from "../EquipmentList/EquipmentList";
import Button from "../Button/Button";
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
  const priceNumber = Number(price) ||0 
  return (
    <li className={style.card}>
      <div className={style.container}>
        <div className={style.wrapperImg}>
          <img src={url} alt={name} loading="lazy" className={style.image} />
        </div>

        <div className={style.content}>
          <div className={style.header}>
            <p className={style.title}>{name}</p>

            <div className={style.sectionPrice}>
              <span className={style.title}>&#8364;{priceNumber.toFixed(2)}</span>
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

          <p className={style.description}>{description}</p>

          <EquipmentList equipments={{ kitchen, transmission, engine, ac }} />

          <div>
            <Button>Show more</Button>
          </div>
        </div>
      </div>
    </li>
  );
}

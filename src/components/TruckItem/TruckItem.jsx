export default function TruckItem({
  name,
  description,
  id,
  AC: ac,
  location,
  price,
  rating,
  kitchen,
  engine,
}) {
  return (
    <li>
      <Link to={`/catalog/${id}`}></Link>
    </li>
  );
}

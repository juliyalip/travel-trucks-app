import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTrucks } from "../../redux/trucksOperations";
import {
  selectTrucksItems,
  selectTrucksError,
  selectTrucksLoading,
} from "../../redux/selectors";
import TrucksList from "../../components/TrucksList/TrucksList";
import FiltersSection from "../../components/FiltersSection/FiltersSection";
import Container from "@mui/material/Container";
import Loader from "../../components/Loader/Loader";
import style from './CatalogPage.module.css'

export default function CatalogPage() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectTrucksLoading);
  const {total = 0, items = []} = useSelector(selectTrucksItems) || {};
  const error = useSelector(selectTrucksError);

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

const isTrucks = !isLoading && !error && items.length > 0 && total > 0

  return (
    <Container>
    <div className={style.container}>
 
      <FiltersSection />
           {isLoading && <Loader /> }
    {isTrucks && <TrucksList />}
      {error && <p>Something went wrong. Please try again.</p>}
    </div>
    </Container>
  );
}

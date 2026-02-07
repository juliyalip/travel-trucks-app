import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./Layout/Layout";

const Home = lazy(() => import("../pages/Home/Home"))
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"))
const TruckDetailPage = lazy(() => import("../pages/TruckDeteilsPage/TruckDetailsPage"))
const Features = lazy(() => import("./Features/Features"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:truckId" element={<TruckDetailPage />}>
            <Route path="features" element={<Features />} />

            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

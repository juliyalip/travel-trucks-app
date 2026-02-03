import {Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout'
import Home from '../pages/Home/Home';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import TruckDetailPage  from '../pages/TruckDeteilsPage/TruckDetailsPage';
import Features from './Features/Features';

function App() {
  return (
 <Routes>
<Route path="/" element={<Layout/>} >
<Route index element={<Home />} />
<Route path="/catalog" element={<CatalogPage />} />
<Route path="/catalog/:truckId" element={<TruckDetailPage />}>
<Route path="features" element={<Features/>} />
</Route>

</Route>
 </Routes>
  )
}

export default App

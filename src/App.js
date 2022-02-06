import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>

      <BrowserRouter>
        <AuthProvider>
          <Header></Header>
          <Routes>
            <Route index element={<Shop />} />
            <Route path="/shop" element={<Shop />} />

            <Route
              path="/review"
              element={<PrivateRoute>
                <Review />
              </PrivateRoute>}
            />

            <Route path="/inventory" element={<Inventory />} />
            <Route path="/product/:productKey" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>




    </div>
  );
}

// font-family: 'Oswald', sans-serif;
// font-family: 'Roboto Slab', serif;
// font-family: 'Work Sans', sans-serif;

export default App;

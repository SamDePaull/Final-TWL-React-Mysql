import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import NavBarComponent from "./components/NavBarComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import Footer from "./components/Footer";
import About from "./components/About";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              token ? (
                <>
                  <NavBarComponent />
                  <JumbotronComponent />
                  <ProductList />
                </>
              ) : (
                <Navigate to="/login" replace={true} />
              )
            }
          />
          <Route
            path="/add"
            element={
              token ? (
                <>
                  <JumbotronComponent />
                  <AddProduct />
                </>
              ) : (
                <Navigate to="/login" replace={true} />
              )
            }
          />
          <Route
            path="/edit/:id"
            element={
              token ? (
                <>
                  <JumbotronComponent />
                  <EditProduct />
                </>
              ) : (
                <Navigate to="/login" replace={true} />
              )
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={
              token ? (
                <Navigate to="/" replace={true} />
              ) : (
                <LoginPage />
              )
            }
          />
          <Route
            path="/register"
            element={
              token ? (
                <Navigate to="/" replace={true} />
              ) : (
                <RegisterPage />
              )
            }
          />
        </Routes>
        {token && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;

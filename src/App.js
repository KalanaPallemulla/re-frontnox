import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Client/pages/Home";
import Rent from "./Client/pages/Rent";
import Single from "./Client/pages/Single";
import Sell from "./Client/pages/Sell";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/add-component/:key=:id" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

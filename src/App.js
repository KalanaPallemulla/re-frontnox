import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Client/pages/Home";
import Rent from "./Client/pages/Rent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Rent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

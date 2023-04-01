import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

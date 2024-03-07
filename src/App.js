import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/UI/Header/Header";
import Basket from "./pages/Basket";
import NotFound from "./pages/NotFound";
import "./styles/style.css";
import Comparison from "./pages/Сomparison";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

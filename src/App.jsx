import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { LegoSetDetails } from "./pages/LegoSetDetails";


export const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legoSets/:setId" element={<LegoSetDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

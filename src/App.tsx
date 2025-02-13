import { BrowserRouter, Routes, Route } from "react-router-dom";
import PointOfSales from "./features/point-of-sales/point-of-sales";
import "./index.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PointOfSales />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./features/point-of-sales/layout/layout";
import PointOfSales from "./features/point-of-sales/point-of-sales";
import "./index.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<PointOfSales />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

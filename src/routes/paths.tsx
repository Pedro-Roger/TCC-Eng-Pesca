import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "../layout/dashBoard";
import Homepage from "../pages/homepage";
import PlanejamentoCamarao from "../pages/planejamentocamarao";
import PlanejamentoTilapia from "../pages/planejamentoTilapia";


const Paths = () => {
    return ( 
        <BrowserRouter>
            <Routes>
               
                <Route path="/" element={<DashBoard />}>
                    <Route index element={<Homepage />} />
                    <Route path="PlanejamentoCamarao" element={<PlanejamentoCamarao />} />
                    <Route path="PlanejamentoTilapia" element={<PlanejamentoTilapia />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;

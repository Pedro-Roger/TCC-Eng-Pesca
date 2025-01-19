import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "../layout/dashBoard";
import Homepage from "../pages/homepage";

import PlanejamentoTilapia from "../pages/planejamentoTilapia";
import Planejamentocamarao from "../pages/planejamentocamarao";




const Paths = () => {
    return ( 
        <BrowserRouter>
            <Routes>
               
                <Route path="/" element={<DashBoard />}>
                    <Route index element={<Homepage />} />
                    <Route path="PlanejamentoCamarao" element={<Planejamentocamarao />} />
                    <Route path="PlanejamentoTilapia" element={<PlanejamentoTilapia />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;

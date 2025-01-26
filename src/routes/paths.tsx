import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "../layout/dashBoard";
import Homepage from "../pages/homepage";

import PlanejamentoTilapia from "../pages/planejamentoTilapia";
import PlanejamentoCamarao from "../pages/planejamentoCamarao";
import ListaProjetos from "../pages/listaProjetos";




const Paths = () => {
    return ( 
        <BrowserRouter>
            <Routes>
               
                <Route path="/" element={<DashBoard />}>
                    <Route index element={<Homepage />} />
                    <Route path="PlanejamentoCamarao" element={<PlanejamentoCamarao/>} />
                    <Route path="PlanejamentoTilapia" element={<PlanejamentoTilapia />} />
                    <Route path="ListaProjetos" element={<ListaProjetos/>} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;

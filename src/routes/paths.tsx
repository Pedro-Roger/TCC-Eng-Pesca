import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "../layout/dashBoard";
import Planejamento from "../pages/planejamento";


const Paths = () => {
    return ( 
        <BrowserRouter>
            <Routes>
               
                <Route path="/" element={<DashBoard />}>
                    
                    <Route index element={<Planejamento />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;

import { Route, Routes } from "react-router-dom"
import  HomePage from "../Components/Homepage"
import Singlepage from "../Components/Singlepage"


const CustomeRoutes = () =>{
    return (
        <Routes>
            <Route  path="/" element={<HomePage />} />
            <Route  path="/Single/:id" element={<Singlepage />} />
        </Routes>
    )
}

export default CustomeRoutes;
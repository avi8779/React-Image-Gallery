import { Route, Routes } from "react-router-dom"
import  HomePage from "../Components/Homepage"
import  { Singlepage }  from "../Components/Singlepage"


export const CustomeRoutes = () =>{
    return (
        <Routes>
            <Route  path="/" element={<HomePage />} />
            <Route  path="/:id" element={<Singlepage />} />
        </Routes>
    )
}
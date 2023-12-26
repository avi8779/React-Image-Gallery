import React from "react";
import { useNavigate } from "react-router-dom";

export const ImageCard = ({ ImageUrl, id}) =>{
    const Navigate = useNavigate();

    const redirectToPage = () =>{
        Navigate(`/${id}`)
    }

    return(
        <div>
            <img src={ImageUrl} onClick={redirectToPage} />
        </div>
    )
}
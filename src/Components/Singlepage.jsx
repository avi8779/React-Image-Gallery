import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


export const Singlepage = () =>{
    const [photo, setPhoto] = useState()
    const {id} = useParams();

    const getData = async () =>{
        const resp = await fetch(`https://api.slingacademy.com/v1/sample-data/${id}`);
        const data = await resp.json();
        setPhoto(data.photo);

    }

    useEffect(() =>{
        getData()
    }, [])

    return (
        <div id="singlePage">
            <img src={photo.url} />
            <div>
                <h1>{photo.title}</h1>
                <p>{photo.description}</p>
            </div>
        </div>
    )
}
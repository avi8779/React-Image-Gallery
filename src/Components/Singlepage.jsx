import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../Style/Singlephoto.css';

const SinglePage = () => {
    const [photo, setPhoto] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    const getData = async () => {
        try {
            const response = await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await response.json();
            setPhoto(data.photo);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Error fetching data. Please try again later.");
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div id="singlePage">
            {photo && (
                <div className="Single">
                    <img src={photo.url} alt={photo.title} />
                    <div>
                        <h1 className="tittle">{photo.title}</h1>
                        <p className="description">{photo.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SinglePage;

import { Link } from 'react-router-dom';
import '../Style/HomePage.css';
import { useState, useEffect } from "react";

const HomePage = () => {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await response.json();
                setPhotos(data.photos);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='Card'>
            
            {
                isLoading ? ("Loading.....") :
                    (<div className='Gallery'>
                        {photos.map((photo) => (
                            <Link to={`/Single/${photo.id}`} key={photo.id}>
                                <div className="image-box">
                                    <div>
                                        <img className='image' src={photo.url} alt={photo.title} />
                                        <p className='text'>{photo.title}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>)
            }
        </div>
    );
};

export default HomePage;

// import './Style/Home.css';
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
        <h1>Photo Gallery</h1>
        {
            isLoading ? ("Lodading.....") :      
            (<div className='Gallery'>
            {photos.map((photo) => (
                <div className="image-box" >
                    <img className='image' src={photo.url} key={photo.id} />
                    <p>{photo.title}</p>
                </div>
                
            ))}
            </div>)
        }
        
      </div>
    );
  };

  export default HomePage
import { useState, useEffect } from "react";
import axios from "axios";


const [Gallery, setGallery] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [ImageUrl, setImageUrl] = useState(
    "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"
  );
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  async function downloadImageGalleryList() {
    setIsLoading(true);

    try {
      const response = await axios.get(ImageUrl);
      const ImageGalleryResults = response.data.photos;

      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);

      const ImageGalleryResultPromise = ImageGalleryResults.map((photos) =>
        axios.get(photos.url)
      );

      const ImageGalleryData = await axios.all(ImageGalleryResultPromise);

      const GalleryListResult = ImageGalleryData.map((galleryData) => {
        const data = galleryData.data;
        return {
          id: data.id,
          name: data.name,
          image: data.image,
        };
      });

      setGallery(GalleryListResult);
    //   setIsLoading(false);
    } catch (error) {
      console.error("Error fetching image gallery:", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    downloadImageGalleryList();
  }, [ImageUrl]);
  return (
    <div>
      {IsLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {Gallery.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
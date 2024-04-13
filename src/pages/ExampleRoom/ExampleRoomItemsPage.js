import ImageGallery from "react-image-gallery";
import "./ExampleRoomItemsPage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import sample_image1 from "../../images/sample_image1.jpeg";
import sample_image2 from "../../images/sample_image2.JPG";
import sample_image3 from "../../images/sample_image3.jpeg";
import sample_image4 from "../../images/sample_image4.JPG";
import sample_image5 from "../../images/sample_image5.jpeg";
import sample_image6 from "../../images/sample_image6.jpeg";
import sample_image7 from "../../images/sample_image7.JPG";
import sample_image8 from "../../images/sample_image8.jpeg";
import sample_video from "../../images/sample_video.mp4"


function ExampleRoomItemsPage() {
  const [imageItems, setImageItems] = useState([]);
  const { original, thumbnail } = imageItems;
  const sample_images = [sample_image1, sample_image2, sample_image3, sample_image4, sample_image5, sample_image6, sample_image7, sample_image8];
  const loaded_images = []

  useEffect(() => {
      for (const image of sample_images){
        loaded_images.push({original: image, thumbnail: image,});
      }
      setImageItems(loaded_images);

  },[]);

  return (
    <>
      <div className="items-bg"></div>
      <a className="back-button" href="/ExampleRoom">
        {`Back`}
      </a>
      <ImageGallery items={imageItems}  />
    </>
  );
}

export default ExampleRoomItemsPage;

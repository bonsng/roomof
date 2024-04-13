import ImageGallery from "react-image-gallery";
import "./ExampleRoomItemsPage.css";
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
import {useNavigate} from "react-router-dom";


function ExampleRoomItemsPage() {
  const navigate = useNavigate();

  const loaded_images = [{original: sample_image1, thumbnail:sample_image1},{original: sample_image2, thumbnail:sample_image2},
      {original: sample_image3, thumbnail:sample_image3},{original: sample_image4, thumbnail:sample_image4},{original: sample_image5, thumbnail:sample_image5},
      {original: sample_image6, thumbnail:sample_image6},{original: sample_image7, thumbnail:sample_image7},{original: sample_image8, thumbnail:sample_image8}];


  return (
    <>
      <div className="items-bg"></div>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="back-button" onClick={() => navigate({pathname:"/exampleRoom"})}>
        {`Back`}
      </a>
      <ImageGallery items={loaded_images}  />
    </>
  );
}

export default ExampleRoomItemsPage;

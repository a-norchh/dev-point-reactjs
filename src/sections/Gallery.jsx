import React, { useState } from "react";
import { gallery } from "../constants/data";
import images from "../constants/images";
import Modal from "../components/Modal";

const Gallery = () => {
  const [modalToggle, setModdleToggle] = useState(false);
  const [imageSelected, setImageSelected] = useState("");

  const selectedImageHandler = (src) => {
    document.body.style.overflow = "hidden";
    setImageSelected(src);
    setModdleToggle(true);
  };

  return (
    <>
      <section id="gallery">
        {modalToggle && (
          <Modal
            image={imageSelected}
            onCloseHandler={() => setModdleToggle(false)}
          />
        )}
        <div className="gallery-container">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="item-contain"
              onClick={() => selectedImageHandler(item.img)}
            >
              <img src={item.img} alt="product item" />
              <div className="item-overlay">
                <img src={images.icon_eye} alt="eye icon" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;

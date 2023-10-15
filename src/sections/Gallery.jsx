import React, { useState } from "react";
import { gallery } from "../constants/data";
import images from "../constants/images";
import Modal from "../components/Modal";
import { motion } from "framer-motion";

const Gallery = () => {
  const [modalToggle, setModdleToggle] = useState(false);
  const [imageSelected, setImageSelected] = useState("");

  const selectedImageHandler = (src) => {
    document.body.style.overflow = "hidden";
    setImageSelected(src);
    setModdleToggle(true);
  };

  const staggerAnim = {
    initial: {
      opacity: 0,
      y: 50,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 * index,
      },
    }),
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
            <motion.div
              key={index}
              className="item-contain"
              onClick={() => selectedImageHandler(item.img)}
              variants={staggerAnim}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <img src={item.img} alt="product item" />
              <div className="item-overlay">
                <img src={images.icon_eye} alt="eye icon" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;

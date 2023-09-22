import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import parse from "html-react-parser";
const BeautifulModal = ({ product, closeModal, isModalOpen }) => {
  const absolute = process.env.NEXT_PUBLIC_ABSOLUTE_URL;
  const file_url = process.env.NEXT_PUBLIC_STORAGE_URL;
  const modalRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const mainImage = `${product === null ? null : product.photo}`;

  const images = [
    `${file_url}/${mainImage}`,
    // "assets/images/product/large-size/3.jpg",
    // "assets/images/product/large-size/4.jpg",
    // "assets/images/product/large-size/5.jpg",
  ];

  const handleOverlayClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };

  const productUrl = `${absolute}/products/${
    product === null ? null : product.slug
  }`;
  return (
    <div>
      <CSSTransition
        in={isModalOpen}
        timeout={500}
        classNames="modal"
        unmountOnExit
      >
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            onClick={handleOverlayClick}
            className="fixed inset-0 bg-black bg-opacity-60 z-40"
          ></div>{" "}
          {/* Dark overlay */}
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-lg p-8 w-3/4 h-3/4 z-50 modal-drop flex"
          >
            <div className="flex-1 flex flex-col justify-center items-center mr-8">
              <div className="relative overflow-hidden">
                <img
                  src={images[selectedImage]}
                  alt={`Image ${selectedImage}`}
                  className="max-w-full transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="mt-4 flex gap-4">
                {/* Thumbnails */}
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index}`}
                    className={`h-16 w-16 cursor-pointer ${
                      selectedImage === index && "border-2 border-blue-500"
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                  />
                ))}
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4 medium-title">
                {product === null ? null : product.title}
              </h2>
              <p className="text-gray-700">
                {product === null ? null : parse(product.summary)}
              </p>

              <div>
                <ul>
                  <li className="social-media-line-height">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${productUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook"></i> Share on Facebook
                    </a>
                  </li>
                  <li className="social-media-line-height">
                    <a
                      href={`https://twitter.com/intent/tweet?url=${productUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter"></i> Share on Twitter
                    </a>
                  </li>
                  <li className="social-media-line-height">
                    <a
                      href={`https://www.instagram.com/sharer.php?u=${productUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i> Share on Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default BeautifulModal;

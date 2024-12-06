import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import "./ImageComponent.css"; // Custom styles
import { black } from "../theme/Themes";

const ImageWithHoverEffect = ({ images }) => {
  const [show, setShow] = useState(false); // Modal visibility state
  const [currentImage, setCurrentImage] = useState(null); // Current image in the modal
  const [shuffledImages, setShuffledImages] = useState([]); // Shuffled images
  const [showWave, setShowWave] = useState(false); // Wave animation visibility

  // Shuffle the images array
  const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled;
  };

  // Shuffle images on component mount or when images change
  useEffect(() => {
    setShuffledImages(shuffleArray(images)); // Shuffle on refresh
  }, [images]);

  // Handle modal open and close
  const handleShow = (image) => {
    setCurrentImage(image);

    // Check if the alt text matches "Image 1"
    if (image.alt === "Image 1") {
      toast.success("🎉 You win!", {
        position: "top-center",
        style: {
          background: "#4caf50",
          color: "white",
        },
      });

      // Trigger wave animation
      setShowWave(true);

      // Remove wave animation after 3 seconds
      setTimeout(() => setShowWave(false), 3000);
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    }

    setShow(true);

  };

  const handleClose = () => setShow(false);

  // Split images into chunks of 6
  const rows = [];
  for (let i = 0; i < shuffledImages.length; i += 6) {
    rows.push(shuffledImages.slice(i, i + 5));
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Toaster /> {/* Toast notification container */}

      {/* Wave Animation */}
      {showWave && (
        <div className="wave-animation-container">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      )}

      {/* Images */}
      <div className="container mb-6">
        {rows.map((row, rowIndex) => (
          <div
            className="row justify-content-center mb-5"
            key={rowIndex}
            style={{ gap: "1rem" }}
          >
            {row.map((image, index) => (
              <div
                className="col-lg-2 col-md-2 col-sm-4 col-6 d-flex justify-content-center"
                key={index}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="img-fluid rounded hover-shadow"
                  style={{ maxWidth: "150px", cursor: "pointer" }}
                  onClick={() => handleShow(image)} // Handle click
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: black }}>{currentImage?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <div
            className="image-alt-container"
            style={{
              maxWidth: "100%",
              textAlign: "center",
              color: "black",
              padding: "10px",
              backgroundColor: "#f5f5f5",
              borderRadius: "5px",
            }}
          >
            {currentImage?.description}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ImageWithHoverEffect;

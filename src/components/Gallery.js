import React, { useState } from "react";
import "./Gallery.css";

const images = [
  "https://images.unsplash.com/photo-1613389760701-f4540f5ae1f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w2MjY1Mjc5NXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1744294337417-d6c49912c43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw2MjY1Mjc5NXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1726351543722-b35eca8f5e90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8NjI2NTI3OTV8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1716299304342-7eda770e3e65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8NjI2NTI3OTV8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1743041095820-3e09632071e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8NjI2NTI3OTV8fGVufDB8fHx8fA%3D%3D"
];

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setSelectedIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="gallery-container">
      <div className="main-image">
        <img
          src={images[selectedIndex]}
          alt={`Imazhi ${selectedIndex + 1}`}
          className="fade-in"
        />
        <div className="controls">
          <button onClick={handlePrevious}>⬅ Previous</button>
          <button onClick={handleNext}>Next ➡</button>
        </div>
      </div>
      <div className="thumbnails">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={selectedIndex === index ? "selected" : ""}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;

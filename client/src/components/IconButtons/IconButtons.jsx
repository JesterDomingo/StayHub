import React from 'react';
import './IconButtons.scss'; 

const imagePaths = {
  treehouse: './treehouse.png',
  lakefront: './mountain.png',
  cabins: './cabin.png',
  castles: '/castle.png', 
  downtown: './downtown.png',
  amazingviews: './view.png',
  // Add more image names and paths as needed
};

const IconButtons = () => {
  // Function to generate the image element based on the image name
  const getImageElement = (imageName) => {
    const imagePath = imagePaths[imageName.toLowerCase()];
    if (imagePath) {
      return <img src={imagePath} alt={`${imageName} Icon`} />;
    } else {
      return null; 
    }
  };

  return (
    <div className="icon-buttons">
      <button className="icon-button">
        <div className="icon-button-content">
          {getImageElement('TreeHouse')}
          <div className="button-label">Tree House</div>
        </div>
      </button>
      <button className="icon-button">
        <div className="icon-button-content">
          {getImageElement('Lakefront')}
          <div className="button-label">Lakefront</div>
        </div>
      </button>
      <button className="icon-button">
        <div className="icon-button-content">
          {getImageElement('Cabins')}
          <div className="button-label">Cabins</div>
        </div>
      </button>
      <button className="icon-button">
        <div className="icon-button-content">
          {getImageElement('Castles')}
          <div className="button-label">Castles</div>
        </div>
      </button>
      <button className="icon-button">
        <div className="icon-button-content">
          {getImageElement('Downtown')}
          <div className="button-label">Downtown</div>
        </div>
      </button>
      <button className="icon-button">
        <div className="icon-button-content">
          {getImageElement('AmazingViews')}
          <div className="button-label">Amazing Views</div>
        </div>
      </button>
    </div>
  );
};

export default IconButtons;
import React from 'react';
import './IconButtons.scss'; // Import the SCSS file for styling

// Define a mapping of image names to their relative paths
const imagePaths = {
  filters: 'path_to_filters_image',
  lakefront: './Public/mountain_11951267.png', // Relative path to the image file
  cabins: 'path_to_cabins_image',
  castles: 'path_to_castles_image', // Add image paths for new buttons
  beachfront: 'path_to_beachfront_image',
  amazingviews: 'path_to_amazingviews_image',
  // Add more image names and paths as needed
};

const IconButtons = () => {
  // Function to generate the image element based on the image name
  const getImageElement = (imageName) => {
    const imagePath = imagePaths[imageName.toLowerCase()];
    if (imagePath) {
      return <img src={imagePath} alt={`${imageName} Icon`} />;
    } else {
      return null; // Return null if image path is not found
    }
  };

  return (
    <div className="icon-buttons">
      <button className="icon-button">
        <div className="icon-button-content">
          {getImageElement('Filters')}
          <div className="button-label">Filters</div>
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
          {getImageElement('Beachfront')}
          <div className="button-label">Beachfront</div>
        </div>
      </button>
      <button className="icon-button">
        <div className="icon-button-content">
          {getImageElement('AmazingViews')}
          <div className="button-label">Amazing Views</div>
        </div>
      </button>
      {/* Add more buttons with image names and labels */}
    </div>
  );
};

export default IconButtons;

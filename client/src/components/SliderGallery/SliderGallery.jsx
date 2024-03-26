import React from "react";
import Slider from "react-slick";

import "./sliderGallery.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderGallery (props) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

      const array = [1, 2, 3, 4, 5, 6, 7]
      return (
        <Slider {...settings}>
          {array.map(item => {
            return (
            <div>
                <img key={item} style={{margin: '0 auto'}} src="/assets/images/test-img.webp"></img>
            </div>
            )
          })}
        </Slider>
      );
    

}
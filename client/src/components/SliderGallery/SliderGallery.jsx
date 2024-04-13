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

      return (
        <Slider {...settings}>
          {props.photos?.map(item => {
            return (
            <div>
                <img key={item} style={{margin: '0 auto'}} src={`../${item}`}></img>
            </div>
            )
          })}
        </Slider>
      );
    

}
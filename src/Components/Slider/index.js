import Slider from "react-slick";
import image1 from "./images&photos/imageSlide1.jpg";
import image2 from "./images&photos/imageSlide2.jpg";
import image3 from "./images&photos/imageSlide3.jpg";
import image4 from "./images&photos/imageSlide4.jpg";
import image5 from "./images&photos/imageSlide5.jpg";
import image6 from "./images&photos/imageSlide6.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

export function Slide() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        autoplaySpeed: 2000,
      };

  return (
    <div id="home" className="slider">
      <div style={{ margin: "30px" }}>
        <Slider {...settings}>
          <div>
            <img
              src={image1}
              alt="image1"
              style={{ width: "100%", height: "50vh" }}
            />
          </div>
          <div>
            <img
              src={image2}
              alt="image2"
              style={{ width: "100%", height: "50vh" }}
            />
          </div>
          <div>
            <img
              src={image3}
              alt="image3"
              style={{ width: "100%", height: "50vh" }}
            />
          </div>
          <div>
            <img
              src={image4}
              alt="image4"
              style={{ width: "100%", height: "50vh" }}
            />
          </div>
          <div>
            <img
              src={image5}
              alt="image5"
              style={{ width: "100%", height: "50vh" }}
            />
          </div>
          <div>
            <img
              src={image6}
              alt="image6"
              style={{ width: "100%", height: "50vh" }}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SingleProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const { productName, content } = useParams();
  console.log(productName, content);

  // Function to log product details

  const images = [
    "https://cdn11.bigcommerce.com/s-7exlzlf13h/images/stencil/960w/products/144/506/Clarett_4Pre-frontelevated-2400-2400__18357.1676372081.png",
    "https://cdn11.bigcommerce.com/s-7exlzlf13h/images/stencil/960w/products/144/506/Clarett_4Pre-frontelevated-2400-2400__18357.1676372081.png",
    "https://cdn11.bigcommerce.com/s-7exlzlf13h/images/stencil/960w/products/144/506/Clarett_4Pre-frontelevated-2400-2400__18357.1676372081.png",
    // Add more image URLs as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="single-product-container">
      <h1 className="text-center">Single Product Page</h1>
      <div className="product-images-carousel">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image} alt={`Product Image ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="product-details">
        <h1>{productName}</h1>
        <div className="ratings">
          <p>
            Reviews: <FontAwesomeIcon icon={["fas", "star"]} />
            <FontAwesomeIcon icon={["fas", "star"]} />
            <FontAwesomeIcon icon={["fas", "star"]} />
            <FontAwesomeIcon icon={["fas", "star"]} />
            <FontAwesomeIcon icon={["fas", "star"]} />
          </p>
        </div>
        <p>Price: $99.99</p>
        <p>
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="features">
          <p>
            <FontAwesomeIcon icon={["fas", "shipping-fast"]} /> Fast delivery
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "truck"]} /> Free delivery
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "shield-alt"]} /> 3-year warranty
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;

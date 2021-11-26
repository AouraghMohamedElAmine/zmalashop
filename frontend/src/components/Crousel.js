import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";
function Crousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [BestProducts, setBestProudcts] = useState();
  useEffect(() => {
    const fetchBestProducts = async () => {
      const { data } = await axios.get("/api/products/best");
      setBestProudcts(data);
    };
    fetchBestProducts();
  }, []);

  return (
    <div style={{ width: "80%", marginInline: "auto" ,height :"auto"}}>
      {BestProducts ? (
        <Carousel
          variant="dark"
          fade
          activeIndex={index}
          onSelect={handleSelect}
        >
          <Carousel.Item interval={2000}>
            <img 
         
              src={BestProducts[0].image}
              alt="First slide"
            />
          
            <Carousel.Caption>
              <h3>{BestProducts[0].name}</h3>
              <p style={{ color: "black" }}>{BestProducts[0].description}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              src={BestProducts[1].image}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>{BestProducts[1].name}</h3>
              <p style={{ color: "black" }}>
                {BestProducts[1].description}
              </p>{" "}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
               src={BestProducts[2].image}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>{BestProducts[2].name}</h3>
              <p style={{ color: "black" }}>
                {BestProducts[2].description}
              </p>{" "}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      ) : (
        "loading"
      )}
      {/* // </div> */}
    </div>
  );
}

export default Crousel;

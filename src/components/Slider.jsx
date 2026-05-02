import { useState, useEffect } from "react";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg"
];

function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img src={images[index]} style={{ width: "100%", height: "400px" }} />
    </div>
  );
}

export default Slider;
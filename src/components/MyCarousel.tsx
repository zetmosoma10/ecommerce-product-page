import { useState } from "react";
import { previewShoesImages, thumbnailShoesImages } from "../contance";
import nextArrow from "../assets/icon-next.svg";
import previousArrow from "../assets/icon-previous.svg";

const MyCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const nextSelectedImage = () => {
    if (selectedImage === thumbnailShoesImages.length - 1) {
      setSelectedImage(0);
    } else {
      setSelectedImage(selectedImage + 1);
    }
  };

  const previousSelectedImage = () => {
    if (selectedImage === 0) {
      setSelectedImage(thumbnailShoesImages.length - 1);
    } else {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <div>
      <div className="relative rounded-2xl overflow-hidden max-[920px]:rounded-none ">
        <img
          className="object-cover"
          src={previewShoesImages[selectedImage]}
          alt=""
        />
        <div
          onClick={previousSelectedImage}
          className="flex items-center justify-center cursor-pointer absolute left-4 
          top-[50%] w-10 h-10 bg-white rounded-[100%] min-[920px]:hidden"
        >
          <img src={previousArrow} alt="" />
        </div>
        <div
          onClick={nextSelectedImage}
          className="flex items-center justify-center cursor-pointer absolute right-4 
          top-[50%] w-10 h-10 bg-white rounded-[100%] min-[920px]:hidden"
        >
          <img src={nextArrow} alt="" />
        </div>
      </div>
      <div className="flex justify-around mt-8 max-[920px]:hidden">
        {thumbnailShoesImages.map((item, index) => (
          <div
            key={index}
            className={`${index === selectedImage ? "border-[3px] border-[#FF7E1B]" : ""}   w-[88px] h-[88px] cursor-pointer rounded-[10px] overflow-hidden`}
          >
            <img
              onClick={() => setSelectedImage(index)}
              className={`${index === selectedImage ? "opacity-45" : ""} hover:opacity-65`}
              src={item}
              alt={item}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCarousel;

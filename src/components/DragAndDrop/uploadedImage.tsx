import React, { useState } from "react";
import { formateDogBreedName } from "../../utils/nameFormation";
import { Link } from "react-router-dom";
import { predict } from "../../API/model-api";
import { HashLink } from "react-router-hash-link";

type UploadedImageProps = {
  file: File;
  imageSrc?: string;
  handleDogBreed: (breed: string) => void;
};

const UploadedImage = ({
  file,
  imageSrc,
  handleDogBreed,
}: UploadedImageProps) => {
  const handelClick = async () => {
    if (file) {
      const selectedFile = file;

      const formData = new FormData();
      formData.append("image", selectedFile);

      try {
        const response = await predict(formData);
        handleDogBreed(response.predicted_breed);
        console.log(response.predicted_breed);
        // window.location.hash = `#dog-details`;
      } catch (error) {
        console.error("Error making prediction:", error);
      }
    }
  };

  return (
    <div className="">
      {imageSrc && (
        <div>
          <h3 className="text-[#F6B17A] text-center text-2xl">
            Uploaded Image
          </h3>
          <div className="max-w-full max-h-72  flex justify-center">
            <img
              src={imageSrc}
              alt="Uploaded"
              className="mt-4 max-w-full rounded-lg shadow-xl max-h-72"
            />
          </div>
          <div className="mt-4 flex flex-col justify-center items-center">
            <HashLink
              to={`/#dog-details`}
              smooth={true}
              onClick={handelClick}
              className="text-[#fff] bg-[#03C988] border shadow-xl p-2 rounded  w-full text-center text-xl"
            >
              Find The Breed
            </HashLink>

            <p className="text-center text-[#DCFFB7] mt-2">
              *Click here to find the breed of the dog
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadedImage;

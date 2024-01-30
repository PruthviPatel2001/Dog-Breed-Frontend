import React, { useEffect, useState } from "react";
import { formateDogBreedName } from "../../utils/nameFormation";
import { getItemFromLocalStorage } from "../../utils/manageLocalStorage";
import { DogBreed } from "../../types/dog_breed_types";

type DogDetailsProps = {
  dogBreed: DogBreed;
};

const DogDetails = ({ dogBreed }: DogDetailsProps) => {
  const [DogImage, setDogImage] = useState<string>("");

  useEffect(() => {
    const getDogImage = async () => {
      let img: string | null = getItemFromLocalStorage("dog-image");
      if (img) setDogImage(img);
    };

    getDogImage();
  }, []);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 lg:col-span-4 flex flex-col justify-center items-center">
        <img
          src={DogImage}
          alt="dog"
          className=" max-w-full rounded-lg  max-h-72 shadow-2xl"
        />
        <p className="text-[#DCFFB7] text-center text-xl mt-4">
          {formateDogBreedName(dogBreed.predicted_breed)}
        </p>
      </div>
      <div className=" col-span-12 mt-4 lg:mt-0 lg:col-span-8  px-4">
        <h1 className="text-white text-center text-xl">
          About{" "}
          <span className="text-[#FFA447]">
            {formateDogBreedName(dogBreed.predicted_breed)}
          </span>
        </h1>
        <h4 className="text-white text-lg mt-4">
          {dogBreed.breed_details?.detail}
        </h4>
        <h3 className="text-white mt-10 text-lg">
          Facts About{" "}
          <span className="text-[#FFA447]">
            {formateDogBreedName(dogBreed.predicted_breed)}
          </span>
        </h3>
        <div className="mt-4">
          <ul className="list-decimal list-inside">
            {dogBreed.breed_details?.facts?.map((fact, index) => (
              <li
                key={index}
                className="text-white text-lg border p-4 shadow-xl rounded-md mt-4 first:mt-0"
              >
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DogDetails;

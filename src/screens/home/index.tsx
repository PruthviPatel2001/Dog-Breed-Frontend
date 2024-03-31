import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import DragAndDropHolder from "../../components/DragAndDrop";
import DogDetails from "../../components/DogDetails";
import { DogBreed } from "../../types/dog_breed_types";
import { Link } from "react-router-dom";
import { time } from "console";

export interface Root {
  predicted_breed: string;
  breed_details: BreedDetails;
}

export interface BreedDetails {
  breed_name: string;
  detail: string;
  facts: string[];
}

const Home = () => {
  const [dogBreed, setdogBreed] = useState<DogBreed | null>({} as DogBreed);
  const [isLoading, setIsLoading] = useState(false);
  const [showTimeoutMessage, setShowTimeoutMessage] = useState(false);

  const handleDogBreed = (breed: DogBreed) => {
    setdogBreed(breed);
  };

  const handleIsLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  const handleTimeoutMessage = (value: boolean) => {
    setShowTimeoutMessage(value);
  };

  console.log(isLoading, "isLoading");
  console.log(showTimeoutMessage, "showTimeoutMessage");

  return (
    <div>
      <div className="">
        <Link to="/about">
          <div className="flex justify-master  md:justify-end px-20 pt-4">
            <button className="text-white border shadow-xl border-white text-lg  hover:text-[#96E9C6] hover:border-[#96E9C6] px-5 py-2 rounded-lg">
              About App
            </button>
          </div>
        </Link>
        <Header />
      </div>
      <div className="p-10">
        <div id="image-loader">
          <DragAndDropHolder
            handleDogBreed={handleDogBreed}
            handleIsLoading={handleIsLoading}
            handleTimeoutMessage={handleTimeoutMessage}
            isLoading={isLoading}
            dogBreed={dogBreed}
          />
        </div>

        {isLoading ? (
          showTimeoutMessage ? (
            <div className="mt-10">
              <h1 className="text-white text-center text-2xl">
                Request taking longer than expected, possibly due to server
                limitations. Thank you for your patience.
              </h1>
            </div>
          ) : (
            <div className="mt-10">
              <h1 className="text-white text-center text-2xl">Loading...</h1>
            </div>
          )
        ) : (
          dogBreed &&
          Object.keys(dogBreed).length > 0 && (
            <div className="mt-10 ">
              <h1 className="text-white text-center underline text-2xl">
                Know Your <span className="text-[#FFE7C1]"> Dog Breed</span>
              </h1>
              <div id="dog-details" className="mt-10">
                <DogDetails dogBreed={dogBreed} />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Home;

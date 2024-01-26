import React, { useState } from "react";
import Header from "../../components/Header";
import DragAndDropHolder from "../../components/DragAndDrop";
import DogDetails from "../../components/DogDetails";
import { DogBreed } from "../../types/dog_breed_types";

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

  const handleDogBreed = (breed: DogBreed) => {
    setdogBreed(breed);
  };

  return (
    <div>
      <div className="border">
        <Header />
      </div>
      <div className="p-10">
        <div id="image-loader">
          <DragAndDropHolder handleDogBreed={handleDogBreed} />
        </div>
        {dogBreed && dogBreed?.predicted_breed?.length > 0 && (
          <div className="mt-10 ">
            <h1 className="text-white text-center text-2xl">
              Know Your Dog Breed
            </h1>
            <div id="dog-details" className="mt-10">
              <DogDetails dogBreed={dogBreed} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

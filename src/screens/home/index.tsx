import React, { useState } from "react";
import Header from "../../components/Header";
import DragAndDropHolder from "../../components/DragAndDrop";
import DogDetails from "../../components/DogDetails";

const Home = () => {
  const [dogBreed, setdogBreed] = useState<string | null>("");

  const handleDogBreed = (breed: string) => {
    setdogBreed(breed);
  };

  return (
    <div>
      <div className="border">
        <Header />
      </div>
      <div className="p-10">
        <DragAndDropHolder handleDogBreed={handleDogBreed} />
      </div>
      {dogBreed && (
        <div id="dog-details" className="mt-4 border">
          <DogDetails dogBreed={dogBreed} />
        </div>
      )}
    </div>
  );
};

export default Home;

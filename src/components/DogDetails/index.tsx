import React from "react";

type DogDetailsProps = {
  dogBreed: string;
};

const DogDetails = ({ dogBreed }: DogDetailsProps) => {
  return (
    <div>
      <h1 className="text-white text-center text-2xl">
        Read The Details Below {dogBreed}
      </h1>
    </div>
  );
};

export default DogDetails;

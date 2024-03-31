import { predict } from "../../API/model-api";
import { HashLink } from "react-router-hash-link";
import { DogBreed } from "../../types/dog_breed_types";
import { useEffect, useState } from "react";

type UploadedImageProps = {
  file: File;
  imageSrc?: string;
  handleDogBreed: (breed: DogBreed) => void;
  handleIsLoading: (isLoading: boolean) => void;
  handleTimeoutMessage: (value: boolean) => void;
  isLoading: boolean;
  dogBreed: DogBreed | null;
};

const UploadedImage = ({
  file,
  imageSrc,
  handleDogBreed,
  handleIsLoading,
  handleTimeoutMessage,
  isLoading,
  dogBreed,
}: UploadedImageProps) => {
  const handelClick = async () => {
    if (file) {
      const selectedFile = file;

      const formData = new FormData();
      formData.append("image", selectedFile);

      let timeoutId = setTimeout(() => {
        handleTimeoutMessage(true);
      }, 5000);

      try {
        handleIsLoading(true);
        const response = await predict(formData);
        if (response) {
          clearTimeout(timeoutId);
          handleTimeoutMessage(false);
          handleDogBreed(response);
          handleIsLoading(false);
        }
        // window.location.hash = `#dog-details`;
      } catch (error) {
        console.error("Error making prediction:", error);
        handleIsLoading(false);
        clearTimeout(timeoutId);
        handleTimeoutMessage(false);
      }
    }
  };

  const [DisableButton, setDisableButton] = useState(false);

  useEffect(() => {
    const checkLoading = async () => {
      if (isLoading || (dogBreed && Object.keys(dogBreed).length > 0)) {
        setDisableButton(true);
      } else {
        setDisableButton(false);
      }
    };

    checkLoading();
  }, [isLoading, dogBreed]);

  return (
    <div className="">
      {imageSrc && (
        <div>
          <h3 className="text-[#FFA447] text-center text-2xl">
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
              onClick={DisableButton ? undefined : handelClick} // Disable onClick when loading
              className={`text-[#fff] bg-[#03C988] border shadow-xl p-2 rounded w-full text-center text-xl ${
                DisableButton
                  ? "cursor-not-allowed   text-[white] bg-zinc-500"
                  : ""
              }`}
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

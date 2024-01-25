import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { predict } from "../../API/model-api";
import UploadedImage from "./uploadedImage";

type DragAndDropHolderProps = {
  handleDogBreed: (breed: string) => void;
};

const DragAndDropHolder = ({ handleDogBreed }: DragAndDropHolderProps) => {
  const fileTypes: string[] = ["JPEG", "PNG", "GIF", "JPG"];
  const [file, setFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleChange = async (file: File) => {
    if (file) {
      const selectedFile = file;
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="grid grid-cols-12 border w-full py-4">
      <div className="col-span-6 border-r-2 flex flex-col justify-center items-center">
        {imageSrc && file ? (
          <UploadedImage
            imageSrc={imageSrc}
            file={file}
            handleDogBreed={handleDogBreed}
          />
        ) : (
          <img
            src={"./images/dog.png"}
            alt="dog"
            className="max-w-full  max-h-72"
          />
        )}
      </div>

      <div className="col-span-6  flex flex-col justify-center items-center">
        <FileUploader
          multiple={false}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        >
          <div className="flex justify-center cursor-pointer items-center border-2 border-dashed border-spacing-4 py-4 px-10 h-96 w-full border-[#FDF0D1] text-center text-xl">
            <p className="text-[#DCFFB7]">
              Drag and Drop an image here, or Click
            </p>
          </div>
        </FileUploader>
        <p className="text-[#40A2D8] mt-4 text-lg">
          {file ? (
            <>
              File name:{" "}
              <span className="text-sm text-[#DCFFB7]">{file.name}</span>
            </>
          ) : (
            <span className="text-[#FF6868]">No Image uploaded yet </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default DragAndDropHolder;

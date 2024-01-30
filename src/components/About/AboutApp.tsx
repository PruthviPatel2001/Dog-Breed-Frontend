import React from "react";

const AboutApp = () => {
  return (
    <div className="p-10">
      <h1 className="text-white text-center text-3xl">
        About
        <span className="text-[#FFA447]"> Application</span>
      </h1>

      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-5 flex justify-center items-center ">
          <img src={"./images/dog-2.png"} alt="dog" className="max-w-full " />
        </div>
        <div className="col-span-12 lg:col-span-7  md:py-10">
          <h1 className="text-2xl text-white">
            <span className="text-[#F2F597]">PupTeller</span> Amazing Feature:
          </h1>
          <div className="mt-4">
            <h1 className="text-lg text-white">
              <span className="text-[#FFBB64]">Breed Magic:</span> Upload a
              picture of your furry friend, and our magic machine learning model
              will reveal their identity - the dog breed!. Also provides few
              details and facts🧙‍♂️🐶.
            </h1>
          </div>

          <div className="mt-6">
            <h1 className="text-2xl text-white">
              <span className="text-[#F2F597]">Tech Wonder</span> Behind the
              App:
            </h1>
          </div>

          <div className="mt-4">
            <h1 className="text-lg mt-2 text-white">
              <span className="text-[#FFBB64]">ML Model:</span> This four-legged
              breed identifier is powered and trained by the incredible{" "}
              <span className="underline text-[#FF9843]">PyTorch</span> .
            </h1>

            <h1 className="text-lg mt-2 text-white">
              <span className="text-[#FFBB64]">Backend:</span> The{" "}
              <span className="underline text-[#A7D397]">Django </span>
              backend moves to the rhythm of requests, coordinating a symphony
              between the frontend and the machine learning model.
            </h1>

            <h1 className="text-lg mt-2 text-white">
              <span className="text-[#FFBB64]">Frontend:</span> The frontend,
              built with <span className="underline text-[#86B6F6]">React</span>{" "}
              , brings the magic to your screens!
            </h1>
          </div>

          <div className="mt-6">
            <h1 className="text-2xl text-white">
              <span className="text-[#F2F597]">How</span> the Magic Happens:
            </h1>
          </div>

          <div className="mt-4">
            <ul className="text-white list-decimal text-lg pl-8">
              <li className="">📸 Get a pic of your adorable pooch.</li>
              <li className="mt-3">
                ✨ The magic begins! Django passes the image to our model.
              </li>
              <li className="mt-3">
                🧠 Model casts its spell and predicts the dog's breed.
              </li>
              <li className="mt-3">
                🎉 Django sends the results back to React, and voilà - you get
                the breed revelation!!
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h1 className="text-2xl text-white">
              <span className="text-[#F2F597]">Model</span> Mastery:
            </h1>
          </div>
          <div className="mt-4">
            <h1 className="text-lg mt-2 text-white">
              <span className="text-[#FFBB64]">Accuracy Extraordinaire:</span>{" "}
              model boasts a whopping{" "}
              <span className="underline text-[#A8DF8E]">97.54%</span> accuracy.
            </h1>

            <h1 className="text-lg mt-2 text-white">
              <span className="text-[#FFBB64]">Breeds Bonanza:</span> Trained
              with love on <span className="underline text-[#A8DF8E]">30</span>{" "}
              diverse breeds from across the globe
            </h1>
          </div>

          <div className="mt-6">
            <h1 className="text-xl text-white">
              Experience canine magic at{" "}
              <span className="text-[#FFBB64]">PupTellers</span> - Where Every
              Bark Tells a Tale! 🌟🐶
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutApp;

import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{ minHeight: "95vh" }}
      >
        <div
          className="absolute top-0 w-full h-full bg-top bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto" data-aos="fade-in">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 className="text-white font-semibold text-5xl">
                  Feel The <span className="text-orange-500">Power</span>
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Welcome to The Power Room. We are a fitness and training
                  center that focuses on pushing you to your absolute limit.
                  Download our complete brochure to get started today!
                </p>
                <a
                  href="#contact"
                  className="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white p-4 border border-orange-500 hover:border-transparent rounded inline-block mt-5 cursor-pointer"
                >
                  Get Started Here 
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: 70, transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Hero;

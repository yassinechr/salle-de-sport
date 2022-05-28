import React from "react";
import Card from "./Card";
import data from "./helpers";
const Trainers = () => {
  return (
    <>
      <section className="pt-20 pb-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold uppercase">
                Meet Our Trainers
              </h2>
              <p className="text-lg leading-relaxed m-4">
                Our trainers are are here to dedicate the time and effort that
                you need to get in the best shape of your life
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            {data?.map((traine, idx) => (
              <Card traine={traine} key={idx} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Trainers;

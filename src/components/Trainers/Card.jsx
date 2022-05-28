import React from "react";

const Card = ({ traine }) => {
  const { name, src, role } = traine;
  return (
    <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
      <div className="px-6">
        <img
          alt="..."
          src={src}
          className="shadow-lg rounded max-w-full mx-auto"
          style={{ maxWidth: "250px",height:375 }}
        />
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">{name}</h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

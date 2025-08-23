import React from "react";

const Button = ({name}) => {
  return (
    <>
      <button type="submit" className="m-3 px-3 py-1.5 bg-gray-200 rounded-xl">
        {name}
      </button>
    </>
  );
};

export default Button;

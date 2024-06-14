import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <svg className="animate-spin -ml-1 mr-1 w-8 h-8 text-white" viewBox="0 0 50 50">
        <circle
          className="opacity-75"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          cx="25"
          cy="25"
          r="20"
        />
      </svg>
    </div>
  );
};

export default Loader;

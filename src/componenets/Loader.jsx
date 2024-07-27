import React from "react";

const Loader = () => {
  return (
    <>
    <div className="flex justify-center items-center relative top-9">
      <button type="button" className="bg-orange-500 text-black text-xl font-semibold px-6 py-5 rounded-xl" disabled>
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        Processing...
      </button>
    </div>
    </>
  );
};

export default Loader;

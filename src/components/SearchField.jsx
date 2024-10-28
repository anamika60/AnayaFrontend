import { Search } from "lucide-react";
import React from "react";

export const SearchField = () => {
  return (
    <section className="flex p-4 md:p-0 justify-center items-center gap-7 w-full flex-col min-h-[50vh]">
    

      <div className="flex items-center justify-center flex-col flex-wrap md:flex-row w-full gap-2">
        <input
          type="text"
          placeholder=""
          className="bg-transparent focus:outline-none md:w-1/2 w-full focus:border-black p-4 rounded-lg border-2 border-black/20" 
        />
        <button className="flex justify-center items-center gap-2 font-semibold ml-0 md:ml-5 mt-2 md:mt-0 w-full md:w-44 bg-black rounded-lg hover:border-2 hover:border-black/30 duration-200 text-white hover:text-black hover:bg-transparent p-4">
          <Search /> <span className="text-base">Search</span>
        </button>
      </div>
    </section>
  );
};

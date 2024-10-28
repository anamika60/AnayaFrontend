import { CoolMode } from "./ui/cool-mode";

export const Business = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] pt-16 pb-44 flex flex-col items-cente">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Section - Heading and Call to Action */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Unlock Your Business Potential Today!
          </h2>
          <p className="text-gray-700 mb-8">
            Small businesses and startups looking to gain data insights.
          </p>

          <CoolMode>
            <button className="bg-black text-white px-8 py-3 rounded-md text-lg shadow-md hover:bg-gray-900 transition">
              Get Started &rarr;
            </button>
          </CoolMode>
        </div>

        {/* Right Section - Info Cards */}
        <div className="hidden lg:flex relative space-x-4">
          {/* Card 1 - Total Sales */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center absolute lg:right-10 transform -rotate-12">
            <h3 className="text-lg font-medium mb-2">Total Sales</h3>
            <p className="text-2xl font-bold">$513,068.98</p>
            <p className="text-green-500 text-sm">+12% this week</p>
          </div>

          {/* Card 2 - Visitors */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center absolute right-[24rem] transform rotate-6 z-10">
            <h3 className="text-lg font-medium mb-2">Visitors</h3>
            <p className="text-2xl font-bold">350,745</p>
            <p className="text-red-500 text-sm">-2% this week</p>
          </div>

          {/* Card 3 - Total Orders */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center absolute right-60 transform rotate-12">
            <h3 className="text-lg font-medium mb-2">Total Orders</h3>
            <p className="text-2xl font-bold">450</p>
            <p className="text-gray-500 text-sm">No change</p>
          </div>
        </div>
      </div>
    </section>
  );
};

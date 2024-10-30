import Footer from "@/common/Footer";
import React from "react";
import { Facebook, InstagramIcon, TwitterIcon, Linkedin } from "lucide-react";

const AboutUs = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-white to-[#D2DCFF] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* "Who Are We?" Section */}
          <div className="flex flex-col gap-5 w-full min-h-screen mb-12">
            <div className="bg-gradient-to-b from-white to-[#D2DCFF] w-full flex flex-col justify-center md:h-[650px]">
              <div className="flex justify-between lg:flex-row flex-col items-center md:w-[85%] w-full gap-5 mx-auto pt-8 pb-24">
                <div className="sm:flex items-center max-w-screen-xl">
                  <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                      <img src="https://i.imgur.com/WbQnbas.png" alt="About Us" />
                    </div>
                  </div>
                  <div className="sm:w-1/2 p-5">
                    <div className="text">
                      <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
                        Our Story
                      </span>
                      <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                        Why <span className="text-indigo-600">Choose Us?</span>
                      </h2>
                      <p className="text-gray-700">
                        We are passionate about empowering individuals through services in{" "}
                        <span className="text-blue-600">digital marketing</span>,{" "}
                        <span className="text-blue-600">web development</span>, and{" "}
                        <span className="text-blue-600">education</span>. Our focus on{" "}
                        <span className="text-blue-600">affiliate marketing</span> equips learners with the tools they need to succeed. We provide access to comprehensive{" "}
                        <span className="text-blue-600">Python courses</span> and{" "}
                        <span className="text-blue-600">Java courses</span> that cater to all skill levels. Additionally, our platform includes resources like{" "}
                        <span className="text-blue-600">Canva</span> and{" "}
                        <span className="text-blue-600">Photoshop</span>, enabling users to develop creative skills for today’s digital landscape.
                      </p>
                      <p className="text-gray-700 mt-4">
                        Our goal is to foster a community where individuals can learn and grow. By combining innovative teaching methods with practical tools, we help you build a successful career. Join us to unlock your potential and navigate the ever-evolving world of technology and marketing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Founder Card */}
            <div className="bg-gradient-to-b from-white to-[#D2DCFF] rounded-lg shadow-lg p-6 flex items-center">
              <div className="w-1/3 p-2">
                <img
                  src="https://kgiservices.in/wp-content/uploads/2024/08/SHIVAM-KANDWAL-OWNER-683x1024.png"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 object-cover border-4 border-gray-200 shadow-md"
                />
              </div>
              <div className="w-2/3 text-left px-4">
                <div className="flex gap-2">
                  <h2 className="text-xl font-bold mb-2" style={{ color: "#404040" }}>
                    Name :
                  </h2>
                  <p className="text-lg text-gray-600 mb-2">
                    Shivam Khandwal
                  </p>
                </div>
                <div className="flex gap-2">
                  <h2 className="text-xl font-bold mb-2" style={{ color: "#404040" }}>
                    Email :
                  </h2>
                  <p className="text-lg text-gray-600 mb-2">
                    anayasoftware@gmail.com
                  </p>
                </div>
                <div className="flex gap-2">
                  <h2 className="text-xl font-bold mb-2" style={{ color: "#404040" }}>
                    Phone No :
                  </h2>
                  <p className="text-lg text-gray-600 mb-2">
                    + 91 7669247559
                  </p>
                </div>
                <div className="flex space-x-4 mt-6">
                  <Facebook size={24} className="text-gray-400 hover:text-teal-400" />
                  <InstagramIcon size={24} className="text-gray-400 hover:text-teal-400" />
                  <TwitterIcon size={24} className="text-gray-400 hover:text-teal-400" />
                  <Linkedin size={24} className="text-gray-400 hover:text-teal-400" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-white to-[#D2DCFF] rounded-lg shadow-lg p-6 flex items-center">
              <div className="w-1/3 p-2">
                <img
                  src="https://kgiservices.in/wp-content/uploads/2024/08/SHIVAM-KANDWAL-OWNER-683x1024.png"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 object-cover border-4 border-gray-200 shadow-md"
                />
              </div>
              <div className="w-2/3 text-left px-4">
                <div className="flex gap-2">
                  <h2 className="text-xl font-bold mb-2" style={{ color: "#404040" }}>
                    Name :
                  </h2>
                  <p className="text-lg text-gray-600 mb-2">
                    Ajay Sharma
                  </p>
                </div>
                <div className="flex gap-2">
                  <h2 className="text-xl font-bold mb-2" style={{ color: "#404040" }}>
                    Email :
                  </h2>
                  <p className="text-lg text-gray-600 mb-2">
                    shivam@gmail.com
                  </p>
                </div>
                <div className="flex gap-2">
                  <h2 className="text-xl font-bold mb-2" style={{ color: "#404040" }}>
                    Phone No :
                  </h2>
                  <p className="text-lg text-gray-600 mb-2">
                    67344747848
                  </p>
                </div>
                <div className="flex space-x-4 mt-6">
                  <Facebook size={24} className="text-gray-400 hover:text-teal-400" />
                  <InstagramIcon size={24} className="text-gray-400 hover:text-teal-400" />
                  <TwitterIcon size={24} className="text-gray-400 hover:text-teal-400" />
                  <Linkedin size={24} className="text-gray-400 hover:text-teal-400" />
                </div>
              </div>
            </div>

            {/* Additional team members can be added by duplicating the above card */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;

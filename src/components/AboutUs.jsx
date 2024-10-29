import Footer from '@/common/Footer';
import React from 'react';
import './AboutUs.css';
import { Facebook, InstagramIcon, TwitterIcon, Linkedin } from "lucide-react";


const AboutUs = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-300 to-teal-400 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6 animate__animated animate__fadeInDown">
            About Us
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Team Member Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
              <div className="w-1/3 p-2">
                <img
                  src="https://kgiservices.in/wp-content/uploads/2024/08/SHIVAM-KANDWAL-OWNER-683x1024.png"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 object-cover border-4 border-gray-200 shadow-md"
                />
              </div>
              <div className="w-2/3 text-left px-4">
                <h2 className="text-xl font-semibold mb-2" style={{ color: '#404040' }}>
                  Shivam Khandwal
                </h2>
                <h3 className="text-sm text-gray-500 mb-4">Founder</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex space-x-4 mt-6">
                  <Facebook size={24} className="text-gray-400 hover:text-teal-400" />
                  <InstagramIcon size={24} className="text-gray-400 hover:text-teal-400" />
                  <TwitterIcon size={24} className="text-gray-400 hover:text-teal-400" />
                  <Linkedin size={24} className="text-gray-400 hover:text-teal-400" />
                </div>
              </div>
            </div>
            
            {/* Additional team members can be added by duplicating the above card */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
              <div className="w-1/3 p-2">
                <img
                  src="https://kgiservices.in/wp-content/uploads/2024/08/SHIVAM-KANDWAL-OWNER-683x1024.png"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 object-cover border-4 border-gray-200 shadow-md"
                />
              </div>
              <div className="w-2/3 text-left px-4">
                <h2 className="text-xl font-semibold mb-2" style={{ color: '#404040' }}>
                  Shivam Khandwal
                </h2>
                <h3 className="text-sm text-gray-500 mb-4">Founder</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex space-x-4 mt-6">
                  <Facebook size={24} className="text-gray-400 hover:text-teal-400" />
                  <InstagramIcon size={24} className="text-gray-400 hover:text-teal-400" />
                  <TwitterIcon size={24} className="text-gray-400 hover:text-teal-400" />
                  {/* <Linkedin size={24} className="text-gray-400 hover:text-teal-400" /> */}
                  <Linkedin size={24} className='text-gray-400 hover:text-teal-400'/>
                </div>

              </div>
            </div>
          </div>

          {/* "Who Are We?" Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex items-center gap-8 animate__animated animate__fadeInUp">
            {/* <div className="w-1/3">
              <img
                src="https://via.placeholder.com/300"
                alt="Random Image"
                className="rounded-lg object-cover"
              />
            </div> */}
            <div className='w-1/3'><img src='https://via.placeholder.com/300' alt="Random Image" className='"rounded-lg object-cover'/></div>
            <div className="w-2/3 text-left">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-gray-500 typing-effect">
  Who Are We?
</h2>



              <p className="text-gray-600 mb-4">
                We help people to build incredible brands and superior products. Our perspective is to furnish outstanding captivating services.
              </p>
              <p className="text-gray-500 mb-4">
                Nullam gravida orci ac luctus molestie. Fusce finibus congue erat, non aliquam magna tincidunt at.
              </p>
              <div className="flex space-x-8">
                <div className="flex items-center gap-2">
                  <i className="fas fa-star text-teal-500"></i>
                  <div>
                    <h3 className="font-semibold">Versatile Brand</h3>
                    <p className="text-sm text-gray-500">We are crafting a digital method that subsists life across all mediums.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-fire text-teal-500"></i>
                  <div>
                    <h3 className="font-semibold">Digital Agency</h3>
                    <p className="text-sm text-gray-500">We believe in innovation by integrating primary with elaborate ideas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;

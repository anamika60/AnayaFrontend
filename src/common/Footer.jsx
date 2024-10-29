import { Instagram, Linkedin, Youtube, Pin, X, Facebook, InstagramIcon, YoutubeIcon, TwitchIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-black-300 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-24">
          {/* Logo and Description */}
          <div className="md:col-span-2 mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold text-white">Company Logo</h1>
            </div>
            <p className="mt-4">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="flex space-x-4 mt-6">
              <Facebook size={24} />
              <InstagramIcon size={24}  />
              <TwitterIcon size={24}  />
              <Linkedin size={24}  />

            </div>
          </div>

          {/* Solutions Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-white font-semibold mb-2">Solutions</h3>
            <ul className="space-y-2">
              <li>Marketing</li>
              <li>Analytics</li>
              <li>Automation</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-white font-semibold mb-2">Support</h3>
            <ul className="space-y-2">
              <li>Contact us</li>
              <li>Documentation</li>
              <li>Guides</li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Affiliation (Coming soon)</li>
            </ul>
          </div>

          {/* Legal Section */}
          {/* <div className="mb-6 md:mb-0">
            <h3 className="text-white font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li>Terms of service</li>
              <li>Privacy policy</li>
              <li>License</li>
            </ul>
          </div> */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-white font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li>Terms of service</li>
              <li>Privacy policy</li>
              <li>License</li>
            </ul>

          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          © 2024 Your Company, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

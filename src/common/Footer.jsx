import { Facebook, InstagramIcon, Linkedin, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-[90%] lg:max-w-[85%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
          {/* Logo and Address Information */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold">Anaya Softwares</h1>
            <div className="mt-6 text-gray-400">
              <p>Head Office: JG-2/769A, Vikas Puri opp. PILLAR NO-27, West Delhi-110018</p>
              <p className="mt-3">Branch Office: SR Tower opp-vidhut Vibhag near, Kaala Paani Chowk, Main Shastradhara Road, Dehradun, Uttar Pradesh (248001)</p>
              <p className="mt-3">Upcoming Branches: Bhopal, Ahmedabad, Mumbai</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-gray-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <InstagramIcon size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <TwitterIcon size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Solutions Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-gray-300 cursor-pointer">Marketing</li>
              <li className="hover:text-gray-300 cursor-pointer">Analytics</li>
              <li className="hover:text-gray-300 cursor-pointer">Automation</li>
              <li className="hover:text-gray-300 cursor-pointer">Commerce</li>
              <li className="hover:text-gray-300 cursor-pointer">Insights</li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-gray-300 cursor-pointer">Contact us</li>
              <li className="hover:text-gray-300 cursor-pointer">Documentation</li>
              <li className="hover:text-gray-300 cursor-pointer">Guides</li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-gray-300 cursor-pointer">About</li>
              <li className="hover:text-gray-300 cursor-pointer">Blog</li>
              <li className="hover:text-gray-300 cursor-pointer">Jobs</li>
              <li className="hover:text-gray-300 cursor-pointer">Affiliation (Coming soon)</li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-gray-300 cursor-pointer">Terms of service</li>
              <li className="hover:text-gray-300 cursor-pointer">Privacy policy</li>
              <li className="hover:text-gray-300 cursor-pointer">License</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
          © 2024 Anaya Softwares. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

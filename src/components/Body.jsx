import { motion } from "framer-motion";
import TypingAnimation from "./TypingAnimation";
import { CoolMode } from "./ui/cool-mode";
import { BodyContent } from "./BodyContent";
import { Reviews } from "./Reviews";
import { Business } from "./Business";
import Footer from "@/common/Footer";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "./ui/animated-modal";
import { EnquiryForm } from "./EnquiryForm";

export default function Body() {
  return (
    <div className="flex flex-col gap-5 w-full min-h-screen">
      <div className="bg-gray-100 w-full flex flex-col py-16 px-12 md:h-[600px]">
        <div className="flex flex-col">
          <div className="flex justify-between items-center lg:flex-row flex-col md:w-[85%]  w-full mx-auto ">
            <motion.div
              className="flex flex-col gap-8 mt-20 mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <CoolMode>
                <motion.h1
                  className="text-6xl font-bold text-center tracking-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Unlock the
                  <br /> <span className="text-[#3FEDBC]">Power</span> of
                  Knowledge
                  <br /> <TypingAnimation />
                </motion.h1>
              </CoolMode>

              <motion.div
                className="items-center justify-center flex"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {/* <Modal>
                  <ModalTrigger className="mt-8 mb-24 bg-black text-white py-4 px-6 rounded-full flex justify-center group/modal-btn">
                    <span className="group-hover/modal-btn:translate-x-40 text-base text-center transition duration-500">
                      Get Started &rarr;
                    </span>
                    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                      ✈️
                    </div>
                  </ModalTrigger>
                  <ModalBody>
                    <ModalContent>
                    <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                    <EnquiryForm/>
                    </h4>
                    </ModalContent>
                  </ModalBody>
                </Modal> */}
                <button
                className="mt-8 mb-24 bg-black text-white py-4 px-6 rounded-full">
                Get Started &rarr;
                </button>
              </motion.div>
            </motion.div>

            <motion.img
              src="https://gitcs-brain.vercel.app/assets/undraw_data_trends_re_2cdy-DnVPABha.svg"
              alt="HR Background"
              className="w-2/5 mb-16"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </div>
        </div>
      </div>

      <BodyContent />

      <Reviews />

      <div>
        <Business />

        <Footer />
      </div>
    </div>
  );
}

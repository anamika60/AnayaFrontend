import React, { useState } from "react";
import { MailPlus, Nfc, Send, Zap } from "lucide-react";
import Footer from "@/common/Footer";

export const Contact = () => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="flex flex-col gap-5 w-full min-h-screen">
    <div className=" bg-gradient-to-b from-white to-[#D2DCFF]  w-full flex flex-col justify-center  md:h-[1350px] ">
      <div className="flex justify-between lg:flex-row flex-col items-center md:w-[85%] w-full gap-5 mx-auto pt-8 pb-24">

      <div className=" w-full flex justify-center items-center gap-5 flex-col" id="contact">
<div className="flex justify-center items-center gap-2">

           <h1 className="capitalize font-bold text-4xl relative lg:text-5xl tracking-wide">
          
         Contact Us
                 {/* <span className="text-8xl lg:text-[9rem] animate-pulse absolute lg:-bottom-2 bottom-0">.</span> */}
            </h1>
            
</div>
            {/* <span className="font-normal text-sm md:text-lg text-center">
                Shoot us an email if you want to connect! You can also find us on{" "}
                <a className="text-blue-500 font-bold" href="https://likedin.com" target="_blank">
                    LinkedIn.
                </a>{" "}
                if that's more your speed.
            </span> */}
            <a href="mailto:anayaSoftware@gmail.com?body=Hello" target="_blank" className="flex items-center gap-2 text-xl font-medium">
                <MailPlus /> anayaSoftware@gmail.com
            </a>
            <form className="flex flex-col w-full lg:w-[80%] gap-4" autoComplete="off">
               
                    <input
                        type="text"
                        placeholder="Please Enter Your Full Name"
                        className="duration-100 focus:dark:border-white focus:border-black focus:dark:outline-white focus:outline-black flex-1 border-2 rounded-lg p-3 dark:border-white/40 border-black/40 bg-transparent"
                        required
                    />

<input
                        type="text"
                        placeholder="Please Enter Your Phone Number"
                        className="duration-100 focus:dark:border-white focus:border-black focus:dark:outline-white focus:outline-black flex-1 border-2 rounded-lg p-3 dark:border-white/40 border-black/40 bg-transparent"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Please Enter Your Email"
                        className="duration-100 focus:dark:border-white focus:border-black focus:dark:outline-white focus:outline-black flex-1 border-2 rounded-lg p-3 dark:border-white/40 border-black/40 bg-transparent"
                        required
                    />
        
                <textarea
                    placeholder="Enter Your Message"
                    className="duration-100 focus:dark:border-white focus:border-black focus:dark:outline-white focus:outline-black bg-transparent h-64 dark:border-white/40 border-black/40 p-4 rounded-lg w-full flex-auto border-2"
                    required
                    value={message}
                    onChange={handleMessageChange}
                ></textarea>
                <button className="flex justify-center text-white bg-blue-800 items-center gap-3 boxshadowbtn">
                    
                    <Send />
                    SUBMIT
                </button>
            </form>
        </div>


          <img
            src="https://almondztrade.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontact_banner.7c465060.png&w=1920&q=75"
            alt="Software Solutions"
            className="md:w-1/2 w-96"
          />
        </div>

      <Footer/>
     
      </div>
    </div>
  );
};

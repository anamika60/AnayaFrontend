import React from "react";
import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";
import avatar4 from "../assets/avatar-4.png";
import avatar5 from "../assets/avatar-5.png";
import avatar6 from "../assets/avatar-6.png";
import avatar7 from "../assets/avatar-7.png";
import avatar8 from "../assets/avatar-8.png";
import avatar9 from "../assets/avatar-9.png";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Import cn for class management
import AnimatedGradientText from "./ui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { CoolMode } from "./ui/cool-mode";

export const Reviews = () => {
  const testimonials = [
    {
      text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
      imageSrc: avatar1,
      name: "Aarav Mehta",
      username: "@aaravtechguru",
    },
    {
      text: "Our team's productivity has skyrocketed since we started using this tool.",
      imageSrc: avatar2,
      name: "Rohan Sharma",
      username: "@rohan_smith",
    },
    {
      text: "This app has completely transformed how I manage my projects and deadlines.",
      imageSrc: avatar3,
      name: "Ishita Singh",
      username: "@ishitasingh",
    },
    {
      text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
      imageSrc: avatar4,
      name: "Aditya Kumar",
      username: "@adityak",
    },
    {
      text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
      imageSrc: avatar5,
      name: "Tanvi Patel",
      username: "@tanvipatel",
    },
    {
      text: "The customizability and integration capabilities of this app are top-notch.",
      imageSrc: avatar6,
      name: "Riya Verma",
      username: "@riyaverma1",
    },
    {
      text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
      imageSrc: avatar7,
      name: "Kabir Malhotra",
      username: "@kabirmalhotra",
    },
    {
      text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      imageSrc: avatar8,
      name: "Devansh Joshi",
      username: "@devanshjoshi",
    },
    {
      text: "Its user-friendly interface and robust features support our diverse needs.",
      imageSrc: avatar9,
      name: "Aanya Kapoor",
      username: "@aanyakapoor",
    },
  ];
  

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  const TestimonialsColumn = ({ className, testimonials, duration = 10 }) => {
    return (
      <div className={className}>
        <motion.div
          animate={{
            translateY: "-50%",
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex flex-col gap-6 pb-6"
        >
          {new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, imageSrc, name, username }) => (
                <div className="card" key={username}>
                  <div
                    className={cn(
                      `text-base md:text-lg font-medium tracking-tight leading-6 bg-gradient-to-r from-[#c65c10] via-[#431c6c] to-[#c65c10] bg-clip-text text-transparent`
                    )}
                  >
                    {text}
                  </div>
                  
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      src={imageSrc}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-bold tracking-tight leading-5">
                        {name}
                      </div>
                      <div className="leading-5 tracking-tight text-sm text-gray-500">
                        {username}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section>
      <div className="container">
        <div className="section-heading">
          <h2 className="mt-5 text-center text-4xl font-bold md:text-6xl mb-5">
            What our users say
          </h2>
          {/* <p className="section-des mt-5">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p> */}
          
        

              <AnimatedGradientText>
        <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#c65c10] via-[#431c6c] to-[#c65c10] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
          )}
        >
          See All Reviews
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
     
        </div>

        <div className="flex justify-center gap-6 mt-14 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};

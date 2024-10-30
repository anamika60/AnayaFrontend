import { HighlightText } from "./HighlightText";
import BlurIn from "./ui/blur-in";
import { FadeText } from "./ui/fade-text";
import WordPullUp from "./ui/word-pull-up";

import {
  Code,
  Component,
  Database,
  FolderCode,
  GitBranch,
  Server,
} from "lucide-react";
import { FlowSection } from "./FlowSection";
import Footer from "@/common/Footer";
import { Business } from "./Business";
import { Reviews } from "./Reviews";

export const Web = () => {
  const sections = [
    {
      title: "Frontend Development Tools",
      img: "https://gitcs-brain.vercel.app/assets/undraw_interview_re_e5jn-B6HkmXgB.svg",
      icon: Code,
      description:
        "Accelerate your web development process with our comprehensive frontend tools, designed to create responsive and interactive user interfaces.",
      subDescriptions: ["Mern Stack", "Reacts", "Nodejs", "Deveops", "Nextjs"],
    },
    {
      title: "Backend Development Frameworks",
      img: "https://gitcs-brain.vercel.app/assets/undraw_server_cluster_jwwq-TiSbYs9T.svg",
      icon: Server,
      description:
        "Leverage powerful backend frameworks to build scalable and efficient server-side applications, handling business logic and database integration seamlessly.",
      subDescriptions: ["Express.js", "GraphQL", "REST APIs", "Authentication", "Security"],
    },
    {
      title: "Android Development Solutions",
      img: "https://gitcs-brain.vercel.app/assets/undraw_cms_re_asu0-8bxC1WpG.svg",
      icon: FolderCode,
      description:
        "Create cutting-edge mobile applications for Android with our development tools, offering streamlined workflows for faster deployment.",
      subDescriptions: ["Kotlin", "Java", "Android SDK", "Gradle"],
    },
    {
      title: "Database Management Systems",
      img: "https://gitcs-brain.vercel.app/assets/undraw_organizing_projects_re_9p1k-CPZZyLzZ.svg",
      icon: Database,
      description:
        "Manage, organize, and retrieve data efficiently with our database management systems, ensuring data integrity and scalability for your applications.",
      subDescriptions: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    },
    {
      title: "Software Design Patterns",
      img: "https://gitcs-brain.vercel.app/assets/charts-QbmgwRPr.svg",
      icon: Component,
      description:
        "Utilize proven software design patterns to architect robust and maintainable applications, ensuring code reusability and best practices.",
      subDescriptions: ["Singleton", "Factory", "Observer", "Decorator"],
    },
    {
      title: "Version Control & Collaboration",
      img: "https://gitcs-brain.vercel.app/assets/undraw_steps_re_odoy-CxsjxMF0.svg",
      icon: GitBranch,
      description:
        "Improve team collaboration with our version control tools, allowing for seamless integration and conflict resolution in shared projects.",
      subDescriptions: ["Git", "GitHub", "Bitbucket", "Continuous Integration"],
    },
  ];

  return (
    <div className="flex flex-col gap-5 w-full min-h-screen">
      <div className="bg-orange-700 text-white w-full flex flex-col justify-center p-4 md:h-[640px]">
        <div className="flex justify-between lg:flex-row flex-col items-center md:w-[85%] w-full gap-5 m-auto">
          <div className="flex flex-col gap-8 mt-20 mb-20">
            <WordPullUp
              words="Empower Your Business with Our Software Solutions"
              className="text-5xl font-bold text-left max-w-3xl break-words"
            />
            <div className="max-w-2xl">
              <FadeText
                text="Our software applications streamline your operations and enhance productivity. From project management to customer relationship management, we provide tailored solutions to meet your needs and help you grow."
                direction="left"
              />
            </div>
            <div className="flex gap-3 flex-wrap items-center">
              <BlurIn
                word="Get Started"
                className="bg-black py-3 rounded-md flex gap-2 justify-center items-center px-8"
              />
              <BlurIn
                word="Learn More"
                className="border bg-white text-black flex justify-center gap-4 items-center py-3 rounded-md px-8"
              />
            </div>
          </div>
          <img
            src="https://gitcs-brain.vercel.app/assets/undraw_job_offers_re_634p-CTwllE8b.svg"
            alt="Software Solutions"
            className="md:w-1/2 w-96"
        
          />
        </div>
      </div>

      <div className=" flex justify-center flex-col gap-8 items-center p-9">
        <h1 className="text-center text-4xl font-bold md:text-6xl">
          What Brain Brings To The Table
        </h1>

        <HighlightText text="Boost Your Productivity" />

        <div className="grid md:w-[80%] lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
          {sections.map((data, index) => (
            <div
              key={index}
              className="p-8 rounded-md border border-black/10 hover:-translate-y-4 hover:border-orange-700 hover:bg-gray-100 duration-200"
            >
              <data.icon size={50} className="mb-6" />
              <h1 className="text-2xl font-bold">{data.title}</h1>
              <p className="break-words max-w-[80%] mt-2">{data.description}</p>
            </div>
          ))}
        </div>


        {sections.map((section, index) => (
          <FlowSection
            key={index}
            index={index}
            title={section.title}
            color="#C2410C"
            img={section.img}
            description={section.description}
            subDescriptions={section.subDescriptions}
          />
        ))}


        
      </div>

      <Reviews/>
      <div>

      <Business/>
      <Footer/>
      </div>


    </div>
  );
};

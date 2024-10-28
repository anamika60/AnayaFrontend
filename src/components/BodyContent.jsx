import {
  
  BoltIcon,
  Book,

  ConstructionIcon,

  FolderCheck,

  ListCheckIcon,

  TabletSmartphoneIcon,
} from "lucide-react";


import { HighlightText } from "./HighlightText";

export const BodyContent = () => {
  const sections = [
    {
      title: "Software Development",
      icon: TabletSmartphoneIcon,
      description:
        "Unlock the potential of your ideas with our comprehensive software development services. From mobile applications to web platforms, we create tailored solutions that enhance user experience and drive business growth. Our agile approach ensures timely delivery and adaptability to your needs.",
    },
    {
      title: "Digital Marketing Solutions",
      icon: BoltIcon,
      description:
        "Boost your online presence with our effective digital marketing strategies. We specialize in SEO, social media marketing, and content creation to help your brand reach its target audience. Leverage data-driven insights to maximize engagement and conversion rates.",
    },
    {
      title: "E-Learning Platform",
      icon: Book,
      description:
        "Transform education with our user-friendly e-learning platform. We provide a range of tools for educators and students, including course creation, progress tracking, and interactive content. Enhance learning experiences with multimedia resources and community engagement features.",
    },
    {
      title: "Project Management Software",
      icon: ListCheckIcon,
      description:
        "Streamline your projects with our intuitive project management software. Collaborate with your team, assign tasks, and monitor progress in real-time. Our platform is designed to increase productivity and ensure that deadlines are met efficiently.",
    },
    {
      title: "Content Management System",
      icon: ConstructionIcon,
      description:
        "Manage your website content effortlessly with our robust content management system. Create, edit, and publish content without needing extensive technical skills. Enjoy customizable templates and plugins that enhance your site's functionality.",
    },
    {
      title: "Data Analytics Solutions",
      icon: FolderCheck,
      description:
        "Harness the power of data with our analytics solutions. We provide insights that drive informed decision-making, optimize business strategies, and uncover new opportunities. Our tools help visualize data trends and performance metrics for better clarity and focus.",
    },
  ];

  return (
    <div
      className="flex justify-center flex-col gap-8 items-center p-9"
    >
      <h1 className="text-center text-4xl font-bold md:text-6xl ">
        What Brain Brings To The Table
      </h1>

    <HighlightText text ="Boost Your Productivity"/>

      <div className="grid lg:grid-cols-3 md:w-[80%] md:grid-cols-2 grid-cols-1 gap-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className="p-8 rounded-md border border-black/10 hover:-translate-y-4 hover:border-teal-900 hover:bg-gray-100 duration-200"
          >
            
            <section.icon size={50} className="mb-6" />
            <h1 className="text-2xl font-bold">{section.title}</h1>
            <p className="break-words max-w-[80%] mt-2">
              {section.description}
            </p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

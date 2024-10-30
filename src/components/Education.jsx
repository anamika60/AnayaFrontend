import Footer from "@/common/Footer";
import { HighlightText } from "./HighlightText";
import BlurIn from "./ui/blur-in";
import { FadeText } from "./ui/fade-text";
import WordPullUp from "./ui/word-pull-up";
import {
    Code,
    BarChart, 
    Paintbrush,
    FileText, 
    Lock, 

    CheckSquare,
} from "lucide-react";
import { Reviews } from "./Reviews";
import { Business } from "./Business";
import { FlowSection } from "./FlowSection";

export const Education = () => {
    const sections = [
        {
            title: "Programming Fundamentals",
            img: "https://www.lably.org/img/v_lab_1.png",
            icon: Code,
            description:
                "Learn the core concepts of programming to build a strong foundation for your coding journey.",
            subDescriptions: ["Variables", "Control Structures", "Data Types", "Functions", "Error Handling"],
        },
        {
            title: "Data Science",
            img: "https://www.lably.org/img/undraw_programmer_re_owql.svg",
            icon: BarChart, // Updated icon
            description:
                "Dive into data analysis, machine learning, and statistical modeling to make data-driven decisions.",
            subDescriptions: ["Data Visualization", "Statistical Analysis", "Machine Learning", "Data Cleaning"],
        },
        {
            title: "Graphic Designing",
            img: "https://www.websitevidya.com/wp-content/uploads/2023/12/Write-for-Us.svg",
            icon: Paintbrush, // Updated icon
            description:
                "Explore design principles and tools to create visually appealing graphics and user interfaces.",
            subDescriptions: ["Color Theory", "Typography", "User Experience (UX)", "Branding"],
        },
        {
            title: "Content Creation",
            img: "https://gitcs-brain.vercel.app/assets/undraw_organizing_projects_re_9p1k-CPZZyLzZ.svg",
            icon: FileText, // Updated icon
            description:
                "Master the art of creating engaging content across various platforms to reach your audience effectively.",
            subDescriptions: ["Blogging", "Video Editing", "Social Media", "SEO"],
        },
        {
            title: "Cybersecurity",
            img: "https://gitcs-brain.vercel.app/assets/charts-QbmgwRPr.svg",
            icon: Lock, // Updated icon
            description:
                "Understand the principles of protecting systems and networks from digital attacks and breaches.",
            subDescriptions: ["Network Security", "Encryption", "Threat Detection", "Incident Response"],
        },
        {
            title: "Government Exams",
            img: "https://gitcs-brain.vercel.app/assets/undraw_steps_re_odoy-CxsjxMF0.svg",
            icon: CheckSquare, // Updated icon
            description:
                "Prepare effectively for government examinations with comprehensive study resources and strategies.",
            subDescriptions: ["SSC", "SGL", "UPSC", "Bank Exam"], // Updated subDescriptions
        }
        
    ];

    return (
        <div className="flex flex-col gap-5 w-full min-h-screen">
            <div className="bg-blue-900 text-white w-full flex flex-col justify-center p-4 md:h-[640px]">
                <div className="flex justify-between lg:flex-row flex-col items-center md:w-[85%] w-full gap-5 m-auto">
                    <div className="flex flex-col gap-8 mt-20 mb-20">
                        <WordPullUp
                            words="Transform Your Future with Quality Education"
                            className="text-5xl font-bold text-left max-w-3xl break-words"
                        />
                        <div className="max-w-2xl">
                            <FadeText
                                text="Our educational programs empower students with the skills and knowledge needed to excel in their careers. From foundational courses to advanced training, we offer tailored pathways to help you achieve your academic goals."
                                direction="left"
                            />
                        </div>
                        <div className="flex gap-3 flex-wrap items-center">
                            <BlurIn
                                word="Enroll Now"
                                className="bg-black py-3 rounded-md flex gap-2 justify-center items-center px-8"
                            />
                            <BlurIn
                                word="Discover Courses"
                                className="border bg-white text-black flex justify-center gap-4 items-center py-3 rounded-md px-8"
                            />
                        </div>
                    </div>
                    <img
                        src="https://gitcs-brain.vercel.app/assets/undraw_financial_data_re_p0fl-DJWMj5fG.svg"
                        alt="Quality Education"
                        className="md:w-1/2 w-96"
                    />
                </div>
            </div>

            <div className="flex justify-center flex-col gap-8 items-center p-9">
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

            <Reviews />
            <div>
                <Business />
                <Footer />
            </div>
        </div>
    );
};

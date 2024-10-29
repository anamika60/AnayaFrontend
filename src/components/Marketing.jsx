import { Banknote, Code, Coins, Component, Database, FolderCode, GitBranch, LucideAward, PiggyBank, Server, ShoppingBag } from "lucide-react";
import BlurIn from "./ui/blur-in";
import { FadeText } from "./ui/fade-text";
import WordPullUp from "./ui/word-pull-up";


const Marketing = () => {

    const sections = [
        {
          title: "Social Media Marketing",
          icon: Code,
          description:
            "Accelerate your marketing process with our comprehensive social media tools, designed to create responsive and interactive user interfaces.",
          subDescriptions: ["Content Marketing", "Search Engine Optimization", "Email Marketing", "PPC Advertising", "Display Advertising"],
        },
        {
          title: "Marketing Analytics",
          icon: Server,
          description:
            "Leverage powerful analytics frameworks to build scalable and efficient marketing strategies, handling business logic and data integration seamlessly.",
          subDescriptions: ["Google Analytics", "Social Media Insights", "A/B Testing", "Conversion Tracking"],
        },
        {
          title: "Digital Strategy",
          icon: FolderCode,
          description:
            "Create cutting-edge digital strategies for your brand with our marketing tools, offering streamlined workflows for faster deployment.",
          subDescriptions: ["KPI Development", "Content Strategy", "SEO Optimization", "Brand Positioning"],
        },
        {
          title: "Email Marketing",
          icon: Database,
          description:
            "Manage, organize, and optimize your email campaigns efficiently with our email marketing systems, ensuring high engagement and scalability.",
          subDescriptions: ["Mailchimp", "Campaign Monitor", "Email Segmentation", "Automated Campaigns"],
        },
        {
          title: "PPC Advertising",
          icon: Component,
          description:
            "Utilize proven PPC strategies to architect robust and maintainable advertising campaigns, ensuring budget efficiency and best practices.",
          subDescriptions: ["Google Ads", "Facebook Ads", "Retargeting", "Bid Management"],
        },
        {
          title: "Display Advertising",
          icon: GitBranch,
          description:
            "Improve your brand visibility with our display advertising tools, allowing for seamless integration and targeted reach in shared markets.",
          subDescriptions: ["Banner Ads", "Native Ads", "Programmatic Advertising", "Ad Networks"],
        },
      ];
      
      
      
  return (
    <div className="flex flex-col gap-5 w-full min-h-screen">
    <div className="bg-yellow-600 text-white w-full flex flex-col justify-center p-4 md:h-[640px]">
      <div className="flex justify-between lg:flex-row flex-col items-center md:w-[85%] w-full gap-5 m-auto">
        <div className="flex flex-col gap-8 mt-20 mb-20">
          <WordPullUp
            words="Comprehensive Marketing Insights and Analytics"
            className="text-5xl font-bold text-left max-w-3xl break-words"
          />
          <div className="max-w-2xl">
            <FadeText
              text="Unlock the full potential of your campaigns with Marketing Insights. Our comprehensive tool within the CRM provides detailed analytics, audience segmentation, and performance tracking to help you refine your strategies and drive impactful results. Analyze trends, optimize outreach, and make data-driven decisions to elevate your marketing efforts."
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
              className="border border-white text-black bg-white flex justify-center gap-4 items-center py-3 rounded-md px-8"
            />
          </div>
        </div>
        <img src="https://gitcs-brain.vercel.app/assets/undraw_business_chat_re_gg4h-DPWl3MTZ.svg" alt="HR Background" className="md:w-1/2 w-96" />
      </div>
    </div>


    <div className="flex justify-center flex-col gap-8 items-center p-9">
        <h1 className="text-center text-4xl font-bold md:text-6xl mb-5">
          What Brain Brings To The Table
        </h1>
        <div className="grid lg:grid-cols-3 md:max-w-[80%] md:grid-cols-2 grid-cols-1 gap-4">
          {sections.map((data, i) => (
            <div
              key={i}
              className="p-8 rounded-md border border-black/10 hover:-translate-y-4 hover:border-pink-600 hover:bg-gray-100 duration-200"
            >
              <data.icon size={50} className="mb-6" />
              <h1 className="text-2xl font-bold">{data.title}</h1>
              <p className="break-words max-w-[80%] mt-2">{data.description}</p>
            </div>
          ))}
        </div>

        

    </div>
      </div>
    
  )
}

export default Marketing

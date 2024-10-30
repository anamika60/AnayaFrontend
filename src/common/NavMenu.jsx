import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Briefcase,
  Computer,
  FileText,
  Folder,
  Laptop,
  Lightbulb,
  TabletSmartphone,
  Users,
  Share2,
  Search,
  Mail,
  BarChart,
  BookOpen,
  Code,
  PenTool,
  Brain,
  Globe,
  Calculator,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = {
  WEB: [
    {
      title: "Frontend Development",
      href: "/web",
      description:
        "Build interactive user interfaces with HTML, CSS, and JavaScript.",
      icon: <Computer className="h-4 w-4" />,
    },
    {
      title: "Backend Development",
      href: "/web",
      description:
        "Develop server-side logic and APIs using Node.js, Python, or PHP.",
      icon: <Briefcase className="h-4 w-4" />,
    },
  ],
  ANDROID: [
    {
      title: "Mobile App Development",
      href: "/web",
      description: "Create mobile applications for iOS and Android platforms.",
      icon: <TabletSmartphone className="h-4 w-4" />,
    },
    {
      title: "Cross-Platform Development",
      href: "/web",
      description:
        "Build apps that run on multiple platforms with frameworks like React Native.",
      icon: <Laptop className="h-4 w-4" />,
    },
  ],
  SOFTWARE: [
    {
      title: "Software Design Patterns",
      href: "/web",
      description:
        "Implement reusable solutions for common software design problems.",
      icon: <Lightbulb className="h-4 w-4" />,
    },
    {
      title: "Agile Methodologies",
      href: "/web",
      description:
        "Adopt Agile practices for iterative and incremental software development.",
      icon: <Users className="h-4 w-4" />,
    },
  ],
  DATABASE: [
    {
      title: "Database Design",
      href: "/web",
      description:
        "Create and optimize database structures for efficient data storage.",
      icon: <Folder className="h-4 w-4" />,
    },
    {
      title: "SQL & NoSQL Databases",
      href: "/web",
      description: "Manage data using relational and non-relational databases.",
      icon: <FileText className="h-4 w-4" />,
    },
  ],
};

const marketingCategories = {
  SOCIAL: [
    {
      // title: "Social Media Marketing",
      // href: "/digital-marketing",
      // description: "Master social media platforms to grow your brand presence.",
      // icon: <Share2 className="h-4 w-4" />,

      title: "Social Media Marketing",
      href: "/digital-marketing",
      description: "Master social media platforms to grow your brand presence.",
      icon: <Share2 className="h-4 w-4" />
    },
    {
      title: "Content Marketing",
      href: "/digital-marketing",
      description:
        "Create engaging content that drives traffic and conversions.",
      icon: <PenTool className="h-4 w-4" />,
    },
  ],
  SEO: [
    // {
    //   title: "Search Engine Optimization",
    //   href: "/digital-marketing",
    //   description: "Optimize your website for better search engine rankings.",
    //   icon: <Search className="h-4 w-4" />,
    // },
    {
      title: "Search Engine Optimization",
      href: "/digital-marketing",
      description: "optimize your website for better search engine rankings.",
      icon: <Search className="h-4 w-4"/>

    },
    {
      title: "Email Marketing",
      href: "/digital-marketing",
      description: "Build effective email campaigns to engage your audience.",
      icon: <Mail className="h-4 w-4" />,
    },
  ],
  PAID: [
    {
      title: "PPC Advertising",
      href: "/digital-marketing",
      description:
        "Create and manage paid advertising campaigns across platforms.",
      icon: <BarChart className="h-4 w-4" />,
    },
    {
      title: "Display Advertising",
      href: "/digital-marketing",
      description: "Design and optimize display ad campaigns for better ROI.",
      icon: <Laptop className="h-4 w-4" />,
    },
  ],
  ANALYTICS: [
    {
      title: "Marketing Analytics",
      href: "/digital-marketing",
      description: "Track and analyze marketing performance metrics.",
      icon: <BarChart className="h-4 w-4" />,
    },
    {
      title: "Digital Strategy",
      href: "/digital-marketing",
      description: "Develop comprehensive digital marketing strategies.",
      icon: <Lightbulb className="h-4 w-4" />,
    },
  ],
};

const educationCategories = {
  TECH: [
    {
      title: "Programming Fundamentals",
      href: "/education",
      description: "Learn the basics of computer programming and coding.",
      icon: <Code className="h-4 w-4" />,
    },
    {
      title: "Data Science",
      href: "/education",
      description: "Master data analysis and machine learning techniques.",
      icon: <Brain className="h-4 w-4" />,
    },
  ],
  LANGUAGES: [
    {
      title: "Language Learning",
      href: "/education",
      description: "Learn new languages with interactive lessons.",
      icon: <Globe className="h-4 w-4" />,
    },
    {
      title: "Business English",
      href: "/education",
      description: "Improve your professional English communication skills.",
      icon: <BookOpen className="h-4 w-4" />,
    },
  ],
  BUSINESS: [
    {
      title: "Business Management",
      href: "/education",
      description: "Learn essential business management and leadership skills.",
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      title: "Digital Marketing",
      href: "/education",
      description: "Master modern digital marketing strategies and tools.",
      icon: <Share2 className="h-4 w-4" />,
    },
  ],
  CREATIVE: [
    {
      title: "Graphic Design",
      href: "/education",
      description:
        "Learn professional graphic design and visual communication.",
      icon: <Palette className="h-4 w-4" />,
    },
    {
      title: "Content Creation",
      href: "/education",
      description: "Master content creation for digital platforms.",
      icon: <PenTool className="h-4 w-4" />,
    },
  ],
};

const NavMenu = () => {
  const [activeCategory, setActiveCategory] = useState("WEB");
  const [activeMarketingCategory, setActiveMarketingCategory] =
    useState("SOCIAL");
  const [activeEducationCategory, setActiveEducationCategory] =
    useState("TECH");

  return (
    <NavigationMenu>
      <NavigationMenuList className="px-12 flex gap-5 flex-row items-center">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md">
            Software Apps
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="flex p-5 w-[635px]">
              <ul className="w-1/3">
                {Object.keys(categories).map((category) => (
                  <li key={category}>
                    <a
                      href={categories[category][0].href}
                      onMouseEnter={() => setActiveCategory(category)}
                      className="block hover:bg-black/10 hover:rounded-md w-full p-2 text-left text-sm hover:text-accent-foreground"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="w-2/3">
                <ul className="grid gap-3 px-4 w-full grid-cols-1">
                  {categories[activeCategory]?.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      icon={component.icon}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md">
            Digital Marketing
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className=" flex p-5 w-[635px]">
              <ul className="w-1/3">
                {Object.keys(marketingCategories).map((category) => (
                  <li key={category}>
                    <a
                      href={marketingCategories[category][0].href}
                      onMouseEnter={() => setActiveMarketingCategory(category)}
                      className="block hover:bg-black/10 hover:rounded-md w-full p-2 text-left text-sm hover:text-accent-foreground"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="w-2/3">
                <ul className="grid gap-3 px-4 w-full grid-cols-1">
                  {marketingCategories[activeMarketingCategory]?.map(
                    (component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        icon={component.icon}
                      >
                        {component.description}
                      </ListItem>
                    )
                  )}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md">
            Educational Courses
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex p-5 w-[635px]">
              <ul className="w-1/3">
                {Object.keys(educationCategories).map((category) => (
                  <li key={category}>
                    <a
                      href={educationCategories[category][0].href}
                      onMouseEnter={() => setActiveEducationCategory(category)}
                      className="block hover:bg-black/10 hover:rounded-md w-full p-2 text-left text-sm hover:text-accent-foreground"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="w-2/3">
                <ul className="grid gap-3 px-4 w-full grid-cols-1">
                  {educationCategories[activeEducationCategory]?.map(
                    (component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        icon={component.icon}
                      >
                        {component.description}
                      </ListItem>
                    )
                  )}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/about" className="text-md font-medium">
            <Button variant="link" className="text-base">
              About
            </Button>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/contact" className="text-md font-medium">
            <Button variant="link" className="text-base">
              Contact Us
            </Button>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef(
  ({ className, title, children, icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "flex items-start gap-3 p-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors",
              className
            )}
            {...props}
          >
            <div className="mt-1">{icon}</div>
            <div>
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="text-xs leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default NavMenu;

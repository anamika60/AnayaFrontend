import { Check } from "lucide-react";
import BoxReveal from "./ui/box-reveal";

export const FlowSection = ({
  title,
  img,
  description,
  index,
  color,
}) => {
  return (
    <>
      <section
        className={`flex items-center p-2 flex-col md:flex-row md:p-4 gap-12 md:gap-24 max-w-[100%] mx-auto justify-center mt-20 mb-10 ${
          index % 2 === 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="w-48 md:w-1/3">
          <BoxReveal boxColor={color}>
            <img src={img} alt={title} />
          </BoxReveal>
        </div>

        <div className="flex gap-6 flex-col">
          <BoxReveal boxColor={color}>
            <h1 className="md:text-4xl text-2xl md:pb-3 font-bold text-left">
              {title}
            </h1>
          </BoxReveal>
          <BoxReveal duration={0.5} boxColor={color}>
            <p className="max-w-md text-md text-left opacity-70">
              {description}
            </p>
          </BoxReveal>

          {/* <ul className="flex flex-col gap-2 items-start">
            {[...Array(5)].map((_, idx) => (
              <BoxReveal key={idx} duration={0.7} boxColor={color}>
                <div className="flex gap-3 items-center break-words flex-wrap">
                  <div className="bg-green-500/10 p-2 rounded-full">
                    <Check size={10} />
                  </div>
                  <li>Employee Database</li>
                </div>
              </BoxReveal>
            ))}
          </ul> */}
        </div>
      </section>
      <hr className="w-full bg-black h-[1px]" />
    </>
  );
};

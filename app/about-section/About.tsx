import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";


import React from "react";

interface ToolCardProps {
  title: string;
  tools: string[];
}

const ToolCard: React.FC<ToolCardProps> = ({ title, tools }) => (
  <div className="bg-[#e4ded7] p-4 rounded-lg shadow-lg mb-4">
    <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
    <ul className="list-disc text-black ml-6">
      {tools.map((tool, index) => (
        <li key={index} className="mb-2">{tool}</li>
      ))}
    </ul>
  </div>
);

const About = () => {
  const frontendTools = [
    "JavaScript(ES6+), React, Next.js, TypeScript, Redux, Angular, HTML5, Tailwind CSS, Material UI, Bootstrap, Chakra UI"
  ];
  const backendLibraries = [
    "Java, Python, C++, C, SQL, REST APIs, Node.js, Express.js, MongoDB, Firebase, Google Cloud Platform, AWS, Docker, Kubernetes"
  ];
  const designTools = [
    "Git, GitHub, GitLab, Bitbucket, Jira, Confluence, Figma, Adobe Photoshop, Adobe Illustrator"
  ];

  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "CODING THE FUTURE, ONE ALGORITHM AT A TIME."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "My passion lies in solving problems and creating real world solutions. I’m a software engineer based in Vancouver, BC specializing in building exceptional websites, applications, and everything in between."
              }
            />
            <AnimatedBody
              text={
                "Whether I’m designing a sleek user interface or building a robust backend, I’m always looking for ways to push the boundaries of what’s possible with technology."
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "When I’m not coding, you’ll find me playing sports, watching movies, hanging out with friends, or listening to music."
              }
            />
            <AnimatedBody
              text={
                "I am always open to new opportunities and collaborations. If you’re interested in working together, feel free to reach out! I’d love to hear from you."
              }
            />
            <AnimatedBody
              text={
                "Lastly thanks for visiting my page or in other words my digital footprint! I hope you find it interesting and informative. "
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4">
              <ToolCard title="Frontend " tools={frontendTools} />
              <ToolCard title="Backend" tools={backendLibraries} />
              <ToolCard title="Tools" tools={designTools} />
            </div>
        </div>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text="A few songs I can recommend if you're looking for some fresh tunes :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div>
      </div>
    </section>
  );
};

export default About;

import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import profile from "../../public/profile.webp";
import "./hero.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[80vh] w-full items-stretch justify-center bg-cover bg-center py-0 sm:h-[90vh]  md:h-[100vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <div className="noise"></div>
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color"></motion.div>

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        <div>
          <Link
            href="https://drive.google.com/file/d/1DJWXASTvNned24GMuvy_A8M2KDzLspA7/view?usp=sharing"
            target="_blank"
            aria-label="View Resume"
          >
            <motion.button
              className="hidden rounded-md border-2 border-[#e4ded7] py-2 px-4 text-[14px] font-semibold text-[#e4ded7] sm:block  md:text-[16px] lg:block"
              variants={bodyAnimation}
            >
              VIEW RESUME
            </motion.button>
          </Link>
        </div>

        <div className="flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14">
          <Link
            href="https://github.com/Jessy-Chahal"
            target="_blank"
            aria-label="View GitHub Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-lg md:text-xl"
            />
            </motion.p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/jessy-chahal/"
            target="_blank"
            aria-label="View LinkedIn Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-lg md:text-xl"
            />
            </motion.p>
          </Link>
          <Link
            href="mailto:jessychahal432@gmail.com"
            target="_blank"
            aria-label="Send Email"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-lg md:text-xl"
            />
            </motion.p>
          </Link>
        </div>
      </div>

      <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40 ">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}   `}
        >
          <AnimatedWords
            title="JESSY CHAHAL"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />
        </div>
      </div>
        {/* Downward arrow */}
        <div className="absolute bottom-10 w-full text-center">
        <motion.span
          className="text-[#e4ded7] text-3xl block animate-bounce"
          whileHover={{ scale: 1.1 }}
        >
          {/* You can replace this with your preferred arrow icon or SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mx-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a.75.75 0 01.75.75V13l3.223-3.223a.75.75 0 111.06 1.061l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06L9.25 13V3.75A.75.75 0 0110 3z"
              clipRule="evenodd"
            />
          </svg>
        </motion.span>
      </div>
    </motion.section>
  );
};

export default Hero;

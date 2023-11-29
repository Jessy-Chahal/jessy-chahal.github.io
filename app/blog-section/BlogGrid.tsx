import BlogCard from "./BlogCard";
import { blogDetails } from "./blogDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";

const Blog = () => {
  return (
    <section className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-32">
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        {" "}
        <AnimatedWords2
          title={"Projects"}
          style={`flex max-w-[500px] flex-col items-start text-left text-[126px] ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[160px] md:text-[190px] lg:text-center lg:text-[215.04px]`}
        />
        <AnimatedBody
          text="Below are some of my recent projects and contributions to open source."
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
        />
      </div>
      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-wrap justify-center">
        {blogDetails.map((blog, index) => (
          <div key={index} className="w-full md:w-1/3 p-4">
            <BlogCard
              key={index}
              title={blog.title}
              image={blog.image}
              url={blog.url}
              date={blog.date}
              available={blog.available}
            />
          </div>
        ))}
      </div>


    </section>
  );
};

export default Blog;

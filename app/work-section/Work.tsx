import ProjectGrid from "./ProjectGrid";

const Work = () => {
  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#e4ded7] bg-cover bg-center py-16 md:py-20 lg:py-20"
      id="work"
    >

      <h1 className="mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#0E1016] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]">
        WORK EXPERIENCE
      </h1>

      <ProjectGrid />
    </section>
  );
};

export default Work;

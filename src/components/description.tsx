function Description() {
  return (
    <div>
      <div>
        <div className="font-bold flex mb-5">
          <h2 id="about" className="text-[#70FF00] pb-5 text-2xl  ">
            aboutMe
          </h2>
          <p className="text-[#E0E0E0] text-2xl">( )</p>
        </div>

        <p className="text-[#F2F2F2] font-normal text-sm leading-8 ">
          I am a self-taught developer eager to jumpstart my career in web
          development. My coding journey began with Visual Basic in highschool
          through to Java at TAFE. After a brief tangent in the publishing and
          editing industry, I am looking for a career shift into web
          development. I completed the HTML, CSS, Javascript, and React modules,
          respectively, from FreeCodeCamp. From there, I learnt Typescript
          independently and began to practice React using functional components
          and hooks by building projects from Frontendmentor, using their
          provided Figma designs as a guide to create functional, responsive web
          apps. Currently, I am working on a 'manuscript management' app that
          helps in my current publishing and editing work (code available on
          request). I also have experience using Git and Tailwind.
        </p>
      </div>
      <div>
        <div className="bg-[#4F4F4F] my-10 shadow-md rounded-md font-courier flex justify-between items-center p-3 w-2/3 mx-auto lg:w-[300px]">
          <div>
            <h3 className="text-white font-bold">Front-end Developer</h3>
            <a href="#projects" className="text-[#70FF00] underline">
              Projects
            </a>
          </div>
          <span className="text-[#70FF00]">&lt;/&gt;</span>
        </div>
      </div>
    </div>
  );
}

export default Description;

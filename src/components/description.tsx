function Description() {
  return (
    <div>
      <div>
        <div className="font-bold flex mb-5">
          <h2 id="about" className="text-[#70FF00] pl-10 pb-5 text-2xl  ">
            aboutMe
          </h2>
          <p className="text-[#E0E0E0] text-2xl">( )</p>
        </div>

        <p className="text-[#F2F2F2] font-normal text-sm leading-8 mx-5">
          I am a self-taught developer eager to get started with a career in web
          development. My coding journey began with Visual Basic in highschool
          through to Java at TAFE. After a brief tangent in the publishing and
          editing industry, I am eager to make a career shift into web
          development. I started out by following the curriculum on
          FreeCodeCamp, and after finishing their class-based React course, I
          chose to independently teach myself the functional approach to React
          to stay current. Since then, I have built out a 'manuscript
          management' app that helps with my work in publishing and editing,
          learnt Typescript, honed my skills with css frameworks such as
          Tailwind, and learnt to apply professional designs using Figma.
        </p>
      </div>
      <div>
        <div className="bg-[#4F4F4F] my-10 shadow-md rounded-md font-courier flex justify-between items-center p-3 w-2/3 mx-auto">
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

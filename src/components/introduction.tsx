function Introduction() {
  return (
    <div className="w-full mx-auto my-10 flex flex-col justify-center items-center font-bold text-center">
      <div className="text-[#E0E0E0]">
        <p>Hello, I am</p>
        <div className="text-[#70FF00] my-20  text-3xl  tracking-widest leading-10">
          <h1>&lt; Shayne</h1>
          <h1>Geilman /&gt;</h1>
        </div>
        <p className="text-3xl my-10">Front-end Developer</p>
        <div className="text-[#828282] flex justify-between">
          <div className="flex text-left">
            <span className="text-5xl ">1</span>
            <div className="block font-normal uppercase">
              <p>years of </p> <p>experience</p>
            </div>
          </div>
          <div className="flex text-left">
            <span className="text-5xl pr-1">4</span>
            <div className="block font-normal uppercase">
              <p>Projects </p>
              <p>completed</p>
            </div>
          </div>
        </div>
      </div>
      <div id="portfolio-image"></div>
    </div>
  );
}

export default Introduction;

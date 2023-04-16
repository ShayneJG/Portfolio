function Skills() {
  return (
    <div className="py-5">
      <div className="font-bold flex mb-5">
        <h1 id="projects" className="text-[#70FF00] pb-5 text-2xl  ">
          skills
        </h1>
        <p className="text-[#E0E0E0] text-2xl">( )</p>
      </div>
      <div>
        <div id="left">
          <ul className="w-full flex flex-wrap justify-center">
            {skillArray.map((item: skills, index) => {
              return (
                <ListCreator image={item.image} text={item.text} key={index} />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

type skills = {
  image: string;
  text: string;
};

const skillArray: skills[] = [
  { image: "assets/javascript logo.png", text: "Javascript" },
  { image: "assets/typescript-original 2.png", text: "Typescript" },
  { image: "assets/HTML5_Badge_64.png", text: "HTML" },
  { image: "assets/css logo.png", text: "CSS" },
  { image: "assets/react logo.png", text: "React" },
  { image: "assets/mongo logo.png", text: "MongoDB" },
  { image: "assets/node logo.png", text: "NodeJS" },
  { image: "assets/python-original 1.png", text: "Python" },
];

function ListCreator(item: skills) {
  return (
    <li className="m-auto w-28" key={item.text}>
      <img className="h-10 m-auto" src={item.image}></img>
      <p className="text-white text-center font-bold">{item.text}</p>
    </li>
  );
}

export default Skills;

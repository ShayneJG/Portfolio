function Skills() {
  return (
    <div className="bg-[#161616]">
      <h2>skills()</h2>
      <div>
        <div id="left">
          <ul className="w-full flex">
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
  { image: "src/assets/javascript logo.png", text: "Javascript" },
  { image: "src/assets/typescript-original 2.png", text: "Typescript" },
  { image: "src/assets/HTML5_Badge_64.png", text: "HTML" },
  { image: "src/assets/css logo.png", text: "CSS" },
  { image: "src/assets/react logo.png", text: "React" },
  { image: "src/assets/mongo logo.png", text: "MongoDB" },
  { image: "src/assets/node logo.png", text: "NodeJS" },
  { image: "src/assets/python-original 1.png", text: "Python" },
];

function ListCreator(item: skills) {
  return (
    <li className="m-auto" key={item.text}>
      <img className="h-10 m-auto" src={item.image}></img>
      <p className="text-white">{item.text}</p>
    </li>
  );
}

export default Skills;

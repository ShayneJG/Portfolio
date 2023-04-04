function Skills() {
  return (
    <div>
      <h2>skills()</h2>
      <div>
        <div id="left">
          <ul>
            {skillArray.map((item: skills) => {
              return <ListCreator image={item.image} text={item.text} />;
            })}
          </ul>
        </div>
        <div id="right"></div>
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
];

function ListCreator(item: skills) {
  return (
    <li key={item.text}>
      <img src={item.image}></img>
      <p>{item.text}</p>
    </li>
  );
}

export default Skills;

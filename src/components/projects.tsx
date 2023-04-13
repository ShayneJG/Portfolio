import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type Project = {
  image: string;
  URL: string;
  description: string;
  tools: string[];
};
let projects: Project[] = [
  {
    image: "src/assets/shaynejg.github.io_Dictionary-App-TS-React_.png",
    URL: "https://github.com/ShayneJG/Dictionary-App-TS-React",
    description: "Dictionary App",
    tools: ["TS", "React", "Tailwind"],
  },
  {
    image:
      "src/assets/shaynejg.github.io_Interactive-card-details-form-React_.png",
    URL: "https://github.com/ShayneJG/Interactive-card-details-form-React",
    description: "Credit Card Form",
    tools: ["JS", "React", "Tailwind"],
  },
  {
    image:
      "src/assets/shaynejg.github.io_Interactive-Rating-Component-React_.png",
    URL: "https://github.com/ShayneJG/Interactive-Rating-Component-React",
    description: "Rating Component",
    tools: ["JS", "CSS", "React"],
  },
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3, itemsFit: "contain" },
};

function Projects() {
  return (
    <div className="h-80 mt-10 mb-52 ">
      <div className="font-bold flex mb-5">
        <h1 id="projects" className="text-[#70FF00] pb-5 text-2xl  ">
          projects
        </h1>
        <p className="text-[#E0E0E0] text-2xl">( )</p>
      </div>

      <div className="flex w-4/5 mx-auto items-center h-full">
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          items={projects.map((i) => {
            return <Item details={i} key={i.description} />;
          })}
        />
      </div>
    </div>
  );
}

interface ItemProps {
  details: Project;
}

function Item({ details }: ItemProps) {
  return (
    <div className="relative mx-2 rounded-lg hover:border hover:border-[#70FF00]  hover:rounded-lg group ">
      <a href={details.URL} target="_blank">
        <img
          className="rounded-lg h-full w-full group-hover:opacity-50"
          src={details.image}
        />
        <img
          src="src/assets/open-in-new 1.png"
          alt="popout img"
          className="hidden group-hover:block absolute top-0 left-0 right-0 bottom-0 m-auto h-1/4"
        />
        <span className="absolute bottom-0 text-white font-bold bg-[#4C4C4CA8]/50 w-full py-2 rounded-b-lg text-center group-hover:opacity-50">
          <p className="pb-3 ">{details.description}</p>
          <div className="flex justify-between mx-5">
            {details.tools.map((tool) => {
              return <p key={tool}>{tool}</p>;
            })}
          </div>
        </span>
      </a>
    </div>
  );
}
export default Projects;

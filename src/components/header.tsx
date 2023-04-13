import { useState } from "react";

function Header() {
  const [contact, setContact] = useState<boolean>(false);
  return (
    <div className="flex items-center flex-col mt-3 lg:flex-row lg:justify-between">
      <div className="flex font-bold text-lg  lg:text-4xl lg:w-1/3">
        <h1 className=" text-[#828282] ">SHAYNE </h1>
        <h1 className="text-[#F2F2F2] ">GEILMAN</h1>
      </div>
      <nav
        id="navbar"
        className="flex justify-center sm:justify-between w-full lg:w-1/3 lg:justify-center text-white text-md md:text-lg font-bold "
      >
        <a className="hover:text-[#70FF00] mx-2 lg:mx-5" href="#about">
          About
        </a>
        <a className="hover:text-[#70FF00] mx-2 lg:mx-5" href="#skills">
          Skills
        </a>
        <a className="hover:text-[#70FF00] mx-2 lg:mx-5" href="#projects">
          Projects
        </a>
      </nav>
      <div
        id="socials"
        className="flex w-full lg:w-1/3 justify-center sm:justify-between lg:justify-end text-white text-md md:text-lg font-bold flex-wrap  items-center "
      >
        <a
          className="flex items-center hover:text-[#70FF00] mx-2 lg:mx-5"
          href="https://www.linkedin.com/in/shayne-geilman-b0731a96/"
          target="_blank"
        >
          <img
            className="h-4 pr-1 "
            src="src/assets/linkedIn.png"
            alt="linkedinlogo"
          />
          LinkedIn
        </a>
        <a
          className="flex items-center hover:text-[#70FF00] mx-2 lg:mx-5"
          href="https://github.com/ShayneJG"
          target="_blank"
        >
          <img
            className="h-4 pr-1"
            src="src/assets/github.png"
            alt="githublogo"
          />
          Github
        </a>
        <div className="bg-gradient-to-t from-white to-[#70FF008C] rounded-md p-1 hover:text-[#70FF00] hover:cursor-pointer hover:bg-[#70FF008C]">
          <a
            onClick={() => {
              setContact(true);
            }}
            className="flex items-center bg-black px-2 rounded-md"
          >
            <img
              className="h-3 pr-1"
              src="src/assets/contact.png"
              alt="contactmelogo"
            />
            Contact me
          </a>
        </div>
        {contact && (
          <form
            action="https://formspree.io/f/mrgvlapv"
            method="POST"
            id="contact"
            className="absolute flex flex-col  rounded-lg bg-black  left-0 right-0 bottom-0 top-20 mx-auto p-5 h-1/2 justify-between max-w-max	shadow-xl shadow-[#70FF00]/25"
          >
            <div>
              <label className="block">
                Name
                <input
                  name="name"
                  required
                  className="w-full text-black rounded-md pl-2"
                  type="text"
                />
              </label>
            </div>
            <div>
              <label className="block">
                Email
                <input
                  required
                  name="email"
                  className="w-full text-black rounded-md pl-2"
                  type="email"
                />
              </label>
            </div>
            <div>
              <label className="block">
                Contact number (optional)
                <input
                  name="number"
                  className="w-full text-black rounded-md pl-2"
                  type="number"
                />
              </label>
            </div>
            <div>
              <label className="block">
                Comments
                <textarea
                  required
                  name="comments"
                  className="w-full text-black rounded-md pl-2"
                ></textarea>
              </label>
            </div>
            <div className="flex justify-between mx-20">
              <button
                className="m-3 border rounded-md bg-slate-700 p-2"
                onClick={() => {
                  setContact(false);
                }}
              >
                Cancel
              </button>
              <button
                className="m-3 border rounded-md bg-slate-700 p-2"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Header;

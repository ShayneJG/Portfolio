import { useState } from "react";

function Header() {
  const [contact, setContact] = useState<boolean>(false);
  return (
    <div className="flex items-center flex-col">
      <div className="flex">
        <h1 className="text-lg text-[#828282] font-bold">SHAYNE </h1>
        <h1 className="text-lg text-[#F2F2F2] font-bold">GEILMAN</h1>
      </div>
      <nav
        id="navbar"
        className="flex w-full px-5 justify-between text-white text-lg font-bold "
      >
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </nav>
      <div
        id="socials"
        className="flex w-full px-5 mt-3 justify-between text-white text-lg font-bold flex-wrap  items-center "
      >
        <a
          className="flex items-center"
          href="https://www.linkedin.com/in/shayne-geilman-b0731a96/"
          target="_blank"
        >
          <img
            className="h-4 pr-1"
            src="src/assets/linkedIn.png"
            alt="linkedinlogo"
          />
          LinkedIn
        </a>
        <a
          className="flex items-center"
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
        <div className="bg-gradient-to-t from-white to-[#70FF008C] rounded-md p-1">
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
            className="absolut flex flex-col border-2 rounded-lg bg-black border-[#70FF00] left-0 right-0 bottom-0 mx-5 p-5 top-20 h-1/2 justify-between"
          >
            <div>
              <label className="block mb-2">
                Name
                <input name="name" className="w-full text-black" type="text" />
              </label>
            </div>
            <div>
              <label className="block">
                Email
                <input
                  name="email"
                  className="w-full text-black"
                  type="email"
                />
              </label>
            </div>
            <div>
              <label className="block">
                Contact number (optional)
                <input
                  name="number"
                  className="w-full text-black"
                  type="number"
                />
              </label>
            </div>
            <div>
              <label className="block">
                Comments
                <textarea
                  name="comments"
                  className="w-full text-black"
                ></textarea>
              </label>
            </div>
            <div className="flex justify-between mx-20">
              <button
                onClick={() => {
                  setContact(false);
                }}
              >
                Cancel
              </button>
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Header;

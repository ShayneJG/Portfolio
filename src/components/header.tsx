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
            className="absolute font-normal flex flex-col bg-stone-900  left-0 right-0  top-1/3 mx-auto px-5 py-2 w-full md:w-1/2  shadow-xl shadow-[#70FF00]/25"
          >
            <h1 className="text-center font-bold text-3xl py-2">Contact</h1>
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="w-full my-3 mr-1 ">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  placeholder="Name"
                  name="name"
                  required
                  className="w-full h-8 placeholder:text-white/75 bg-[#333333] text-white rounded-sm pl-2"
                  type="text"
                />
              </div>
              <div className="w-full my-3 mr-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <input
                  placeholder="Email address"
                  id="email"
                  required
                  name="email"
                  className="w-full  placeholder:text-white/75 h-8 bg-[#333333] text-white rounded-sm pl-2"
                  type="email"
                />
              </div>
              <div className="w-full my-3">
                <label htmlFor="number" className="sr-only">
                  Contact number optional
                </label>
                <input
                  placeholder=" number (optional)"
                  id="number"
                  name="number"
                  className="w-full  placeholder:text-white/75 h-8 bg-[#333333] text-white rounded-sm pl-2"
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="comments" className="sr-only">
                Comments
              </label>
              <textarea
                placeholder="Please leave me a message and I will get back to you :)"
                id="comments"
                required
                name="comments"
                className="w-full h-52 lg:h-96 block placeholder:text-white/75 bg-[#333333] text-white rounded-sm pl-2"
              ></textarea>
            </div>
            <div className="flex justify-between my-5 mx-20">
              <button
                className="m-3 border rounded-sm w-1/2 bg-slate-700 p-2"
                onClick={() => {
                  setContact(false);
                }}
              >
                Cancel
              </button>
              <button
                className="m-3 border rounded-sm w-1/2 bg-slate-700 p-2"
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

function Header() {
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
        <a>About</a>
        <a>Skills</a>
        <a>Projects</a>
      </nav>
      <div
        id="socials"
        className="flex w-full px-5 mt-3 justify-between text-white text-lg font-bold flex-wrap"
      >
        <a className="flex">
          <img
            className="h-6"
            src="src/assets/linkedIn.png"
            alt="linkedinlogo"
          />
          LinkedIn
        </a>
        <a className="flex">
          <img className="h-6" src="src/assets/github.png" alt="githublogo" />
          Github
        </a>
        <a className="flex">
          <img
            className="h-6"
            src="src/assets/contact.png"
            alt="contactmelogo"
          />
          Contact me
        </a>
      </div>
    </div>
  );
}

export default Header;

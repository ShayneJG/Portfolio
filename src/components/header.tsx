function Header() {
  return (
    <div className="flex items-center flex-col">
      <div className="flex">
        <h1 className="text-lg text-[#828282] font-bold">SHAYNE </h1>
        <h1 className="text-lg text-[#F2F2F2] font-bold">GEILMAN</h1>
      </div>
      <nav
        id="navbar"
        className="flex w-full px-10 justify-between text-white font-bold "
      >
        <a>About</a>
        <a>Skills</a>
        <a>Projects</a>
      </nav>
      <div id="socials" className="flex w-full px-10 justify-between ">
        <a>LinkedIn</a>
        <a>Github</a>
        <a>Contact Me</a>
      </div>
    </div>
  );
}

export default Header;

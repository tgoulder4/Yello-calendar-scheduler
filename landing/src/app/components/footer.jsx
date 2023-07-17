function Footer() {
  return (
    <footer className="bg-zinc-900 flex justify-between px-[var(--horizPadding)] py-10">
      <img src="/assets/manjo.png" draggable="false" alt="" />
      <div className="flex flex-row justify-around w-2/5 items-center">
        <div className="flex flex-col">
          <a class="" href="">
            About
          </a>
        </div>
        <div className="flex flex-col">
          <a href="">Demo</a>
        </div>
        <div className="flex flex-col">
          <a href="">Sign up</a>
        </div>
        <div className="flex flex-col">
          <a href="">Login</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

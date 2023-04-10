function Navbar({ handleButtonClick, submissionHandler }) {
  return (
    <>
      <nav className="bg-blue-950 pt-2 sticky top-0">
        <section className="flex justify-around sm:flex sm:justify-around">
          <div className="w-1/3 text-2xl text-white pl-12 pt-1 md:float-left">
            <h1>
              <span className="text-3xl text-sky-600">S</span>
              oluteLabs
            </h1>
          </div>
          <button
            onClick={handleButtonClick}
            className="w-38 h-10 text-blue-950 border-solid to-black rounded bg-white ml-2/4 mb-2.5 md:ml-auto md:mr-2 ">
            Add Blog
          </button>
        </section>
      </nav>
    </>
  );
}

export default Navbar;
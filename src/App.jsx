import image from "./assets/athul.jpg";
const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <ul className="nav__items ">
          <h2 className="logo">
            <a href="#">asm</a>
          </h2>
          <li className="hide">
            <a href="#" className="a_txt">
              Home
            </a>
          </li>

          <li className="hide">
            <a href="#" className="a_txt">
              Learnings
            </a>
          </li>
          <li className="hide">
            <a href="#" className="a_txt">
              Projects
            </a>
          </li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 hamBerger"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </ul>
      </div>
    </nav>
  );
};

const Home = () => {
  return (
    <section className="homeSection">
      <div className="home__container">
        <div className="home__img">
          <img src={image} alt="" />
        </div>
        <div className="home__txt">
          <h3 className="main__txt">Hi,👋 I'm Athul S Madhu</h3>
          <h2 className="main__txt">
            a passionate <h1 className="highlight__txt">Frontend Developer</h1>
            with a knack for creating visually appealing and user-friendly
            websites. With a strong foundation in HTML, CSS, and JavaScript, I
            specialize in building responsive and interactive web applications
            using React.js. My goal is to deliver seamless user experiences
            through clean and efficient code.
          </h2>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Home />
      <Home />
    </div>
  );
};

export default App;

import { FaGithub } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { IoMdHeart } from "react-icons/io";
import humans from "../images/humans.png";
import { APP_NAME } from "../utilities/constants";

const About = () => {
  document.title = APP_NAME + "About";
  return (
    <main className="about-page">
      <img alt="Humaaans hard at work." src={humans} alt="" />
      <div className="about-text">
        <div className="main-heading">
          <div className="future-text">
            <h2 className="future-of">The future of</h2>{" "}
            <h2 className="future-today">movies.</h2>
          </div>
          <h2>Today. 🔥</h2>
        </div>
        <h2>better Data Movie Interface</h2>
        <p>
          Our engineers work tirelessly to reinvent the wheel and bring you the
          latest and greatest in movie data you can already find elsewhere on
          the internet. With our proprietary
          Recycling-Other-Peoples-APIs-As-A-Service (ROPAAS) technology, for
          only $59.99 a month you can:
        </p>
        <ul>
          <li>
            <ImSearch className="emoji" /> Discover the latest popular movies
          </li>
          <li>
            <IoMdHeart className="emoji" /> Favourite your.. uh favourite
            movies!
          </li>
          <li>
            <span className="emoji">🤷</span> And much, much more!
          </li>
        </ul>
        <p>
          Check out our code on{" "}
          <a
            className="github-link"
            href="https://github.com/RandyBoBandy92/moviedatabase"
          >
            GitHub! <FaGithub className="social-icon" />
          </a>
        </p>
      </div>
    </main>
  );
};

export default About;

import Header from "../components/Header";
import humans from '../images/humans.png'

const About = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="about-page">
          <img src={humans} alt="" />
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
            <span className="emoji">🔎</span> Discover the latest popular movies
          </li>
          <li>
            <span className="emoji">💖</span> Favourite your.. uh favourite
            movies!
          </li>
          <li>
            <span className="emoji">🤷</span> And much, much more!
          </li>
        </ul>
      </main>
    </div>
  );
};

export default About;

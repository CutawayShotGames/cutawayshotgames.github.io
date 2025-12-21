import { Link } from "react-router-dom";
import csgLogo from "../assets/cutawayshotgames.png";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <div className="logo text-2xl font-bold">
              Cutaway<span className="text-blue-400">Games</span>
            </div>
            <ul className="flex space-x-6" id="nav-links">
              <li>
                <Link
                  to="/"
                  id="home"
                  className="hover:text-blue-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/games"
                  id="games"
                  className="hover:text-blue-300 transition-colors"
                >
                  Our Games
                </Link>
              </li>
              <li>
                <Link
                  to="/software"
                  id="software"
                  className="hover:text-blue-300 transition-colors"
                >
                  Our Software
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  id="team"
                  className="hover:text-blue-300 transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  id="contact"
                  className="hover:text-blue-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8" id="content">
          <img
            src="/assets/cutawayshotgames.png"
            alt="CSG Logo"
            width="200"
            className="block mx-auto my-8"
          />
          <div className="hero text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">
              Welcome to Cutaway Games
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              Games designed to take cutaways from the stress that surrounds us.
            </p>

            <div className="text-gray-700 space-y-4">
              <p>
                Cutaway Games focuses on delivering engaging and immersive
                gaming experiences across various platforms, mainly for mobile
                devices and PC.
              </p>
              <p>
                We prioritise fun and intriguing experiences and unique genres
                to stand out in the gaming market.
              </p>
              <p>
                Consisting of a team of skilled and motivated video game /
                software developers, we work collaboratively to bring our
                creative vision to life. We also act as video game publishers.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="social-links flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-blue-300 transition-colors">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              <i className="fab fa-github text-2xl"></i>
            </a>
          </div>
          <p className="text-center text-gray-400">2025 Cutaway Games</p>
        </div>
      </footer>

      {/* Font Awesome CDN link should be added in your index.html or public/index.html */}
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" /> */}
    </div>
  );
}

export default Home;

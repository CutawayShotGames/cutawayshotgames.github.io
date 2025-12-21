import React from "react";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-700 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <div className="logo text-2xl font-bold">
              Cutaway<span className="text-blue-400">Games</span>
            </div>
            <ul className="flex space-x-6" id="nav-links">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-400 font-semibold"
                      : "hover:text-blue-300 transition-colors"
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/games"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-400 font-semibold"
                      : "hover:text-blue-300 transition-colors"
                  }
                >
                  Our Games
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/software"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-400 font-semibold"
                      : "hover:text-blue-300 transition-colors"
                  }
                >
                  Our Software
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/team"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-400 font-semibold"
                      : "hover:text-blue-300 transition-colors"
                  }
                >
                  Our Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-400 font-semibold"
                      : "hover:text-blue-300 transition-colors"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12" id="content">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-3xl font-bold">CSG</span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="hero max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Welcome to Cutaway Games
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Games designed to take cutaways from the stress that surrounds us.
            </p>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl">
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                Cutaway Games focuses on delivering engaging and immersive
                gaming experiences across various platforms, mainly for mobile
                devices and PC.
              </p>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                We prioritise fun and intriguing experiences and unique genres
                to stand out in the gaming market.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Consisting of a team of skilled and motivated video game /
                software developers, we work collaboratively to bring our
                creative vision to life. We also act as video game publishers.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="social-links flex justify-center space-x-6 mb-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <p className="text-gray-400">2025 Cutaway Games</p>
        </div>
      </footer>

      {/* Font Awesome CDN - Add this to your index.html or use npm package */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />
    </div>
  );
};

export default Home;

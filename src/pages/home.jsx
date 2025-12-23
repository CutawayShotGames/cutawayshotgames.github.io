import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f1e8]">
      {/*Replace with navbar component later
    Or ig add navbar in the app.jsx thing idk I am not a senior dev */}
      <header className="bg-[#0000cc] text-white py-4 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">
            Cutaway<span className="text-red-600">Games</span>
          </div>
          <nav className="flex gap-8">
            <a href="#home" className="hover:text-gray-200 transition-colors">
              Home
            </a>
            <a href="#games" className="hover:text-gray-200 transition-colors">
              Our Games
            </a>
            <a
              href="#software"
              className="hover:text-gray-200 transition-colors"
            >
              Our Software
            </a>
            <a href="#team" className="hover:text-gray-200 transition-colors">
              Our Team
            </a>
            <a
              href="#contact"
              className="hover:text-gray-200 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-8 py-8">
        <div className="mb-12">
          <img class="h-48 w-96 object-contain" src="/cutawayshotgames.png" />
        </div>

        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-[#0000cc] mb-6">
            Welcome to Cutaway Games
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            Games designed to take cutaways from the stress that surrounds us.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Cutaway Games focuses on delivering engaging and immersive gaming
            experiences across various platforms, mainly for mobile devices and
            PC. We prioritise fun and intriguing experiences and unique genres
            to stand out in the gaming market. Consisting of a team of skilled
            and motivated video game / software developers, we work
            collaboratively to bring our creative vision to life. We also act as
            video game publishers.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0000cc] text-white py-6">
        <div className="max-w-7xl mx-auto flex justify-center gap-6">
          <a
            href="#twitter"
            className="hover:text-gray-300 transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a
            href="#facebook"
            className="hover:text-gray-300 transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a
            href="#instagram"
            className="hover:text-gray-300 transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a
            href="#youtube"
            className="hover:text-gray-300 transition-colors"
            aria-label="YouTube"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
        </div>
      </footer>
    </div>

    // Similar to navbar add footer later
  );
}

export default Home;

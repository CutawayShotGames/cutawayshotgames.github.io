function GamesPage() {
  const games = [
    {
      id: 1,
      title: "Countryballs: Tower Defense",
      description:
        "Countryballs: Tower Defense is a fresh addition to the Countryball franchise, which features different countryballs with different abilities to fight rockets and save the world!",
      platforms: "Android, PC (Coming Soon)",
      link: "https://play.google.com/store/apps/details?id=com.PruzVesco.CountryballsTowerDefense",
      image: "/cbtd.png",
    },
    {
      id: 2,
      title: "Countryballs: Minigames",
      description:
        "This game is pure challenge! In many different minigames, beat your own highscore to climb the ranks. You will find yourself in a leaderboard where you can compare your best scores with others.",
      platforms: "Android",
      link: "https://play.google.com/store/apps/details?id=com.CutawayShotGames.CountryballsMinigames",
      image: "/cbmg.png",
    },
    {
      id: 3,
      title: "Countryballs: Zombie Hunt",
      description:
        "A world-wide zombie epidemic broke out. Quick, defeat the waves of zombies to save the world!",
      platforms: "Android",
      link: "https://play.google.com/store/apps/details?id=com.CutawayShotGames.CountryballsZombieHunt",
      image: "/cbzh2.png",
    },
    {
      id: 4,
      title: "The Hardest Countryballs Game",
      description:
        "Jump right into the worlds most difficult countryballs game, a game featuring several very hard levels all around the world with collectable artefacts. Beat your own times and become the very best.",
      platforms: "Mobile",
      link: "https://play.google.com/store/apps/details?id=com.CutawayShotGames.TheHardestCountryballsGame",
      image: "/thcg.png",
    },
    {
      id: 5,
      title: "Ace's Learning Hub",
      description:
        "Prepare for your upcoming school exams with confidence using Ace, your ultimate study companion! Whether you're struggling to find the right study methods or aiming to ace your tests, Ace has got you covered.",
      platforms: "Mobile",
      link: "https://play.google.com/store/apps/details?id=com.cutawayshotgames.Aceslearninghub",
      image: "/alh.png",
    },
    {
      id: 6,
      title: "20th Century Quiz",
      description:
        "The twentieth century (1900-1999) was full of important breakthroughs as well as huge catastrophes. Improve your trivia about this century with this app by answering diverse multiple choice questions and beat your own highscore!",
      platforms: "Mobile",
      link: "https://play.google.com/store/apps/details?id=com.OblivityStudios.TwentiethCenturyQuiz",
      image: "/20cq.png",
    },
    {
      id: 7,
      title: "Date The Map",
      description:
        "Guess the year in which historic maps were created in this addictive quiz.",
      platforms: "Mobile",
      link: "https://play.google.com/store/apps/details?id=com.CutawayShotGames.DateTheMap",
      image: "/dtm.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f1e8]">
      {/* Header Navigation */}
      <header className="bg-[#0000cc] text-white py-4 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">
            Cutaway<span className="text-red-600">Games</span>
          </div>
          <nav className="flex gap-8">
            <a href="/" className="hover:text-gray-200 transition-colors">
              Home
            </a>
            <a
              href="/games"
              className="hover:text-gray-200 transition-colors font-semibold"
            >
              Our Games
            </a>
            <a
              href="/software"
              className="hover:text-gray-200 transition-colors"
            >
              Our Software
            </a>
            <a href="/team" className="hover:text-gray-200 transition-colors">
              Our Team
            </a>
            <a
              href="/contact"
              className="hover:text-gray-200 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-[#0000cc] text-center mb-8">
            Our Games
          </h1>

          {/* Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <div
                key={game.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  className="w-full h-48 object-cover bg-gray-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0000cc] mb-3">
                    {game.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    {game.description}
                  </p>
                  <p className="text-gray-600 font-semibold mb-4">
                    <strong>Platforms:</strong> {game.platforms}
                  </p>
                  <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#0000cc] text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Play Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0000cc] text-white py-8">
        <div className="max-w-7xl mx-auto flex justify-center gap-8">
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
              <path
                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                fill="#0000cc"
              ></path>
              <circle cx="17.5" cy="6.5" r="1.5" fill="#0000cc"></circle>
            </svg>
          </a>
          <a
            href="#youtube"
            className="hover:text-gray-300 transition-colors"
            aria-label="YouTube"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"></path>
              <polygon
                points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                fill="#0000cc"
              ></polygon>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default GamesPage;

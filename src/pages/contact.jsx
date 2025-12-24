import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f1e8]">
      {/* Header Navigation */}
      <header className="bg-[#0000cc] text-white py-4 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">
            Cutaway<span className="text-red-600">Games</span>
          </div>
          <nav className="flex gap-8">
            <Link to="/" className="hover:text-gray-200 transition-colors">
              Home
            </Link>
            <Link to="/games" className="hover:text-gray-200 transition-colors">
              Our Games
            </Link>
            <Link
              to="/software"
              className="hover:text-gray-200 transition-colors"
            >
              Our Software
            </Link>
            <Link to="/team" className="hover:text-gray-200 transition-colors">
              Our Team
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-200 transition-colors font-semibold"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-[#0000cc] text-center mb-4">
            Contact Us
          </h1>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
            Have questions, feedback, or want to work with us? We'd love to hear
            from you!
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-[#0000cc] mb-6">
                Legal Notice
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div>
                    <p className="font-semibold">Name</p>
                    <p className="text-gray-700">Niels Kochert</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-700">
                      Thomas-Mann-Strasse 17, 68799 Reilingen
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div>
                    <p className="font-semibold">E-Mail</p>
                    <p className="text-gray-700">kochertn@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div>
                    <p className="font-semibold">Phone Number</p>
                    <p className="text-gray-700">+49 170 7449060</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#0000cc] mb-6">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-700">pruzvescocbtd@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div>
                    <p className="font-semibold">Discord</p>
                    <a
                      href="https://discord.gg/kaK6BXpdfV"
                      className="text-[#0000cc] hover:underline"
                    >
                      Join our Discord
                    </a>
                  </div>
                </div>
              </div>
            </div>
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

export default ContactPage;

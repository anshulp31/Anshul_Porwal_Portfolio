function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Me</h2>
          <p className="mb-4">
            I am a skilled Fullstack Developer with MERN stack
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/harshiltomar/"
                className="hover:text-white transition-colors duration-300"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/u/porwalaanshul31/"
                className="hover:text-white transition-colors duration-300"
              >
                Leetcode
              </a>
            </li>
            <li>
              <a
                href="https://github.com/anshulp31"
                className="hover:text-white transition-colors duration-300"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1PuPz6aGsSUOr-9uNXcTi3ToaiU4xbx9k/view?usp=drive_link"
                className="hover:text-white transition-colors duration-300"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Me</h2>
          <div className="flex  flex-col items-start">
            <a
              href="https://www.linkedin.com/in/anshul-porwal-99b705206/"
              className="hover:text-white transition-colors duration-300"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/anshulp31"
              className="hover:text-white transition-colors duration-300"
            >
              Github
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
          <p>Indore, Madhya Pradesh</p>
          <p>Email: anshulporwal6068@gmail.com</p>
        </div>
      </div>
      <p className="text-center text-lg pt-8 font-semibold text-white">
        ⚡© Anshul Porwal™ ⚡
      </p>
    </footer>
  );
}

export default Footer;

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
        border-t
        border-cyan-500/20
        py-10
        px-6
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-6
        "
      >
        <h2
          className="
            text-2xl
            font-bold
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
            bg-clip-text
            text-transparent
          "
        >
          CYBORG
        </h2>

        <div className="flex gap-6 text-xl">
          <FaGithub
            className="
              hover:text-cyan-400
              cursor-pointer
            "
          />

          <FaLinkedin
            className="
              hover:text-cyan-400
              cursor-pointer
            "
          />

          <FaTwitter
            className="
              hover:text-cyan-400
              cursor-pointer
            "
          />
        </div>

        <p className="text-gray-500">© 2026 Cyborg Systems</p>
      </div>
    </footer>
  );
};

export default Footer;

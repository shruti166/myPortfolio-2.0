import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="hero" smooth={true} duration={500} className="text-2xl font-bold">SJ</Link>
          <div className="hidden md:flex space-x-8">
            <Link to="about" smooth={true} duration={500} className="text-gray-300 hover:text-white cursor-pointer">About</Link>
            <Link to="projects" smooth={true} duration={500} className="text-gray-300 hover:text-white cursor-pointer">Projects</Link>
            <Link to="contact" smooth={true} duration={500} className="text-gray-300 hover:text-white cursor-pointer">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
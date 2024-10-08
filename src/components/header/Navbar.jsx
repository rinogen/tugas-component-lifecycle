import { Link } from 'react-router-dom';
import ThemeBtn from '../button/ThemeBtn';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout();
      navigate('/login');
    }
  };

  return (
    <nav className="bg-tranparent dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-start lg:px-20 xl:px-40 px-10 py-3 relative lg:gap-y-2 gap-y-4 gap-x-4">
        <div className="max-h-[87px] xl:w-52 w-fit">
          <img
            src="https://info.padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo_PADI_UMKM.cc043879.svg&w=128&q=100"
            alt=""
          />
        </div>

        {/* Menu Links */}
        <ul className="lg:!flex max-lg:hidden  max-lg:w-full lg:space-x-10 max-lg:space-y-3 max-lg:my-4 text-[#212427] items-center">
          <li className="group max-lg:py-2 relative cursor-pointer">
            <span className="hover:text-[#009EA9] dark:hover:text-[#009EA9] font-bold text-[18px] text-[#212427] dark:text-white flex items-center">
              <Link to="/beranda">Beranda</Link>
            </span>
          </li>
          <li className="group max-lg:py-2 relative cursor-pointer">
            <span className="hover:text-[#009EA9] dark:hover:text-[#009EA9] font-bold text-[18px] text-[#212427] dark:text-white flex items-center">
              <Link to="/tentang">Tentang Kami</Link>
            </span>
          </li>
          <li className="group max-lg:py-2 relative cursor-pointer">
            <span className="hover:text-[#009EA9] dark:hover:text-[#009EA9] font-bold text-[18px] text-[#212427] dark:text-white flex items-center">
              <Link to="/bantuan">Bantuan</Link>
            </span>
          </li>
          <li className="group max-lg:py-2 relative cursor-pointer">
            <span className="hover:text-[#009EA9] dark:hover:text-[#009EA9] font-bold text-[18px] text-[#212427] dark:text-white flex items-center">
              <Link to="/media">Media</Link>
            </span>
          </li>
          <li className="group max-lg:py-2 relative cursor-pointer">
            <span className="hover:text-[#009EA9] dark:hover:text-[#009EA9] font-bold text-[18px] text-[#212427] dark:text-white flex items-center">
              <Link to="/kontak">Kontak</Link>
            </span>
          </li>
          <div className="md:inline hidden">
            <button
              className="border-[1px] border-[#009EA9] rounded-lg px-3 py-2 text-[#009EA9] cursor-pointer max-lg:w-fit hover:bg-[#009EA9] hover:text-white transition-colors duration-300"
              onClick={handleAuthAction}>
              {isAuthenticated ? 'Logout' : 'Login'}
            </button>
          </div>
        </ul>
        <ThemeBtn />
      </div>
    </nav>
  );
};

export default Header;

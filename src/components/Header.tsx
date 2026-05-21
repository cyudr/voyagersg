
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop bg-white dark:bg-surface-container-lowest h-16 border-b border-outline-variant dark:border-outline">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-headline-md font-headline-md font-bold text-primary dark:text-inverse-primary">
          VoyagerSG
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            to="/discover"
            className={`font-label-md text-label-md py-5 transition-colors ${
              pathname === "/discover"
                ? "text-primary dark:text-inverse-primary font-bold border-b-2 border-primary"
                : "text-secondary dark:text-secondary-fixed-dim hover:text-primary-container"
            }`}
          >
            Explore
          </Link>
          <Link
            to="/itinerary"
            className={`font-label-md text-label-md py-5 transition-colors ${
              pathname === "/itinerary"
                ? "text-primary dark:text-inverse-primary font-bold border-b-2 border-primary"
                : "text-secondary dark:text-secondary-fixed-dim hover:text-primary-container"
            }`}
          >
            Trips
          </Link>
          <a
            href="#"
            className="text-secondary dark:text-secondary-fixed-dim hover:text-primary-container transition-colors font-label-md text-label-md py-5"
          >
            Community
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4">
          <span className="material-symbols-outlined text-secondary cursor-pointer hover:text-primary transition-colors">
            notifications
          </span>
          <span className="material-symbols-outlined text-secondary cursor-pointer hover:text-primary transition-colors">
            settings
          </span>
        </div>
        <Link
          to="/preferences"
          className="bg-primary text-white px-6 py-2 rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all"
        >
          Plan a Trip
        </Link>
        <img
          alt="User profile"
          className="w-8 h-8 rounded-full border border-outline-variant"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4cQtltfNO2N-mqkqR0OPDFL5ufj8kdNR4TEli9IUSG9u9pvkzqMi8fK5F-X9_OdE-O5Ig3bqTSRWOd3YOh3MAjRuSIFjDOVDAM2x1y0Jh50jLnmSk70FZkjM9PLMu5sIwS0Xgp2zrkXLKOG2CcBbTQQlgJEwoBxpyIX7mXN8mvu0IXzzB-YaI3Wfe7u9w6NjmoAWPd3VhxwbT14tgvPRSQqY3oqjoISfSc5xfkOz_buDd4Fzd5MqawlrqoZ12wcN585SzxPfANLJg"
        />
      </div>
    </header>
  );
};

export default Header;

import logo from '../../logo.jpg';

interface NavbarProps {
  onLogout: () => void;
}

export const Navbar = ({ onLogout }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-navy border-b border-gray-700 shadow-lg w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3 gap-3">
        <div className="flex flex-1 items-center gap-2 min-w-0">
          <img 
            src={logo} 
            alt="Meraki Academy Logo" 
            className="h-6 w-auto sm:h-8 flex-shrink-0"
          />
          <span className="truncate text-xs sm:text-sm font-semibold text-white">
            Meraki Academy – Vibe Coding Resources
          </span>
        </div>

        {/* Logout button */}
        <button
          onClick={onLogout}
          className="text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-200 border border-gray-600 flex-shrink-0"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};


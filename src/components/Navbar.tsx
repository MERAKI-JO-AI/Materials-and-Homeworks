import logo from '../../logo.jpg';

interface NavbarProps {
  onLogout: () => void;
}

export const Navbar = ({ onLogout }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-navy border-b border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Meraki Academy Logo" 
              className="h-10 w-auto"
            />
            <span className="ml-3 text-white font-semibold text-sm sm:text-base">
              Meraki Academy – Vibe Coding Resources
            </span>
          </div>

          {/* Logout button */}
          <div className="flex items-center gap-4">
            <button
              onClick={onLogout}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-200 text-sm sm:text-base border border-gray-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};


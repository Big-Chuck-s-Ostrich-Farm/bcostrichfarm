
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon } from "lucide-react";
import React from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isDark, setIsDark] = useState(() =>
    typeof window !== 'undefined' ? document.documentElement.classList.contains('dark') : false
  );

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      setIsDark(false);
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      setIsDark(true);
      localStorage.setItem('theme', 'dark');
    }
  };

  // On mount, respect saved theme
  React.useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else if (saved === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/gallery", label: "Gallery" },
    { href: "/recipes", label: "Recipes" },
    { href: "/facts", label: "Ostrich Facts" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src="/logo_sticker.png" alt="Big Chuck's Ostrich Farm Logo" className="h-12 w-12 object-contain" />
            <Link to="/" className="font-playfair font-bold text-2xl text-primary">
              Big Chuck's Ostrich Farm
            </Link>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8 flex-1 justify-center">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-sans text-sm font-medium transition-colors hover:text-primary
                  ${isActive(link.href) ? 'text-primary' : 'text-muted-foreground'}`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full border border-primary/30 bg-background hover:bg-primary/10 transition-colors text-primary flex items-center justify-center"
              aria-label="Toggle dark mode"
            >
              <Moon className={isDark ? "fill-primary text-background" : "text-primary"} size={24} />
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden ml-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-primary/80"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-primary/20">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                  ${isActive(link.href) 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors text-primary border border-primary/20 mt-2"
              aria-label="Toggle dark mode"
            >
              <span className="flex items-center"><Moon className={isDark ? "fill-primary text-background mr-2" : "text-primary mr-2"} size={24} /> Toggle dark mode</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

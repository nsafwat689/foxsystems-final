import { useTheme } from "@/contexts/ThemeContext";
import { Link } from "wouter";
import { Moon, Sun } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", labelEn: "Services", labelAr: "الخدمات" },
  { href: "/articles", labelEn: "Articles", labelAr: "المقالات" },
  { href: "/faq", labelEn: "FAQ", labelAr: "الأسئلة الشائعة" },
  { href: "#about", labelEn: "About", labelAr: "حول" },
  { href: "#contact", labelEn: "Contact", labelAr: "اتصل" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Fox Systems" className="h-8 w-8" />
          <span className="font-bold text-lg text-primary hidden sm:inline">
            Fox Systems
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.labelEn}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
            title="Toggle dark/light mode"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>

          {/* Language Toggle */}
          <button
            className="px-3 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
            onClick={() => {
              // Language switching can be implemented later
              window.location.href = "#"; // Placeholder
            }}
          >
            العربية
          </button>
        </div>
      </nav>
    </header>
  );
}

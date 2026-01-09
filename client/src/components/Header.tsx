import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Link } from "wouter";
import { Moon, Sun } from "lucide-react";

const translations = {
  en: {
    services: "Services",
    articles: "Articles",
    faq: "FAQ",
    about: "About",
    contact: "Contact",
    language: "العربية",
  },
  ar: {
    services: "الخدمات",
    articles: "المقالات",
    faq: "الأسئلة الشائعة",
    about: "حول",
    contact: "اتصل",
    language: "EN",
  },
};

export default function Header() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];
  const isArabic = language === "ar";

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
        <div className={`flex items-center gap-6 ${isArabic ? "flex-row-reverse" : ""}`}>
          <Link
            href="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t.services}
          </Link>
          <Link
            href="/articles"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t.articles}
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t.faq}
          </Link>
          <a
            href="#about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t.about}
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t.contact}
          </a>
        </div>

        {/* Right Actions */}
        <div className={`flex items-center gap-2 ${isArabic ? "flex-row-reverse" : ""}`}>
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
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="px-3 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
          >
            {t.language}
          </button>
        </div>
      </nav>
    </header>
  );
}

import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Calendar, User, Tag, Moon, Sun } from "lucide-react";
import { useState } from "react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

const articles: Record<string, Article> = {
  "voip-basics": {
    id: "voip-basics",
    title: "Understanding VoIP Technology: The Complete Guide",
    excerpt: "Learn the fundamentals of Voice over Internet Protocol and how it revolutionizes business communication.",
    category: "VoIP",
    author: "Fox Systems Team",
    date: "2025-01-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
  },
  "pbx-systems": {
    id: "pbx-systems",
    title: "Private Branch Exchange (PBX) Systems Explained",
    excerpt: "Discover how PBX systems improve internal communication and reduce telecommunications costs.",
    category: "PBX",
    author: "Fox Systems Team",
    date: "2025-01-12",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
  },
  "asterisk-server": {
    id: "asterisk-server",
    title: "Asterisk Server: Building Powerful Communication Systems",
    excerpt: "Explore how Asterisk enables flexible and scalable telecommunications infrastructure.",
    category: "Asterisk",
    author: "Fox Systems Team",
    date: "2025-01-10",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
  },
  "telecom-trends": {
    id: "telecom-trends",
    title: "2025 Telecommunications Trends: What's Next?",
    excerpt: "Stay ahead with insights into the latest telecommunications industry trends and innovations.",
    category: "Telecommunications",
    author: "Fox Systems Team",
    date: "2025-01-08",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
  },
  "voip-security": {
    id: "voip-security",
    title: "VoIP Security: Protecting Your Communications",
    excerpt: "Essential security measures and best practices for protecting your VoIP infrastructure.",
    category: "VoIP",
    author: "Fox Systems Team",
    date: "2025-01-05",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
  },
};

const translations = {
  en: {
    articles: "Articles",
    articlesTitle: "Latest Articles & Resources",
    articlesSubtitle: "Stay informed with our latest insights on VoIP, telecommunications, and business communication systems",
    readMore: "Read More",
    category: "Category",
    author: "By",
    published: "Published",
    home: "Home",
    breadcrumb: "Articles",
    noArticles: "No articles found",
    searchPlaceholder: "Search articles...",
    allCategories: "All Categories",
  },
  ar: {
    articles: "المقالات",
    articlesTitle: "أحدث المقالات والموارد",
    articlesSubtitle: "ابقَ على اطلاع مع أحدث رؤيتنا حول VoIP والاتصالات وأنظمة الاتصالات التجارية",
    readMore: "اقرأ المزيد",
    category: "الفئة",
    author: "بواسطة",
    published: "نُشر في",
    home: "الرئيسية",
    breadcrumb: "المقالات",
    noArticles: "لا توجد مقالات",
    searchPlaceholder: "ابحث عن المقالات...",
    allCategories: "جميع الفئات",
  },
};

export default function Articles() {
  const { theme } = useTheme();
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const isArabic = language === "ar";
  const t = translations[language];

  // Get unique categories
  const categories = Array.from(new Set(Object.values(articles).map((a) => a.category)));

  // Filter articles
  const filteredArticles = Object.values(articles).filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "en" ? "en-US" : "ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className={`min-h-screen bg-background text-foreground transition-colors ${isArabic ? "rtl" : "ltr"}`}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img src="/fox_systems_logo_matching.png" alt="Fox Systems" className="h-10 w-10 rounded-lg" />
            <span className="font-bold text-lg text-primary hidden sm:inline">Fox Systems</span>
          </Link>

          150
          
            <Link href="/" className="text-sm font-medium hover:text-primary transition">
              {t.home}
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary transition">
              {isArabic ? "الخدمات" : "Services"}
            </Link>
            <Link href="/articles" className="text-sm font-medium hover:text-primary transition">
              {t.articles}
            </Link>
            <button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="px-3 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
            >
              {language === "en" ? "العربية" : "EN"}
            </button>
          </div>
</nav>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/10 via-transparent to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className={`flex items-center gap-2 mb-6 ${isArabic ? "flex-row-reverse" : ""}`}>
            <Link href="/" className="text-muted-foreground hover:text-primary transition text-sm">
              {t.home}
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-sm font-medium text-primary">{t.breadcrumb}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.articlesTitle}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">{t.articlesSubtitle}</p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="space-y-4">
            {/* Search */}
            <div>
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <div className={`flex flex-wrap gap-2 ${isArabic ? "flex-row-reverse" : ""}`}>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  !selectedCategory
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {t.allCategories}
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">{t.noArticles}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Link key={article.id} href={`/article/${article.id}`}>
                  <Card className="h-full hover:shadow-xl transition-all overflow-hidden group cursor-pointer">
                    {/* Image */}
                    <div className="h-48 bg-muted overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>

                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Tag className="w-4 h-4 text-primary" />
                        <span className="text-xs font-semibold text-primary uppercase">{article.category}</span>
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition">{article.title}</h3>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm line-clamp-2">{article.excerpt}</p>

                      <div className={`flex flex-wrap gap-4 text-xs text-muted-foreground ${isArabic ? "flex-row-reverse" : ""}`}>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(article.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <Button size="sm" variant="ghost" className="w-full justify-between">
                          {t.readMore}
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-muted/30">
        <div className="container text-center text-muted-foreground">
          <p>&copy; 2025 Fox Systems. {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}</p>
        </div>
      </footer>
    </div>
  );
}

181
  import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import {
  MessageCircle,
  Phone,
  Mail,
  Globe,
  Shield,
  Cpu,
  Network,
  Server,
  Zap,
  Users,
  Moon,
  Sun,
  CheckCircle,
  Clock,
  AlertCircle,
  Lock,
  ArrowRight,
} from "lucide-react";

const translations = {
  en: {
    language: "Language",
    english: "English",
    arabic: "العربية",
    home: "Home",
    services: "Services",
    articles: "Articles",
    about: "About",
    contact: "Contact",
    heroTitle: "Enterprise IT Solutions & Services",
    heroSubtitle:
      "Trusted by businesses for over 14 years. CRM systems, cybersecurity, networking, and infrastructure solutions.",
    heroBtn: "Get Started",
    whatsappBtn: "WhatsApp Us",
    chatBtn: "Chat with Us",
    servicesTitle: "Our Services",
    servicesSubtitle: "Comprehensive IT solutions tailored to your business needs",
    crm: "CRM Systems",
    crmDesc: "Advanced Customer Relationship Management systems to streamline your business operations",
    firewall: "Firewall & Security",
    firewallDesc: "Sophos security systems and advanced firewall protection for your network",
    networking: "Site-to-Site Networking",
    networkingDesc: "Secure and reliable network connectivity between multiple locations",
    domainServices: "Domain & DNS Services",
    domainDesc: "Complete domain management, DNS configuration, and Active Directory solutions",
    websites: "Website Design",
    websitesDesc: "Professional website design and development services for modern businesses",
    infrastructure: "Infrastructure Setup",
    infrastructureDesc: "Complete IT infrastructure design and implementation for startups and enterprises",
    hardware: "Hardware Solutions",
    hardwareDesc: "Quality hardware devices and equipment in bulk quantities",
    support: "24/7 Support",
    supportDesc: "Monthly support contracts with dedicated technical assistance",
    aboutTitle: "About Fox Systems",
    aboutText:
      "With over 14 years of experience in the IT industry, Fox Systems has established itself as a trusted partner for businesses seeking comprehensive technology solutions. We specialize in delivering enterprise-grade CRM systems, cybersecurity solutions, and infrastructure services that drive business growth.",
    contactTitle: "Get In Touch",
    contactSubtitle: "Have questions? We're here to help.",
    whatsappContact: "WhatsApp: +201557649136",
    emailContact: "Email us for more information",
    footer: "© 2024 Fox Systems. All rights reserved.",
    accountable: "Accountable",
    accountableDesc: "Define your need, if it's a Tech one, you directly call us. We are your Go-To.",
    upToDate: "Up-to-Date",
    upToDateDesc: "We have the latest, we bring the newest, so you always have the updated version of everything.",
    senseOfUrgency: "Sense of Urgency",
    senseOfUrgencyDesc: "Stops for a moment if there is an issue to be solved or a missing little piece to be installed.",
    safetyFirst: "Safety Comes First",
    safetyFirstDesc: "It's always safe to work after we do our job, it's always safe to use our products.",
    happyCustomers: "Happy Customers",
    projectsDelivered: "Projects Delivered",
    partners: "Partners & Alliances",
    engineers: "Professional Engineers",
    ourServices: "Our Services",
    ourWork: "Our Work",
    recentProjects: "Recent Projects",
    viewAll: "View All",
    hardwareCategory: "Hardware",
    solutionsCategory: "Solutions",
    softwareCategory: "Software",
  },
  ar: {
    language: "اللغة",
    english: "English",
    arabic: "العربية",
    home: "الرئيسية",
    services: "الخدمات",
    articles: "المقالات",
    about: "حول",
    contact: "اتصل",
    heroTitle: "حلول وخدمات تكنولوجيا المعلومات للمؤسسات",
    heroSubtitle:
      "موثوق به من قبل الشركات لأكثر من 14 سنة. أنظمة CRM والأمن السيبراني والشبكات وحلول البنية التحتية.",
    heroBtn: "ابدأ الآن",
    whatsappBtn: "واتس آب",
    chatBtn: "دردشة معنا",
    servicesTitle: "خدماتنا",
    servicesSubtitle: "حلول تكنولوجيا معلومات شاملة مخصصة لاحتياجات عملك",
    crm: "أنظمة CRM",
    crmDesc: "أنظمة إدارة علاقات العملاء المتقدمة لتبسيط عمليات عملك",
    firewall: "جدران الحماية والأمان",
    firewallDesc: "أنظمة أمان Sophos وحماية جدار الحماية المتقدمة لشبكتك",
    networking: "شبكات الموقع إلى الموقع",
    networkingDesc: "اتصال شبكة آمن وموثوق بين عدة مواقع",
    domainServices: "خدمات النطاق و DNS",
    domainDesc: "إدارة النطاق الكاملة وتكوين DNS وحلول Active Directory",
    websites: "تصميم المواقع الإلكترونية",
    websitesDesc: "خدمات تصميم وتطوير المواقع الإلكترونية الاحترافية",
    infrastructure: "إعداد البنية التحتية",
    infrastructureDesc: "تصميم وتنفيذ البنية التحتية الكاملة للشركات الناشئة والمؤسسات",
    hardware: "حلول الأجهزة",
    hardwareDesc: "أجهزة ومعدات عالية الجودة بكميات كبيرة",
    support: "الدعم 24/7",
    supportDesc: "عقود الدعم الشهري مع مساعدة تقنية مخصصة",
    aboutTitle: "حول شركة Fox Systems",
    aboutText:
      "مع أكثر من 14 سنة من الخبرة في صناعة تكنولوجيا المعلومات، أصبحت Fox Systems شريكاً موثوقاً للشركات التي تسعى للحصول على حلول تكنولوجية شاملة. نحن متخصصون في تقديم أنظمة CRM على مستوى المؤسسات وحلول الأمن السيبراني وخدمات البنية التحتية التي تدفع نمو الأعمال.",
    contactTitle: "تواصل معنا",
    contactSubtitle: "هل لديك أسئلة؟ نحن هنا للمساعدة.",
    whatsappContact: "واتس آب: +201557649136",
    emailContact: "راسلنا عبر البريد الإلكتروني",
    footer: "© 2024 Fox Systems. جميع الحقوق محفوظة.",
    accountable: "المساءلة",
    accountableDesc: "حدد احتياجك، إذا كان تقنياً، اتصل بنا مباشرة. نحن خيارك الأول.",
    upToDate: "محدث دائماً",
    upToDateDesc: "لدينا الأحدث، نحضر الأحدث، لذا لديك دائماً النسخة المحدثة من كل شيء.",
    senseOfUrgency: "الاستجابة السريعة",
    senseOfUrgencyDesc: "نتوقف للحظة إذا كانت هناك مشكلة يجب حلها أو قطعة صغيرة مفقودة يجب تثبيتها.",
    safetyFirst: "السلامة أولاً",
    safetyFirstDesc: "يكون العمل آمناً دائماً بعد عملنا، يكون استخدام منتجاتنا آمناً دائماً.",
    happyCustomers: "عملاء سعداء",
    projectsDelivered: "مشاريع منجزة",
    partners: "الشركاء والتحالفات",
    engineers: "مهندسون محترفون",
    ourServices: "خدماتنا",
    ourWork: "أعمالنا",
    recentProjects: "المشاريع الأخيرة",
    viewAll: "عرض الكل",
    hardwareCategory: "الأجهزة",
    solutionsCategory: "الحلول",
    softwareCategory: "البرمجيات",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [showChat, setShowChat] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState("all");
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];
  const isArabic = language === "ar";

  const services = [
    { icon: Cpu, title: t.crm, desc: t.crmDesc, category: "software", image: "/crm-solution.jpg" },
    { icon: Shield, title: t.firewall, desc: t.firewallDesc, category: "security", image: "/firewall-security.jpg" },
    { icon: Network, title: t.networking, desc: t.networkingDesc, category: "networking", image: "/it-services.jpg" },
    { icon: Server, title: t.domainServices, desc: t.domainDesc, category: "infrastructure", image: "/hero-tech.jpg" },
    { icon: Globe, title: t.websites, desc: t.websitesDesc, category: "software", image: "/hero-tech.jpg" },
    { icon: Zap, title: t.infrastructure, desc: t.infrastructureDesc, category: "infrastructure", image: "/it-services.jpg" },
    { icon: Users, title: t.hardware, desc: t.hardwareDesc, category: "hardware", image: "/firewall-security.jpg" },
    { icon: Phone, title: t.support, desc: t.supportDesc, category: "support", image: "/crm-solution.jpg" },
  ];

  const features = [
    { icon: CheckCircle, title: t.accountable, desc: t.accountableDesc },
    { icon: Clock, title: t.upToDate, desc: t.upToDateDesc },
    { icon: AlertCircle, title: t.senseOfUrgency, desc: t.senseOfUrgencyDesc },
    { icon: Lock, title: t.safetyFirst, desc: t.safetyFirstDesc },
  ];

  const stats = [
    { value: "2,322+", label: t.happyCustomers, icon: Users },
    { value: "3,230+", label: t.projectsDelivered, icon: CheckCircle },
    { value: "50+", label: t.partners, icon: Globe },
    { value: "120+", label: t.engineers, icon: Users },
  ];

  const filteredServices =
    activeServiceTab === "all" ? services : services.filter((s) => s.category === activeServiceTab);

  return (
    <div className={`min-h-screen bg-background text-foreground transition-colors ${isArabic ? "rtl" : "ltr"}`}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/fox_systems_logo_matching.png" alt="Fox Systems" className="h-14 w-auto rounded-lg" />
             <span className="font-bold text-lg text-primary hidden sm:inline">Fox Systems</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              <Link href="/services" className="text-sm font-medium hover:text-primary transition">
                {t.services}
              </Link>
              <Link href="/articles" className="text-sm font-medium hover:text-primary transition">
                {t.articles}
              </Link>
              <a href="#about" className="text-sm font-medium hover:text-primary transition">
                {t.about}
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition">
                {t.contact}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-muted transition"
                title={theme === "light" ? "Dark mode" : "Light mode"}
              >
                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                className="px-3 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
              >
                {language === "en" ? "العربية" : "EN"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Slider */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isArabic ? "text-right" : "text-left"}`}>
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  {isArabic ? "حلول موثوقة" : "Trusted Solutions"}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">{t.heroTitle}</h1>
              <p className="text-lg text-muted-foreground">{t.heroSubtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  {t.heroBtn}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open("https://wa.me/201557649136", "_blank")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {t.whatsappBtn}
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/hero-tech.jpg"
                alt="Technology Solutions"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center hover:shadow-lg transition">
              <h3 className="font-bold text-lg">{t.hardwareCategory}</h3>
            </div>
            <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center hover:shadow-lg transition">
              <h3 className="font-bold text-lg">{t.solutionsCategory}</h3>
            </div>
            <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center hover:shadow-lg transition">
              <h3 className="font-bold text-lg">{t.softwareCategory}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className={`grid md:grid-cols-4 gap-8 ${isArabic ? "text-right" : ""}`}>
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg w-fit">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-wide">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section with Tabs */}
      <section id="services" className="py-20 md:py-32 bg-muted/20">
        <div className="container">
          <div className={`text-center mb-12 ${isArabic ? "space-y-2" : ""}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.ourServices}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.servicesSubtitle}</p>
          </div>

          <div className="mb-8">
            <Tabs value={activeServiceTab} onValueChange={setActiveServiceTab} className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="all">{isArabic ? "الكل" : "All"}</TabsTrigger>
                <TabsTrigger value="software">{isArabic ? "برمجيات" : "Software"}</TabsTrigger>
                <TabsTrigger value="security">{isArabic ? "أمان" : "Security"}</TabsTrigger>
                <TabsTrigger value="networking">{isArabic ? "شبكات" : "Networking"}</TabsTrigger>
                <TabsTrigger value="infrastructure">{isArabic ? "بنية تحتية" : "Infrastructure"}</TabsTrigger>
              </TabsList>

              <TabsContent value={activeServiceTab} className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredServices.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                      <Card
                        key={idx}
                        className="hover:shadow-lg transition-all hover:border-primary/50 cursor-pointer group overflow-hidden"
                      >
                        <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden relative">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition"
                          />
                        </div>
                        <CardHeader>
                          <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{service.desc}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon className="w-12 h-12" />
                  </div>
                  <p className="text-4xl font-bold mb-2">{stat.value}</p>
                  <p className="text-primary-foreground/80">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={isArabic ? "order-2" : ""}>
              <img
                src="/it-services.jpg"
                alt="About Fox Systems"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className={`space-y-6 ${isArabic ? "order-1 text-right" : ""}`}>
              <h2 className="text-3xl md:text-4xl font-bold">{t.aboutTitle}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.aboutText}</p>
              <Button className="w-fit" size="lg">
                {t.heroBtn}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-muted/20">
        <div className="container">
          <div className={`text-center mb-16 ${isArabic ? "space-y-2" : ""}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contactTitle}</h2>
            <p className="text-lg text-muted-foreground">{t.contactSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardTitle>{isArabic ? "واتس آب" : "WhatsApp"}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">+201557649136</p>
                <Button
                  size="sm"
                  onClick={() => window.open("https://wa.me/201557649136", "_blank")}
                  className="w-full"
                >
                  {t.whatsappBtn}
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardTitle>{isArabic ? "دردشة مباشرة" : "Live Chat"}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {isArabic ? "تحدث معنا الآن" : "Chat with our team"}
                </p>
                <Button size="sm" onClick={() => setShowChat(!showChat)} className="w-full">
                  {t.chatBtn}
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardTitle>{isArabic ? "البريد الإلكتروني" : "Email"}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">info@foxsystems.com</p>
                <Button size="sm" variant="outline" className="w-full">
                  {t.emailContact}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      {showChat && (
        <div className="fixed bottom-6 right-6 w-96 h-96 bg-background rounded-2xl shadow-2xl border border-border flex flex-col z-40">
          <div className="bg-primary text-primary-foreground p-4 rounded-t-2xl flex justify-between items-center">
            <h3 className="font-bold">{isArabic ? "دردشة مباشرة" : "Live Chat"}</h3>
            <button
              onClick={() => setShowChat(false)}
              className="text-primary-foreground hover:opacity-80 transition"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto bg-muted/30">
            <div className="space-y-4">
              <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-xs">
                <p className="text-sm">
                  {isArabic
                    ? "مرحباً! كيف يمكننا مساعدتك؟"
                    : "Hello! How can we help you today?"}
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-border p-4">
            <input
              type="text"
              placeholder={isArabic ? "اكتب رسالتك..." : "Type your message..."}
              className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center z-40"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-8">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">{isArabic ? "الشركة" : "Company"}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    {t.about}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    {t.services}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{isArabic ? "الخدمات" : "Services"}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    {t.crm}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    {t.firewall}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{isArabic ? "الدعم" : "Support"}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    {t.contact}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    {isArabic ? "الأسئلة الشائعة" : "FAQ"}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{isArabic ? "تابعنا" : "Follow Us"}</h4>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  LinkedIn
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div
            className={`text-center text-sm text-muted-foreground border-t border-border pt-8 ${
              isArabic ? "text-right" : ""
            }`}
          >
            <p>{t.footer}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

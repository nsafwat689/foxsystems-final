import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Calendar, User, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";

interface ArticleDetailProps {
  articleId: string;
}

const articleContent: Record<string, any> = {
  "voip-basics": {
    title: "Understanding VoIP Technology: The Complete Guide",
    subtitle: "Master the fundamentals of Voice over Internet Protocol",
    author: "Fox Systems Team",
    date: "2025-01-15",
    category: "VoIP",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    content: `
      <h2>What is VoIP?</h2>
      <p>Voice over Internet Protocol (VoIP) is a revolutionary technology that enables voice communication and multimedia sessions over Internet Protocol (IP) networks. Unlike traditional phone systems that rely on circuit-switched networks, VoIP converts voice signals into digital packets and transmits them over the internet.</p>

      <h2>How VoIP Works</h2>
      <p>VoIP technology operates through a sophisticated process. When you speak into a VoIP phone or microphone, your voice is converted into digital data packets. These packets are then transmitted over the internet to the recipient's device, where they are converted back into audio. This process happens in real-time, enabling seamless conversations.</p>

      <h3>Key Components of VoIP:</h3>
      <ul>
        <li><strong>VoIP Phone:</strong> Can be a hardware phone or software application</li>
        <li><strong>VoIP Service Provider:</strong> Manages the call routing and connectivity</li>
        <li><strong>Internet Connection:</strong> Required for transmitting voice data</li>
        <li><strong>Codec:</strong> Compresses and decompresses voice data</li>
      </ul>

      <h2>Advantages of VoIP</h2>
      <p>VoIP offers numerous benefits for businesses and individuals:</p>
      <ul>
        <li><strong>Cost Savings:</strong> Significantly lower costs compared to traditional phone systems</li>
        <li><strong>Flexibility:</strong> Make calls from anywhere with an internet connection</li>
        <li><strong>Scalability:</strong> Easy to add or remove users as your business grows</li>
        <li><strong>Advanced Features:</strong> Call forwarding, voicemail, call recording, and more</li>
        <li><strong>Integration:</strong> Seamlessly integrates with business applications</li>
      </ul>

      <h2>VoIP vs Traditional Phone Systems</h2>
      <p>Traditional phone systems use dedicated phone lines and circuit-switched networks, while VoIP uses the internet. This fundamental difference results in:</p>
      <ul>
        <li>Lower infrastructure costs</li>
        <li>Greater flexibility and mobility</li>
        <li>Better scalability</li>
        <li>Advanced communication features</li>
      </ul>

      <h2>Conclusion</h2>
      <p>VoIP technology has transformed business communication, offering cost-effective, flexible, and feature-rich solutions. Whether you're a small startup or a large enterprise, VoIP can significantly improve your communication infrastructure.</p>
    `,
  },
  "pbx-systems": {
    title: "Private Branch Exchange (PBX) Systems Explained",
    subtitle: "Optimize your internal communication infrastructure",
    author: "Fox Systems Team",
    date: "2025-01-12",
    category: "PBX",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    content: `
      <h2>Understanding PBX Systems</h2>
      <p>A Private Branch Exchange (PBX) is a telephone system within an organization that switches calls between users on local lines while allowing all users to share a certain number of external phone lines. PBX systems are essential for managing internal and external communications efficiently.</p>

      <h2>Traditional vs Modern PBX</h2>
      <p>Traditional PBX systems were hardware-based and required significant physical infrastructure. Modern PBX systems, particularly IP PBX (Internet Protocol PBX), operate over data networks and offer greater flexibility and scalability.</p>

      <h3>Key Differences:</h3>
      <ul>
        <li><strong>Traditional PBX:</strong> Hardware-based, circuit-switched, limited features</li>
        <li><strong>IP PBX:</strong> Software-based, packet-switched, advanced features</li>
      </ul>

      <h2>Benefits of PBX Systems</h2>
      <ul>
        <li><strong>Cost Efficiency:</strong> Reduce external line requirements and costs</li>
        <li><strong>Internal Communication:</strong> Seamless communication between employees</li>
        <li><strong>Professional Image:</strong> Advanced call routing and auto-attendant features</li>
        <li><strong>Scalability:</strong> Easy to add extensions as your organization grows</li>
        <li><strong>Advanced Features:</strong> Call forwarding, voicemail, call recording, and conferencing</li>
      </ul>

      <h2>PBX Features</h2>
      <p>Modern PBX systems offer a wide range of features:</p>
      <ul>
        <li>Automatic Call Distribution (ACD)</li>
        <li>Interactive Voice Response (IVR)</li>
        <li>Call Recording and Monitoring</li>
        <li>Voicemail and Email Integration</li>
        <li>Conference Bridging</li>
        <li>Call Forwarding and Transfer</li>
      </ul>

      <h2>Choosing the Right PBX System</h2>
      <p>When selecting a PBX system, consider your organization's size, budget, and communication needs. IP PBX systems are increasingly popular due to their flexibility, scalability, and integration capabilities with modern business applications.</p>

      <h2>Conclusion</h2>
      <p>PBX systems remain a cornerstone of business communication infrastructure. Whether you choose a traditional or IP-based solution, a well-implemented PBX system can significantly improve your organization's communication efficiency.</p>
    `,
  },
  "asterisk-server": {
    title: "Asterisk Server: Building Powerful Communication Systems",
    subtitle: "Leverage open-source telecommunications technology",
    author: "Fox Systems Team",
    date: "2025-01-10",
    category: "Asterisk",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    content: `
      <h2>What is Asterisk?</h2>
      <p>Asterisk is an open-source framework for building communications applications. It provides the core infrastructure for VoIP and PBX systems, allowing organizations to build custom telecommunications solutions tailored to their specific needs.</p>

      <h2>Key Features of Asterisk</h2>
      <ul>
        <li><strong>Open Source:</strong> Free and customizable</li>
        <li><strong>Cross-Platform:</strong> Runs on Linux, Windows, and Mac</li>
        <li><strong>VoIP Support:</strong> Supports multiple VoIP protocols</li>
        <li><strong>PBX Functionality:</strong> Full-featured PBX capabilities</li>
        <li><strong>IVR:</strong> Interactive Voice Response systems</li>
        <li><strong>Call Recording:</strong> Built-in call recording capabilities</li>
      </ul>

      <h2>Asterisk Architecture</h2>
      <p>Asterisk operates as a modular system with several key components:</p>
      <ul>
        <li><strong>Core:</strong> Handles call routing and switching</li>
        <li><strong>Channels:</strong> Interface with different communication protocols</li>
        <li><strong>Applications:</strong> Provide PBX functionality</li>
        <li><strong>Codecs:</strong> Handle voice compression and decompression</li>
      </ul>

      <h2>Asterisk Applications</h2>
      <p>Asterisk can be used for various telecommunications applications:</p>
      <ul>
        <li>IP PBX systems for businesses</li>
        <li>Call centers and contact centers</li>
        <li>IVR and auto-attendant systems</li>
        <li>VoIP gateways</li>
        <li>Conference bridges</li>
        <li>Custom telecommunications applications</li>
      </ul>

      <h2>Advantages of Asterisk</h2>
      <ul>
        <li><strong>Cost-Effective:</strong> Open source and free</li>
        <li><strong>Flexible:</strong> Highly customizable for specific needs</li>
        <li><strong>Scalable:</strong> Can handle small to large deployments</li>
        <li><strong>Community Support:</strong> Large and active community</li>
        <li><strong>Integration:</strong> Integrates with various business applications</li>
      </ul>

      <h2>Getting Started with Asterisk</h2>
      <p>Implementing Asterisk requires technical expertise. Consider working with experienced telecommunications professionals to ensure proper deployment and configuration for your organization's needs.</p>

      <h2>Conclusion</h2>
      <p>Asterisk provides a powerful, flexible, and cost-effective platform for building telecommunications systems. Whether you're building a small office PBX or a large-scale call center, Asterisk offers the tools and flexibility needed for success.</p>
    `,
  },
  "telecom-trends": {
    title: "2025 Telecommunications Trends: What's Next?",
    subtitle: "Stay ahead with emerging telecommunications technologies",
    author: "Fox Systems Team",
    date: "2025-01-08",
    category: "Telecommunications",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    content: `
      <h2>The Evolution of Telecommunications</h2>
      <p>Telecommunications continues to evolve rapidly, driven by technological advancements and changing business needs. Understanding emerging trends helps organizations stay competitive and make informed decisions about their communication infrastructure.</p>

      <h2>Top Telecommunications Trends for 2025</h2>

      <h3>1. Cloud-Based Communications</h3>
      <p>Cloud-based communication systems continue to gain adoption due to their flexibility, scalability, and cost-effectiveness. Organizations are increasingly migrating from on-premises systems to cloud-based solutions.</p>

      <h3>2. AI-Powered Customer Service</h3>
      <p>Artificial Intelligence is transforming customer service with intelligent chatbots, sentiment analysis, and predictive routing. AI-powered systems improve efficiency and customer satisfaction.</p>

      <h3>3. Unified Communications</h3>
      <p>Unified Communications platforms integrate voice, video, messaging, and collaboration tools into a single platform, enabling seamless communication across channels.</p>

      <h3>4. 5G Integration</h3>
      <p>5G technology enables faster, more reliable mobile communications, opening new possibilities for mobile-first business applications.</p>

      <h3>5. Security and Compliance</h3>
      <p>With increasing cyber threats, security and compliance remain top priorities. End-to-end encryption and compliance with regulations like GDPR are essential.</p>

      <h2>Impact on Businesses</h2>
      <p>These trends have significant implications for businesses:</p>
      <ul>
        <li>Improved employee productivity and collaboration</li>
        <li>Enhanced customer experience</li>
        <li>Reduced operational costs</li>
        <li>Better security and compliance</li>
        <li>Greater flexibility and scalability</li>
      </ul>

      <h2>Preparing for the Future</h2>
      <p>To stay ahead in 2025 and beyond, organizations should:</p>
      <ul>
        <li>Evaluate current communication infrastructure</li>
        <li>Plan for cloud migration</li>
        <li>Invest in security measures</li>
        <li>Train employees on new technologies</li>
        <li>Partner with experienced telecommunications providers</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The telecommunications landscape continues to evolve rapidly. By staying informed about emerging trends and making strategic investments, organizations can leverage new technologies to improve communication, enhance productivity, and drive business growth.</p>
    `,
  },
  "voip-security": {
    title: "VoIP Security: Protecting Your Communications",
    subtitle: "Essential security measures for VoIP infrastructure",
    author: "Fox Systems Team",
    date: "2025-01-05",
    category: "VoIP",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    content: `
      <h2>VoIP Security Challenges</h2>
      <p>While VoIP offers numerous benefits, it also introduces security challenges. Voice communications transmitted over the internet are vulnerable to various threats including eavesdropping, call hijacking, and denial-of-service attacks.</p>

      <h2>Common VoIP Security Threats</h2>
      <ul>
        <li><strong>Eavesdropping:</strong> Unauthorized interception of voice communications</li>
        <li><strong>Call Hijacking:</strong> Unauthorized access to active calls</li>
        <li><strong>Denial of Service:</strong> Attacks that disrupt VoIP service</li>
        <li><strong>Phishing:</strong> Social engineering attacks targeting VoIP users</li>
        <li><strong>Malware:</strong> Malicious software targeting VoIP devices</li>
      </ul>

      <h2>VoIP Security Best Practices</h2>

      <h3>1. Encryption</h3>
      <p>Implement end-to-end encryption for all voice communications. Use secure protocols like SRTP (Secure Real-time Transport Protocol) and TLS (Transport Layer Security).</p>

      <h3>2. Firewalls and Access Control</h3>
      <p>Deploy firewalls specifically configured for VoIP traffic. Implement strict access control policies to limit who can access your VoIP system.</p>

      <h3>3. Regular Updates and Patches</h3>
      <p>Keep all VoIP equipment and software updated with the latest security patches. Regularly review and update security configurations.</p>

      <h3>4. Strong Authentication</h3>
      <p>Implement strong authentication mechanisms including multi-factor authentication for VoIP system access.</p>

      <h3>5. Network Segmentation</h3>
      <p>Separate VoIP traffic from general data traffic using VLANs (Virtual Local Area Networks) to limit the impact of potential breaches.</p>

      <h2>Monitoring and Incident Response</h2>
      <p>Implement comprehensive monitoring to detect suspicious activity. Develop an incident response plan to quickly address security breaches.</p>

      <h2>Compliance Considerations</h2>
      <p>Ensure your VoIP security measures comply with relevant regulations such as HIPAA, PCI-DSS, and GDPR depending on your industry and jurisdiction.</p>

      <h2>Conclusion</h2>
      <p>VoIP security is critical for protecting sensitive communications and maintaining business continuity. By implementing comprehensive security measures and staying informed about emerging threats, organizations can safely leverage the benefits of VoIP technology.</p>
    `,
  },
};

const translations = {
  en: {
    home: "Home",
    articles: "Articles",
    readTime: "min read",
    author: "By",
    published: "Published",
    share: "Share",
    contact: "Contact Us",
    relatedArticles: "Related Articles",
    backToArticles: "Back to Articles",
    whatsapp: "WhatsApp Us",
  },
  ar: {
    home: "الرئيسية",
    articles: "المقالات",
    readTime: "دقيقة قراءة",
    author: "بواسطة",
    published: "نُشر في",
    share: "شارك",
    contact: "تواصل معنا",
    relatedArticles: "مقالات ذات صلة",
    backToArticles: "العودة إلى المقالات",
    whatsapp: "واتس آب",
  },
};

export default function ArticleDetail({ articleId }: ArticleDetailProps) {
  const { theme } = useTheme();
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const isArabic = language === "ar";
  const t = translations[language];

  const article = articleContent[articleId] || articleContent["voip-basics"];

  const whatsappNumber = "201557649136";
  const whatsappMessage = `Hi, I'm interested in learning more about your services. I read your article: "${article.title}"`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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
            <img src="/logo.jpg" alt="Fox Systems" className="h-10 w-10 rounded-lg" />
            <span className="font-bold text-lg text-primary hidden sm:inline">Fox Systems</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium hover:text-primary transition">
              {t.home}
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
        </div>
      </nav>

      {/* Article Header */}
      <section className="bg-gradient-to-br from-primary/10 via-transparent to-primary/5 py-12 md:py-16">
        <div className="container">
          <Link href="/articles" className="text-primary hover:underline text-sm mb-4 inline-block">
            ← {t.backToArticles}
          </Link>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span className="text-sm text-muted-foreground">{article.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{article.title}</h1>
            <p className="text-xl text-muted-foreground">{article.subtitle}</p>
            <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${isArabic ? "flex-row-reverse" : ""}`}>
              <span>{t.author} {article.author}</span>
              <span>{t.published} {formatDate(article.date)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container">
          <img src={article.image} alt={article.title} className="w-full h-96 object-cover rounded-lg" />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div
                className="prose prose-sm md:prose-base dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card className="border-2 border-primary/30 sticky top-24">
                <CardHeader>
                  <h3 className="text-xl font-bold">{isArabic ? "هل أنت مهتم؟" : "Interested?"}</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {isArabic
                      ? "تواصل معنا لمعرفة المزيد عن خدماتنا والحلول المتاحة."
                      : "Contact us to learn more about our services and solutions."}
                  </p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {t.whatsapp}
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Share Card */}
              <Card>
                <CardHeader>
                  <h3 className="font-bold flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    {t.share}
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <button className="w-full text-left text-sm text-primary hover:underline">
                      {isArabic ? "شارك على فيسبوك" : "Share on Facebook"}
                    </button>
                    <button className="w-full text-left text-sm text-primary hover:underline">
                      {isArabic ? "شارك على تويتر" : "Share on Twitter"}
                    </button>
                    <button className="w-full text-left text-sm text-primary hover:underline">
                      {isArabic ? "نسخ الرابط" : "Copy Link"}
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
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

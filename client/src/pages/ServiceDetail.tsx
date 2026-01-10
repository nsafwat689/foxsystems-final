import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

interface ServiceDetailProps {
  serviceId: string;
}

const serviceDetails: Record<string, any> = {
  crm: {
    title: "CRM Systems & Solutions",
    subtitle: "Advanced Customer Relationship Management",
    description: "Streamline your sales, marketing, and customer service operations with our enterprise-grade CRM systems designed to enhance customer relationships and drive business growth.",
    overview: "Our CRM solutions provide a comprehensive platform for managing customer interactions, sales pipelines, and marketing campaigns. With advanced analytics and reporting capabilities, you can make data-driven decisions to improve customer satisfaction and increase revenue.",
    benefits: [
      "Centralize all customer data in one secure location",
      "Automate repetitive tasks and workflows",
      "Gain real-time insights into sales performance",
      "Improve customer retention and lifetime value",
      "Enhance team collaboration and productivity",
      "Integrate seamlessly with your existing tools"
    ],
    useCases: [
      "Sales teams managing large pipelines",
      "Marketing departments running campaigns",
      "Customer service teams handling support tickets",
      "Enterprise organizations with complex workflows"
    ],
    features: [
      "Sales pipeline management and forecasting",
      "Customer data centralization and analytics",
      "Automated marketing campaigns",
      "Integration with existing business tools",
      "Real-time reporting and dashboards",
      "Mobile app access for on-the-go management",
      "Advanced search and filtering capabilities",
      "Customizable workflows and automation"
    ]
  },
  firewall: {
    title: "Firewall & Security Solutions",
    subtitle: "Comprehensive Cybersecurity Protection",
    description: "Protect your network from advanced threats with our Sophos-powered firewall and security solutions designed for enterprise-level protection.",
    overview: "Our firewall and security solutions provide multi-layer protection against cyber threats, unauthorized access, and data breaches. With 24/7 monitoring and advanced threat detection, your business stays secure around the clock.",
    benefits: [
      "Protect critical business data from cyber threats",
      "Ensure regulatory compliance and data protection",
      "Maintain network integrity and performance",
      "Reduce security incidents and breaches",
      "Gain visibility into network traffic and threats",
      "Implement security best practices"
    ],
    useCases: [
      "Organizations handling sensitive customer data",
      "Financial institutions requiring compliance",
      "Healthcare providers protecting patient information",
      "Enterprises with multiple office locations"
    ],
    features: [
      "Advanced threat protection and detection",
      "Multi-layer firewall architecture",
      "Intrusion prevention systems (IPS)",
      "DDoS protection and mitigation",
      "Endpoint security management",
      "24/7 security monitoring and response",
      "Vulnerability scanning and assessment",
      "Security incident reporting"
    ]
  },
  networking: {
    title: "Site-to-Site Networking",
    subtitle: "Secure Network Connectivity Solutions",
    description: "Connect multiple office locations seamlessly with our secure and reliable site-to-site networking solutions.",
    overview: "Our networking solutions enable secure communication between your office locations and remote sites. With high-speed connections and advanced routing, your teams can collaborate efficiently regardless of location.",
    benefits: [
      "Enable seamless communication across locations",
      "Improve productivity and collaboration",
      "Ensure business continuity with redundancy",
      "Reduce bandwidth costs with optimization",
      "Maintain network security across sites",
      "Scale your network as your business grows"
    ],
    useCases: [
      "Multi-office organizations",
      "Companies with remote workers",
      "Businesses requiring high availability",
      "Organizations with data center needs"
    ],
    features: [
      "VPN and secure tunneling protocols",
      "High-speed dedicated connections",
      "Load balancing and failover systems",
      "Quality of Service (QoS) optimization",
      "Network monitoring and management",
      "Disaster recovery connectivity",
      "Bandwidth management tools",
      "Network performance analytics"
    ]
  },
  domain: {
    title: "Domain & DNS Services",
    subtitle: "Complete Domain Management",
    description: "Manage your domain, DNS, and Active Directory with our comprehensive domain services for enterprise-level directory management.",
    overview: "Our domain services provide centralized management of user identities, access control, and network resources. With professional DNS configuration and Active Directory setup, your IT operations become streamlined and secure.",
    benefits: [
      "Centralize user and resource management",
      "Enhance security with access controls",
      "Streamline IT operations and administration",
      "Improve user productivity and access",
      "Implement consistent security policies",
      "Reduce IT support costs"
    ],
    useCases: [
      "Organizations with multiple users and resources",
      "Enterprises requiring centralized management",
      "Companies implementing security policies",
      "Organizations with complex IT infrastructure"
    ],
    features: [
      "Domain registration and management",
      "DNS configuration and optimization",
      "Active Directory setup and administration",
      "User and group management",
      "Group Policy implementation",
      "Domain security hardening",
      "DNS failover and redundancy",
      "User authentication and authorization"
    ]
  },
  website: {
    title: "Website Design & Development",
    subtitle: "Professional Web Solutions",
    description: "Create a strong online presence with our professional website design and development services.",
    overview: "Our web design and development team creates modern, responsive websites that attract customers and drive conversions. From concept to deployment, we handle every aspect of your web presence.",
    benefits: [
      "Establish a strong online presence",
      "Attract and engage your target audience",
      "Drive business growth and revenue",
      "Improve search engine visibility",
      "Ensure mobile-friendly experience",
      "Maintain security and performance"
    ],
    useCases: [
      "Startups launching their first website",
      "Businesses modernizing their online presence",
      "E-commerce companies selling online",
      "Organizations requiring content management"
    ],
    features: [
      "Responsive design for all devices",
      "SEO optimization and best practices",
      "E-commerce integration",
      "Content management systems (CMS)",
      "Performance optimization",
      "Security and SSL implementation",
      "Analytics and tracking",
      "Regular updates and maintenance"
    ]
  },
  infrastructure: {
    title: "IT Infrastructure Setup",
    subtitle: "Complete Infrastructure Solutions",
    description: "Build a scalable and reliable IT infrastructure with our comprehensive setup and implementation services.",
    overview: "Our infrastructure experts design and implement complete IT solutions tailored to your business needs. From planning to deployment, we ensure your infrastructure supports your business growth.",
    benefits: [
      "Build a scalable IT foundation",
      "Ensure business continuity",
      "Reduce operational costs",
      "Improve system reliability",
      "Enable future growth and expansion",
      "Implement best practices"
    ],
    useCases: [
      "Startups building their first infrastructure",
      "Growing companies scaling operations",
      "Enterprises modernizing infrastructure",
      "Organizations migrating to cloud"
    ],
    features: [
      "Infrastructure assessment and planning",
      "Server and storage setup",
      "Network architecture design",
      "Cloud integration and migration",
      "Backup and disaster recovery systems",
      "Documentation and training",
      "Performance monitoring",
      "Capacity planning"
    ]
  },
  hardware: {
    title: "Hardware Solutions",
    subtitle: "Enterprise-Grade Hardware",
    description: "Access reliable enterprise-quality hardware devices available in bulk quantities for your infrastructure needs.",
    overview: "We provide high-quality hardware solutions from leading manufacturers with competitive pricing and comprehensive support. Whether you need servers, networking equipment, or storage systems, we have the right solution.",
    benefits: [
      "Access enterprise-grade hardware",
      "Benefit from competitive pricing",
      "Receive comprehensive support",
      "Ensure hardware reliability",
      "Scale your infrastructure",
      "Reduce downtime risks"
    ],
    useCases: [
      "Organizations building new infrastructure",
      "Companies upgrading existing systems",
      "Enterprises requiring bulk hardware",
      "Businesses needing specialized equipment"
    ],
    features: [
      "Enterprise-grade servers and workstations",
      "Network equipment and switches",
      "Storage systems and arrays",
      "Security appliances and firewalls",
      "Backup and recovery devices",
      "Volume pricing and bulk discounts",
      "Warranty and support options",
      "Hardware lifecycle management"
    ]
  },
  voip: {
    title: "VoIP Solutions for Call Centers",
    subtitle: "Advanced Voice Communication",
    description: "Scale your call center operations with our professional VoIP solutions powered by VoIPCat.",
    overview: "Our VoIP solutions are specifically designed for call centers and customer service operations. With crystal-clear audio quality and advanced call management features, you can enhance customer communication and reduce operational costs.",
    benefits: [
      "Enhance customer communication quality",
      "Reduce operational costs significantly",
      "Scale call center operations easily",
      "Improve call handling efficiency",
      "Gain detailed call analytics",
      "Integrate with existing CRM systems"
    ],
    useCases: [
      "Call centers handling high call volumes",
      "Customer service teams",
      "Sales departments managing outbound calls",
      "Organizations requiring multi-channel communication"
    ],
    features: [
      "Crystal-clear voice quality and HD audio",
      "Scalable call center infrastructure",
      "Advanced call routing and IVR systems",
      "Call recording and analytics",
      "Integration with CRM systems",
      "Multi-channel communication support",
      "Real-time call monitoring",
      "Detailed reporting and analytics"
    ]
  },
  support: {
    title: "24/7 Technical Support",
    subtitle: "Comprehensive Support Contracts",
    description: "Ensure your systems run smoothly with our comprehensive 24/7 technical support and maintenance contracts.",
    overview: "Our support team is available around the clock to assist with any technical issues. With proactive monitoring and regular maintenance, we minimize downtime and keep your systems running optimally.",
    benefits: [
      "Minimize system downtime",
      "Ensure system reliability",
      "Focus on your core business",
      "Receive expert technical assistance",
      "Implement preventive maintenance",
      "Reduce support costs"
    ],
    useCases: [
      "Organizations with critical systems",
      "Companies requiring high availability",
      "Businesses without dedicated IT staff",
      "Enterprises with complex infrastructure"
    ],
    features: [
      "24/7 helpdesk support",
      "Proactive system monitoring",
      "Regular maintenance and updates",
      "Priority incident response",
      "Performance optimization",
      "Technical consultation and planning",
      "Remote and on-site support",
      "Monthly reporting and reviews"
    ]
  }
};

export default function ServiceDetail({ serviceId }: ServiceDetailProps) {
  const { theme } = useTheme();
  const [language, setLanguage] = useState("en");
  const isArabic = language === "ar";
  
  const service = serviceDetails[serviceId] || serviceDetails.crm;

  const whatsappNumber = "201557649136";
  const whatsappMessage = `Hi, I'm interested in learning more about ${service.title}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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
              {isArabic ? "الرئيسية" : "Home"}
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary transition">
              {isArabic ? "الخدمات" : "Services"}
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

      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/10 via-transparent to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className={`flex items-center gap-2 mb-6 ${isArabic ? "flex-row-reverse" : ""}`}>
            <Link href="/services" className="text-muted-foreground hover:text-primary transition text-sm">
              {isArabic ? "الخدمات" : "Services"}
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-sm font-medium text-primary">{service.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">{service.subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left Column - Description */}
            <div className="md:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold mb-4">{isArabic ? "نظرة عامة" : "Overview"}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.overview}</p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold mb-6">{isArabic ? "الفوائد الرئيسية" : "Key Benefits"}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit: string, idx: number) => (
                    <div key={idx} className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold mb-6">{isArabic ? "المميزات" : "Features"}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h2 className="text-3xl font-bold mb-6">{isArabic ? "حالات الاستخدام" : "Use Cases"}</h2>
                <div className="space-y-3">
                  {service.useCases.map((useCase: string, idx: number) => (
                    <div key={idx} className="p-4 bg-muted/50 rounded-lg border border-border">
                      <p className="text-foreground">{useCase}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - CTA */}
            <div className="space-y-6">
              <Card className="border-2 border-primary/30 sticky top-24">
                <CardHeader>
                  <h3 className="text-2xl font-bold">{isArabic ? "هل أنت مهتم؟" : "Interested?"}</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {isArabic 
                      ? "تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتك."
                      : "Contact us today for a free consultation and customized quote for your needs."}
                  </p>
                  
                  <div className="space-y-3">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full" size="lg">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        {isArabic ? "WhatsApp" : "WhatsApp Us"}
                      </Button>
                    </a>
                    
                    <Link href="/" className="block">
                      <Button variant="outline" className="w-full" size="lg">
                        <Phone className="w-5 h-5 mr-2" />
                        {isArabic ? "اتصل بنا" : "Call Us"}
                      </Button>
                    </Link>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">{isArabic ? "رقم WhatsApp:" : "WhatsApp:"}</p>
                    <p className="text-lg font-bold text-primary">+{whatsappNumber}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Related Services */}
              <Card>
                <CardHeader>
                  <h3 className="font-bold">{isArabic ? "خدمات ذات صلة" : "Related Services"}</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Link href="/service/crm" className="block text-sm text-primary hover:underline">
                      {isArabic ? "أنظمة CRM" : "CRM Systems"}
                    </Link>
                    <Link href="/service/firewall" className="block text-sm text-primary hover:underline">
                      {isArabic ? "حلول الأمان" : "Security Solutions"}
                    </Link>
                    <Link href="/service/networking" className="block text-sm text-primary hover:underline">
                      {isArabic ? "الشبكات" : "Networking"}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isArabic ? "هل تريد معرفة المزيد؟" : "Ready to Get Started?"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {isArabic
              ? "تواصل مع فريقنا اليوم واكتشف كيف يمكننا مساعدة عملك على النمو والازدهار."
              : "Contact our team today and discover how we can help your business grow and thrive."}
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2">
              <MessageCircle className="w-5 h-5" />
              {isArabic ? "تواصل معنا عبر WhatsApp" : "Contact Us on WhatsApp"}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
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

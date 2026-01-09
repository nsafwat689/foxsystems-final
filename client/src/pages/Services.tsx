import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Shield, Network, Server, Globe, Zap, Users, Phone, ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import { Link } from "wouter";

const translations = {
  en: {
    servicesTitle: "Our Comprehensive IT Services",
    servicesSubtitle: "Tailored solutions designed to meet your business needs",
    breadcrumb: "Services",
    home: "Home",
    backToHome: "Back to Home",
    learnMore: "Learn More",
    getQuote: "Get Quote",
    contactUs: "Contact Us",
    crm Title: "CRM Systems & Solutions",
    crmDesc: "Advanced Customer Relationship Management systems designed to streamline your sales, marketing, and customer service operations.",
    crmFeatures: ["Sales pipeline management and forecasting", "Customer data centralization and analytics", "Automated marketing campaigns", "Integration with existing business tools", "Real-time reporting and dashboards", "Mobile app access for on-the-go management"],
    crmBenefits: "Improve customer satisfaction, increase sales efficiency, and make data-driven decisions with our enterprise-grade CRM solutions.",
    firewallTitle: "Firewall & Security Solutions",
    firewallDesc: "Comprehensive cybersecurity solutions powered by Sophos, protecting your network from advanced threats and unauthorized access.",
    firewallFeatures: ["Advanced threat protection and detection", "Multi-layer firewall architecture", "Intrusion prevention systems (IPS)", "DDoS protection and mitigation", "Endpoint security management", "24/7 security monitoring and response"],
    firewallBenefits: "Protect your critical business data, ensure regulatory compliance, and maintain network integrity with our advanced security infrastructure.",
    networkingTitle: "Site-to-Site Networking",
    networkingDesc: "Secure and reliable network connectivity solutions connecting multiple office locations and remote sites seamlessly.",
    networkingFeatures: ["VPN and secure tunneling protocols", "High-speed dedicated connections", "Load balancing and failover systems", "Quality of Service (QoS) optimization", "Network monitoring and management", "Disaster recovery connectivity"],
    networkingBenefits: "Enable seamless communication across locations, improve productivity, and ensure business continuity with robust networking infrastructure.",
    domainTitle: "Domain & DNS Services",
    domainDesc: "Complete domain management, DNS configuration, and Active Directory solutions for enterprise-level directory services.",
    domainFeatures: ["Domain registration and management", "DNS configuration and optimization", "Active Directory setup and administration", "User and group management", "Group Policy implementation", "Domain security hardening"],
    domainBenefits: "Centralize user management, enhance security, and streamline IT operations with professional domain and directory services.",
    websiteTitle: "Website Design & Development",
    websiteDesc: "Professional website design and development services creating modern, responsive, and conversion-optimized web solutions.",
    websiteFeatures: ["Responsive design for all devices", "SEO optimization and best practices", "E-commerce integration", "Content management systems (CMS)", "Performance optimization", "Security and SSL implementation"],
    websiteBenefits: "Establish a strong online presence, attract customers, and drive business growth with professionally designed websites.",
    infrastructureTitle: "IT Infrastructure Setup",
    infrastructureDesc: "Complete IT infrastructure design and implementation for startups and enterprises, from planning to deployment.",
    infrastructureFeatures: ["Infrastructure assessment and planning", "Server and storage setup", "Network architecture design", "Cloud integration and migration", "Backup and disaster recovery systems", "Documentation and training"],
    infrastructureBenefits: "Build a scalable, secure, and reliable IT foundation that supports your business growth and operational efficiency.",
    hardwareTitle: "Hardware Solutions",
    hardwareDesc: "Quality hardware devices and equipment available in bulk quantities for enterprise deployments and upgrades.",
    hardwareFeatures: ["Enterprise-grade servers and workstations", "Network equipment and switches", "Storage systems and arrays", "Security appliances and firewalls", "Backup and recovery devices", "Volume pricing and bulk discounts"],
    hardwareBenefits: "Access reliable, enterprise-quality hardware with competitive pricing and comprehensive support for your infrastructure needs.",
    voipTitle: "VoIP Solutions for Call Centers",
    voipDesc: "Advanced Voice over IP solutions designed specifically for call centers and customer service operations with enterprise-grade reliability.",
    voipFeatures: ["Crystal-clear voice quality and HD audio", "Scalable call center infrastructure", "Advanced call routing and IVR systems", "Call recording and analytics", "Integration with CRM systems", "Multi-channel communication support"],
    voipBenefits: "Enhance customer communication, reduce operational costs, and scale your call center operations with our professional VoIP solutions powered by VoIPCat.",
    supportTitle: "24/7 Technical Support",
    supportDesc: "Comprehensive monthly support contracts with dedicated technical assistance ensuring your systems run smoothly.",
    supportFeatures: ["24/7 helpdesk support", "Proactive system monitoring", "Regular maintenance and updates", "Priority incident response", "Performance optimization", "Technical consultation and planning"],
    supportBenefits: "Minimize downtime, ensure system reliability, and focus on your business while our experts manage your IT infrastructure.",
    whyChooseUs: "Why Choose Fox Systems",
    whyChooseDesc: "With over 14 years of industry experience, we deliver enterprise-grade solutions backed by expert support.",
    experience: "14+ Years Experience",
    experienceDesc: "Proven track record of successful implementations and satisfied clients",
    expertise: "Expert Team",
    expertiseDesc: "Certified professionals with deep technical knowledge",
    support24: "24/7 Support",
    support24Desc: "Round-the-clock assistance for your critical systems",
    reliability: "Proven Reliability",
    reliabilityDesc: "Enterprise-grade solutions with 99.9% uptime guarantee",
    relatedServices: "Related Services",
    requestDemo: "Request Demo",
    schedule: "Schedule Consultation",
  },
  ar: {
    servicesTitle: "خدماتنا الشاملة لتكنولوجيا المعلومات",
    servicesSubtitle: "حلول مخصصة مصممة لتلبية احتياجات عملك",
    breadcrumb: "الخدمات",
    home: "الرئيسية",
    backToHome: "العودة إلى الرئيسية",
    learnMore: "اعرف المزيد",
    getQuote: "احصل على عرض سعر",
    contactUs: "اتصل بنا",
    crmTitle: "أنظمة وحلول إدارة علاقات العملاء",
    crmDesc: "أنظمة متقدمة لإدارة علاقات العملاء مصممة لتبسيط عمليات المبيعات والتسويق وخدمة العملاء.",
    crmFeatures: ["إدارة مسار المبيعات والتنبؤ", "مركزية بيانات العملاء والتحليلات", "حملات التسويق الآلية", "التكامل مع أدوات الأعمال الموجودة", "التقارير والرسوم البيانية في الوقت الفعلي", "الوصول عبر تطبيق الهاتف المحمول"],
    crmBenefits: "حسّن رضا العملاء، وزد كفاءة المبيعات، واتخذ قرارات تعتمد على البيانات باستخدام حلول CRM على مستوى المؤسسات.",
    firewallTitle: "حلول جدران الحماية والأمان",
    firewallDesc: "حلول أمان سيبراني شاملة مدعومة بـ Sophos، تحمي شبكتك من التهديدات المتقدمة والوصول غير المصرح به.",
    firewallFeatures: ["حماية واكتشاف التهديدات المتقدمة", "معمارية جدار حماية متعددة الطبقات", "أنظمة منع الاختراق (IPS)", "حماية وتخفيف هجمات DDoS", "إدارة أمان نقاط النهاية", "المراقبة الأمنية والاستجابة 24/7"],
    firewallBenefits: "احمِ بيانات عملك الحرجة، وتأكد من الامتثال التنظيمي، وحافظ على سلامة الشبكة باستخدام بنيتنا الأمنية المتقدمة.",
  },
};

export default function Services() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const t = translations[language];
  const isArabic = language === "ar";

  return (
    <div>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-primary transition">
              {t.home}
            </Link>
            <div className="text-slate-600 dark:text-slate-400">/ {t.breadcrumb}</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t.servicesTitle}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {t.servicesSubtitle}
          </p>
        </div>
      </div>

      {/* Services Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <p className="text-center text-slate-600 dark:text-slate-400 mb-8">
          All of our IT services are now listed. Choose one of our comprehensive solutions to learn more.
        </p>
      </div>
    </div>
  );
}

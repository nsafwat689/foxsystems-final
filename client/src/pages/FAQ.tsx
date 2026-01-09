import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { theme } = useTheme();

  const faqs: FAQItem[] = [
    {
      question: "What services does Fox Systems provide?",
      answer: "Fox Systems provides comprehensive IT solutions including CRM systems, cybersecurity and firewall protection, site-to-site networking, domain and DNS services, website design and development, infrastructure setup, hardware solutions, and 24/7 technical support services."
    },
    {
      question: "How long has Fox Systems been in business?",
      answer: "Fox Systems has been serving businesses for over 14 years. We have established ourselves as a trusted partner for companies seeking comprehensive technology solutions and enterprise-grade services."
    },
    {
      question: "Do you offer support for small businesses?",
      answer: "Yes! We provide services tailored to businesses of all sizes, from startups to large enterprises. Our solutions are scalable and can be customized to meet your specific business needs and budget requirements."
    },
    {
      question: "What is included in your 24/7 Support service?",
      answer: "Our 24/7 Support service includes monthly support contracts with dedicated technical assistance. We provide continuous monitoring, rapid response to issues, and proactive maintenance to ensure your systems run smoothly at all times."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement Sophos security systems and advanced firewall protection for your network. Our cybersecurity solutions include regular security audits, threat monitoring, backup systems, and disaster recovery planning to protect your valuable business data."
    },
    {
      question: "Can you help migrate our existing systems?",
      answer: "Yes, we specialize in helping businesses migrate from legacy systems to modern solutions. Our team provides careful planning, data migration, system testing, and training to ensure a smooth transition with minimal downtime."
    },
    {
      question: "What is a CRM system and why do I need one?",
      answer: "A CRM (Customer Relationship Management) system helps businesses manage customer interactions, sales pipelines, and marketing campaigns in one centralized platform. It improves customer relationships, increases sales efficiency, and provides valuable business insights."
    },
    {
      question: "Do you provide on-site installation and training?",
      answer: "Yes, we provide comprehensive on-site installation, setup, and training services. Our team ensures that your staff is properly trained to use all systems effectively, and we're always available for follow-up support."
    },
    {
      question: "What payment options do you accept?",
      answer: "We offer flexible payment options including monthly contracts, annual service agreements, and custom pricing packages. Contact us to discuss a payment plan that works best for your business."
    },
    {
      question: "How can I get started with Fox Systems?",
      answer: "Getting started is easy! You can contact us via WhatsApp (+201557649136), email, or use our live chat feature. We'll discuss your requirements and provide you with a customized solution and pricing."
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/fox_systems_logo_matching.png" alt="Fox Systems" className="h-14 w-auto rounded-lg" />
            <span className="font-bold text-lg text-primary hidden sm:inline">Fox Systems</span>
          </div>
        </div>
      </nav>

      {/* FAQ Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-transparent to-primary/5">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">Find answers to common questions about our services, solutions, and support offerings.</p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-20">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden transition-all hover:border-primary/50 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-muted/50 hover:bg-muted transition-colors"
                >
                  <h3 className="text-left font-semibold text-lg">{faq.question}</h3>
                  <div className="flex-shrink-0 ml-4">
                    {expandedIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-primary" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-muted-foreground" />
                    )}
                  </div>
                </button>
                {expandedIndex === index && (
                  <div className="px-6 py-4 bg-background border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Didn't find your answer?</h2>
            <p className="text-lg text-muted-foreground mb-8">Contact us directly and our team will be happy to help you with any questions or concerns.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
              >
                Get in Touch
              </a>
              <a
                href="https://wa.me/201557649136"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-8">
        <div className="container">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Fox Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

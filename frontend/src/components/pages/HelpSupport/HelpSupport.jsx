import React, { useState } from "react";
import {
  Search,
  MessageCircle,
  Mail,
  Phone,
  Clock,
  HelpCircle,
  BookOpen,
  Video,
  Send,
  ChevronDown,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  User,
  FileText,
  Shield,
  CreditCard,
  Settings,
} from "lucide-react";

const HelpSupport = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const categories = [
    { id: "all", name: "All Topics", icon: <HelpCircle className="w-5 h-5" /> },
    { id: "account", name: "Account", icon: <User className="w-5 h-5" /> },
    {
      id: "payment",
      name: "Payment",
      icon: <CreditCard className="w-5 h-5" />,
    },
    { id: "quiz", name: "Quiz Issues", icon: <FileText className="w-5 h-5" /> },
    { id: "security", name: "Security", icon: <Shield className="w-5 h-5" /> },
    {
      id: "settings",
      name: "Settings",
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  const faqs = [
    {
      category: "account",
      question: "How do I create an account?",
      answer:
        "Click on 'Sign Up' button in the header, fill in your details (username, email, password), and submit. You can also sign up using Google, GitHub, or Facebook for quick access.",
    },
    {
      category: "account",
      question: "I forgot my password. What should I do?",
      answer:
        "Click on 'Forgot Password' on the login page, enter your registered email, and we'll send you a reset link within 5 minutes.",
    },
    {
      category: "payment",
      question: "What payment methods do you accept?",
      answer:
        "We accept Credit/Debit cards (Visa, Mastercard, Amex), UPI, Net Banking, and popular wallets like PayTM, PhonePe, and Google Pay.",
    },
    {
      category: "payment",
      question: "How do I get a refund?",
      answer:
        "Refund requests can be made within 7 days of purchase. Go to Profile → Orders → Select order → Request Refund. Processing takes 5-7 business days.",
    },
    {
      category: "quiz",
      question: "Why is my quiz score not updating?",
      answer:
        "Try refreshing the page. If the issue persists, clear your browser cache or try a different browser. Contact support if the problem continues.",
    },
    {
      category: "quiz",
      question: "Can I pause a quiz and resume later?",
      answer:
        "Currently, quizzes cannot be paused. You must complete them in one session. However, we're working on adding this feature soon!",
    },
    {
      category: "security",
      question: "Is my personal information safe?",
      answer:
        "Yes! We use industry-standard encryption (SSL/TLS) to protect your data. We never share your information with third parties without consent.",
    },
    {
      category: "security",
      question: "How do I enable two-factor authentication?",
      answer:
        "Go to Settings → Security → Enable 2FA. You'll receive a verification code via email or SMS each time you log in.",
    },
    {
      category: "settings",
      question: "How do I change my email address?",
      answer:
        "Navigate to Settings → Account → Email Settings. Enter your new email and verify it through the confirmation link sent to both old and new addresses.",
    },
    {
      category: "settings",
      question: "Can I delete my account?",
      answer:
        "Yes, go to Settings → Account → Delete Account. Note: This action is permanent and all your data will be erased within 30 days.",
    },
  ];

  const quickLinks = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "User Guide",
      desc: "Complete documentation",
      link: "#",
    },
    {
      icon: <Video className="w-5 h-5" />,
      title: "Video Tutorials",
      desc: "Learn visually",
      link: "#",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Terms of Service",
      desc: "Legal information",
      link: "#",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Privacy Policy",
      desc: "Your data protection",
      link: "#",
    },
  ];

  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      desc: "Average response: 2 minutes",
      status: "Online",
      color: "bg-green-500",
      action: "Start Chat",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      desc: "support@quizbattle.com",
      status: "24/7",
      color: "bg-blue-500",
      action: "Send Email",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      desc: "+91 7050043530",
      status: "Mon-Fri, 9AM-6PM",
      color: "bg-purple-500",
      action: "Call Now",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchedCategory =
      faq.category === selectedCategory || selectedCategory === "all";
    const matchedQuestion = faq.question
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchedCategory && matchedQuestion;
  });

  const handleFormChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll respond within 24 hours.");
    setContactForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-zinc-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white mb-3">
            Help & Support
          </h1>
          <p className="text-gray-400 text-lg">We're here to help you 24/7</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            />
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-zinc-800 border border-zinc-700 rounded-md p-6 hover:border-purple-500/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 ${method.color} rounded-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                >
                  {method.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-1">{method.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{method.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {method.status}
                    </span>
                    <button className="text-xs text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1">
                      {method.action}
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - FAQs */}
          <div className="lg:col-span-2 space-y-6">
            {/* Category Filters */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-md p-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all ${
                      selectedCategory === cat.id
                        ? "bg-purple-500 text-white"
                        : "bg-zinc-700 text-gray-400 hover:bg-zinc-600"
                    }`}
                  >
                    {cat.icon}
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQs List */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-md p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-purple-400" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-zinc-700 rounded-md overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="w-full flex items-center justify-between p-4 bg-zinc-700/50 hover:bg-zinc-700 transition-colors text-left"
                    >
                      <span className="font-semibold text-white pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="p-4 bg-zinc-800 border-t border-zinc-700">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-md p-6">
              <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    className="flex items-center gap-3 p-4 bg-zinc-700/50 rounded-md hover:bg-zinc-700 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-purple-500/20 rounded-md flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{link.title}</h4>
                      <p className="text-xs text-gray-400">{link.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-6">
            {/* Business Hours */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-md p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                Support Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white font-semibold">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white font-semibold">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-white font-semibold">Closed</span>
                </div>
                <div className="pt-3 border-t border-zinc-700 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400 font-semibold">
                    Currently Online
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-md p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Send className="w-5 h-5 text-purple-400" />
                Send us a Message
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleFormChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleFormChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleFormChange}
                    placeholder="How can we help?"
                    required
                    className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleFormChange}
                    placeholder="Describe your issue in detail..."
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-md hover:shadow-lg hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Response Time */}
            <div className="bg-green-500/10 border border-green-500/30 rounded-md p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-400 mb-1">
                    Fast Response
                  </h4>
                  <p className="text-sm text-gray-400">
                    We typically respond within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Still need help?
          </h2>
          <p className="text-white/80 mb-6">
            Our support team is always ready to assist you
          </p>
          <button className="px-8 py-3 bg-white text-purple-600 font-bold rounded-md hover:bg-gray-100 transition-colors">
            Contact Support Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default HelpSupport;

import { useState, useEffect } from "react";
import {
  Mail,
  Globe,
  Phone,
  MapPin,
  CheckCircle,
  Database,
  Shield,
  CloudUpload,
  Network,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "./App.css";
import logo from "./assets/apti-logo.png"
import Navbar from "./components/Navbar";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-white text-black py-4 px-4 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10  rounded-full flex items-center justify-center">
              <img src={logo} width={50} height={50} className="text-white font-bold text-lg" />
            </div>
            <span className="text-3xl font-bold text-blue-600">AptiSync</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-8">

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-sm">support@aptisync.com</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-20 left-10 w-16 h-16 bg-red-500 rounded-full opacity-80 transition-all duration-1000 ${
              isVisible ? "animate-pulse" : ""
            }`}
          ></div>
          <div
            className={`absolute top-32 left-32 w-8 h-8 bg-yellow-400 rounded-full transition-all duration-1000 delay-200 ${
              isVisible ? "animate-bounce" : ""
            }`}
          ></div>
          <div className="absolute top-96 right-20 w-32 h-32 border-4 border-purple-500 rounded-full opacity-60 animate-spin-slow"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 border-4 border-red-500 opacity-40"></div>
          {/* <div className="absolute bottom-60 right-40 w-20 h-20 bg-green-500 rounded-full opacity-60"></div> */}
          <div className="absolute top-40 right-60 w-0 h-0 border-l-[30px] border-r-[30px] border-b-[50px] border-l-transparent border-r-transparent border-b-blue-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Google Cloud Logo */}
            <div
              className={`relative transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="text-6xl lg:text-8xl font-bold">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-400">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
                <span className="text-gray-400 ml-4">Cloud</span>
              </div>
            </div>

            {/* Right Side - Content */}
            <div
              className={`space-y-6 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Google Cloud Platform (GCP)
              </h1>

              <div className="w-16 h-1 bg-blue-500"></div>

              <p className="text-gray-300 text-lg leading-relaxed">
                Organizations need new technologies to work seamlessly and
                effortlessly to move forward in this dynamic and disruptive
                world. Enabling digitalization and modernization; Google Cloud
                Platform (GCP), is a simple and developer-friendly cloud
                platform that offers a range of infrastructure and platform
                services. It also has serverless platforms to build resilient,
                durable, and scalable applications of top form for your
                business. One of the biggest cloud providers, GCP caters to all
                the cloud computing needs of organizations, especially SMBs.
              </p>

              <p className="text-gray-400 leading-relaxed">
                As more and more organizations are moving towards hybrid and
                cloud-native computing, the Google Cloud Platform acts as a
                perfect tool for their business needs. It helps businesses in
                computing and storing data, helping developers build, test, and
                deploy applications.
              </p>

              <p className="text-gray-400 leading-relaxed">
                With 19 years of experience, AptiSync can help businesses with
                application transformations, cloud migrations, managed services,
                and billing services. We also provide consultation and advisory
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* We Got Your Back Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              We got your back
            </h2>
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-16 h-1 bg-blue-500"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Database className="w-16 h-16 text-blue-400" />,
                title:
                  "Are you looking for a developer-friendly cloud solution?",
              },
              {
                icon: <Shield className="w-16 h-16 text-blue-400" />,
                title: "Are you looking for a secure and safe solution?",
              },
              {
                icon: <CloudUpload className="w-16 h-16 text-blue-400" />,
                title:
                  "Are you looking for a cloud computing service with a customized solution?",
              },
              {
                icon: <Network className="w-16 h-16 text-blue-400" />,
                title:
                  "Do you want to manage hybrid workloads from a single platform?",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gray-700 p-8 rounded-lg text-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Google Cloud Platform
            </h2>
            <h3 className="text-3xl lg:text-4xl font-light mb-8">Features</h3>
            <div className="flex justify-center items-center gap-4">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-16 h-1 bg-blue-500"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Global Presence",
                description:
                  "Services powered by Google Cloud can be accessed and managed from anywhere without compromising security. This helps businesses in reaching their customers globally.",
              },
              {
                title: "Competitive Prices",
                description:
                  "Google Cloud Platform provides highly competitive prices as compared to other players in the market, which gives an edge to Google. All the services are available under the Pay-As-You-Go model, which also provides the flexibility to discontinue at any point in time.",
              },
              {
                title: "Better Security",
                description:
                  "Security is an integral part of any organization. Understanding this, Google Cloud Platform provides an array of security features which includes monitoring logs of cloud activity, data encryption, and disaster recovery plans.",
              },
              {
                title: "Better Collaboration",
                description:
                  "GCP stores all data in the cloud; where users are assigned GCP basic and custom RBAC roles which makes collaboration easy while maintaining access control.",
              },
              {
                title: "Serverless Technology",
                description:
                  "With the fully managed serverless technology of GCP, organizations can focus on developing highly scalable applications and functions easily. Serverless technology",
              },
              {
                title: "Container Native Solutions",
                description:
                  "Google Cloud Platform provides innovative and robust container-native services that can be used in public clouds, bare metal servers,",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`space-y-4 hover:transform hover:scale-105 transition-all duration-300 ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Google Cloud Platform
            </h2>
            <h3 className="text-3xl lg:text-4xl font-light mb-8">
              Services We Offer
            </h3>
            <div className="flex justify-center items-center gap-4">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-16 h-1 bg-blue-500"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Migration",
                description:
                  "At AptiSync, the partner of Google Cloud, we offer cloud migration services to businesses. We assess, analyze and prepare the landing page for shifting any legacy, modern, and container workload from on-premises or public cloud environments to GCP.",
              },
              {
                title: "Consultations",
                description:
                  "With tremendous growth, comes the management of multiple business verticals. Our cloud solution architects will help your business by providing scalable and resilient customized solutions for your business transformation and expansion.",
              },
              {
                title: "Managed Services",
                description:
                  "Our cloud experts help you focus on your real business objectives, while we manage your services. We help you in maintaining, monitoring, optimizing, and configuring your services.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`space-y-4 hover:transform hover:scale-105 transition-all duration-300 ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">We're here</h2>
            <h3 className="text-3xl lg:text-4xl font-light mb-8">
              to help you!
            </h3>
            <div className="flex justify-center items-center gap-4">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-16 h-1 bg-blue-500"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <form className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Input
                placeholder="Name"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
              <Input
                placeholder="Email Address"
                type="email"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
              <Input
                placeholder="Phone Number"
                type="tel"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
              <Input
                placeholder="Website"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </form>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="robot" className="w-4 h-4" />
                <label htmlFor="robot" className="text-sm">
                  I'm Not a Robot
                </label>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                SEND MESSAGE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why AptiSync Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Why</h2>
            <h3 className="text-3xl lg:text-4xl font-light mb-8">AptiSync?</h3>
            <div className="flex justify-center items-center gap-4 mb-12">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-16 h-1 bg-blue-500"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-lg leading-relaxed max-w-6xl mx-auto">
              AptiSync is a Cloud Solutions Company helping clients realize the
              exact potential of the cloud to help their businesses grow. We are
              a leading cloud service company, providing cloud solutions,
              deployment, and data migration services since 2004. Offering
              certification, compliance, cloud security and security testing
              services is also something we excel at. On top of this, we also
              provide cloud security products such as VMCs, GoDMARC, BIMI,
              GoSimulator and SSL. We are an authorized Google Workspace
              reseller in India and work from key cities such as Mumbai,
              Bengaluru, Chennai, Delhi and Surat. We also operate from New
              Jersey & San Francisco in the US.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Google Cloud Specialization in Work transformation for SMBs and Enterprise.",
              "Promoting Women empowerment with 80% Female team members.",
              "20+ Years of experience in Cloud Technology.",
              "Alliances + Experience of Cloud Integrated Technologies.",
              "250+ Google Certified Professionals.",
              "24X7 Customer Support.",
              "5 Offices in Key Indian Cities + 2 US Cities.",
              "Google Cloud Expertises in SMB, Financial Services and Chrome OS.",
              "Strong understanding of Cloud Security.",
              "Award-winning partners of Google Cloud for the last three years.",
              "20,000+ Satisfied Customers.",
              "90% of Support tickets responded in 4 Minutes and were resolved in 40 minutes.",
            ].map((point, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 hover:transform hover:scale-105 transition-all duration-300 ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6">APTISYNC</h3>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">India</h4>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-400">
                    513B,5TH FLOOR,MINERVA COMPLEX, SAROJINI DEVI ROAD, SECUNDERABAD Andhra Pradesh INDIA 500003
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {/* <Phone className="w-4 h-4" /> */}
                  {/* <p className="text-sm text-gray-400">+91 775 784 1333</p> */}
                </div>
              </div>
            </div>

            {/* About Us */}
            <div>
              <h3 className="text-xl font-bold mb-6">ABOUT US</h3>
              <ul className="space-y-2">
                {[
                  "Company Profile",
                  "Management",
                  "Awards",
                  "Our Partnership",
                  "Reseller",
                  "Career",
                  "Case Studies",
                  "Contact Us",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-xl font-bold mb-6">PRODUCTS</h3>
              <ul className="space-y-2">
                {[
                  "Cloud Email Solutions",
                  "Chrome Solutions",
                  "SaaS Products",
                  "Cloud Security",
                  "Book Your Domain",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6">SERVICES</h3>
              <ul className="space-y-2">
                {[
                  "Google Cloud Platform",
                  "Change Management",
                  "Managed Services",
                  "Support Packages",
                  "Request a Support",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-xl font-bold mb-6">Follow Us</h3>
              <p className="text-gray-400 mb-6">
                To get help and learn more about our products, refer below
                provided links
              </p>
              <div className="flex gap-3">
                {[
                  {
                    icon: <Facebook className="w-5 h-5" />,
                    color: "bg-blue-600",
                  },
                  {
                    icon: <Instagram className="w-5 h-5" />,
                    color: "bg-pink-600",
                  },
                  {
                    icon: <Linkedin className="w-5 h-5" />,
                    color: "bg-blue-700",
                  },
                  {
                    icon: <Twitter className="w-5 h-5" />,
                    color: "bg-blue-400",
                  },
                  {
                    icon: <Youtube className="w-5 h-5" />,
                    color: "bg-red-600",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`${social.color} p-2 rounded-full hover:opacity-80 transition-opacity duration-300`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Copyright AptiSync All rights are reserved. | Privacy
              Policy | Terms & Conditions | Refund Policy
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
      )}

      {/* Chat Widget */}
      {/* <div className="fixed bottom-6 right-20 z-40">
        <div className="bg-white text-black p-3 rounded-lg shadow-lg mb-2 max-w-xs">
          <div className="text-sm font-semibold">We're offline</div>
          <div className="text-xs text-gray-600">Leave a message</div>
        </div>
        <Button className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg">
          <Mail className="w-6 h-6" />
        </Button>
      </div> */}
    </div>
  );
}

export default App;

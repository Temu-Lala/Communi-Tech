"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GradientText } from "@/components/gradient-text"
import { useCursor } from "@/components/cursor-provider"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function SolutionsPage() {
  const { setIsHovering } = useCursor()

  const solutionCategories = ["All", "Fraud Prevention", "Specialized Solutions", "System Development"]

  const solutions = [
    // Fraud Prevention Solutions
    
    {
      id: "herbie-bot",
      title: "Herbie Bot",
      description: "Automate customer interactions with AI-driven chatbots.",
      features: [
        "AI-powered natural language processing (NLP)",
        "24/7 automated customer support",
        "Integration with websites, mobile apps, and WhatsApp",
        "Custom responses and smart learning capabilities",
        "Lead generation and FAQ automation",
      ],
      category: "Fraud Prevention",
      icon: "📄",
      image: "https://img.freepik.com/free-vector/vintage-robot-toy-white-background_1308-77501.jpg?t=st=1742388507~exp=1742392107~hmac=15219e4a8d3ccae58cd4151e71c07bb6a3c3dd552181e0017c66e2a7be7c8304&w=740",
    },{
      id: "smart-document",
      title: "SMART Document",
      description: "Secure document management with advanced authentication features to prevent fraud in critical documents.",
      features: [
        "Multi-layer security features",
        "Tamper-evident technology",
        "Digital authentication capabilities",
        "Integration with existing systems",
        "Customizable security levels",
      ],
      category: "Fraud Prevention",
      icon: "📄",
      image: "https://img.freepik.com/free-vector/contract-agreement-isometric-composition-with-human-hand-putting-electronic-signature-blue-background-3d-vector-illustration_1284-78848.jpg?t=st=1741979946~exp=1741983546~hmac=a35940c345d2610859f5b129f4a03ce4446976e2100c9487021c3465c70f4af6&w=826",
    },
    {
      id: "smart-cheque",
      title: "SMART Cheque",
      description: "Fraud-resistant cheque solution with multi-layer security for financial transactions.",
      features: [
        "Advanced anti-counterfeiting features",
        "Real-time verification capabilities",
        "Integration with banking systems",
        "Audit trail and tracking",
        "Customizable security elements",
      ],
      category: "Fraud Prevention",
      icon: "💰",
      image: "https://img.freepik.com/free-vector/businessman-hand-giving-signed-bank-check-other-female-person-business-composition-realistic-vector-illustration_1284-82109.jpg?t=st=1741980019~exp=1741983619~hmac=0b1a6ad307a3bfb31390d7dd8f67053f1175c3063bebcfa548be6e4f00d390b6&w=1380",
    },
    {
      id: "smart-boarding-pass",
      title: "SMART Boarding Pass",
      description: "Secure boarding pass system with enhanced verification features to prevent unauthorized access.",
      features: [
        "Tamper-proof design",
        "Real-time passenger verification",
        "Integration with airline systems",
        "Streamlined boarding process",
        "Enhanced security protocols",
      ],
      category: "Fraud Prevention",
      icon: "✈️",
      image: "https://img.freepik.com/free-photo/front-view-male-flight-attendant-posing_23-2150312702.jpg?t=st=1741980476~exp=1741984076~hmac=f9e85ee30450033e246dd450e863380ff20cfc49ad70589b35acd5a96ff6faba&w=740",
    },
    {
      id: "academic-certificates",
      title: "Academic Certificates",
      description: "Fraud-proof academic certificates with secure verification and tamper-proof design.",
      features: [
        "Blockchain-based verification",
        "Tamper-evident seals",
        "Digital authentication",
        "Global recognition",
        "Integration with educational systems",
      ],
      category: "Fraud Prevention",
      icon: "🎓",
      image: "https://img.freepik.com/free-vector/certificate-graduation-template_1284-57903.jpg?t=st=1741980575~exp=1741984175~hmac=07e7eae8b0263958c2ce21fdd6deb2789f0832cc4c3b5f76a3c6e7049492d671&w=1380",
    },
    {
      id: "trade-licenses",
      title: "Trade Licenses",
      description: "Secure trade licenses with advanced fraud prevention mechanisms for businesses.",
      features: [
        "Digital verification",
        "Tamper-proof design",
        "Integration with government systems",
        "Customizable security levels",
        "Real-time updates",
      ],
      category: "Fraud Prevention",
      icon: "📜",
      image: "https://img.freepik.com/free-vector/global-research-businessman-strategy-illustration-concept_1344-192.jpg?t=st=1741980946~exp=1741984546~hmac=20f9143d878b002908b750bc898f8c5500338ba4c47b66b52e2645c86cf811af&w=826",
    },
    {
      id: "insurance-policies",
      title: "Insurance Policies",
      description: "Fraud-resistant insurance policies with secure digital authentication.",
      features: [
        "Multi-layer security",
        "Real-time verification",
        "Integration with insurance systems",
        "Customizable security protocols",
        "Audit trail and tracking",
      ],
      category: "Fraud Prevention",
      icon: "🛡️",
      image: "https://img.freepik.com/free-vector/father-shaking-hands-with-insurance-agent_74855-4412.jpg?t=st=1741981025~exp=1741984625~hmac=e294b42bc51b113dbff51e6229e3b4e7fff7b47a264949f1d6c277db6231c4a9&w=826",
    },
    {
      id: "customs-declaration",
      title: "Customs Declaration",
      description: "Secure customs declaration system to prevent fraud in international trade.",
      features: [
        "Digital authentication",
        "Real-time verification",
        "Integration with customs systems",
        "Tamper-proof design",
        "Customizable security levels",
      ],
      category: "Fraud Prevention",
      icon: "🌍",
      image: "https://img.freepik.com/free-vector/store-staff-check-number-products-that-must-be-delivered-customers-day_1150-51079.jpg?t=st=1741981171~exp=1741984771~hmac=5748f29e231515a6d7e904c030bbbd396737c118303d934b712b113a6965c77b&w=1380",
    },
    {
      id: "permits",
      title: "Permits",
      description: "Fraud-proof permits with advanced security features for regulatory compliance.",
      features: [
        "Digital verification",
        "Tamper-evident design",
        "Integration with government systems",
        "Customizable security protocols",
        "Real-time updates",
      ],
      category: "Fraud Prevention",
      icon: "📝",
      image: "https://img.freepik.com/free-vector/building-permit-concept-illustration_114360-7579.jpg?t=st=1741981233~exp=1741984833~hmac=ad2d655c1ec22e928ab46b83939e2bc5da3158a45b3f6e2ed62c140e63bc156b&w=826",
    },
    {
      id: "title-deeds",
      title: "Title Deeds",
      description: "Secure title deeds with advanced fraud prevention mechanisms for property management.",
      features: [
        "Blockchain-based verification",
        "Tamper-proof design",
        "Integration with land registry systems",
        "Customizable security levels",
        "Real-time updates",
      ],
      category: "Fraud Prevention",
      icon: "🏠",
      image: "https://img.freepik.com/free-photo/crop-ethnic-businessman-signing-papers_23-2147768593.jpg?t=st=1741981598~exp=1741985198~hmac=e10967ec3d94b96234fe8fef4a1df11a9cf4035c3ffbf449193000fe5936316b&w=1380",
    },

    // Specialized Solutions
    {
      id: "smart-parking",
      title: "SMART Parking",
      description: "Intelligent parking management system with RFID technology for seamless operations.",
      features: [
        "Automated entry and exit",
        "Real-time space availability",
        "Integrated payment systems",
        "Analytics and reporting",
        "Enhanced security features",
      ],
      category: "Specialized Solutions",
      icon: "🚗",
      image: "https://img.freepik.com/free-vector/self-service-isometric-composition-with-outdoor-scenery-parking-lot-with-male-driver-paying-with-terminal-vector-illustration_1284-81871.jpg?t=st=1741981722~exp=1741985322~hmac=4b86c6b4ed888a92ea629fa522f64ee0eec1d542d07d4bd9e27633fe557ac796&w=1380",
    },
    {
      id: "smart-video-broadcast",
      title: "SMART Video Broadcast",
      description: "Advanced video broadcasting solution with enhanced security for seamless content delivery.",
      features: [
        "Secure content delivery",
        "High-quality streaming",
        "Access control and authentication",
        "Analytics and viewer insights",
        "Customizable deployment options",
      ],
      category: "Specialized Solutions",
      icon: "📹",
      image: "https://img.freepik.com/free-photo/freelancer-video-editor-with-disability-wheelchair-having-videocall-while-editing-postproduction-project-creating-content-modern-company-office-videographer-working-from-photo-studio_482257-12945.jpg?t=st=1741981810~exp=1741985410~hmac=bb37b30c5d814c9f840d5c2c041be6da13cbd9a57f4aa9c48749fcb61d63d31f&w=1380",
    },
    {
      id: "smart-index",
      title: "SMART Index",
      description: "Comprehensive indexing solution for efficient data management and retrieval.",
      features: [
        "Real-time data indexing",
        "Advanced search capabilities",
        "Integration with existing systems",
        "Customizable indexing rules",
        "Scalable architecture",
      ],
      category: "Specialized Solutions",
      icon: "📊",
      image: "https://img.freepik.com/free-photo/close-up-hand-holding-futuristic-screen_23-2149126945.jpg?t=st=1741981899~exp=1741985499~hmac=841c94b78489b1fcb47b732cd829f96e6065ed46d6fde063c144e665bb467e2a&w=1380",
    },
    {
      id: "smart-healthcare-management",
      title: "SMART Healthcare Management",
      description: "Integrated healthcare management system for efficient patient care and administration.",
      features: [
        "Patient record management",
        "Appointment scheduling",
        "Billing and invoicing",
        "Integration with medical devices",
        "Customizable workflows",
      ],
      category: "Specialized Solutions",
      icon: "🏥",
      image: "https://img.freepik.com/free-vector/online-doctor-innovative-idea_23-2148509774.jpg?t=st=1741981988~exp=1741985588~hmac=d8f36e76d17300176a782c9c9e1c4c295d94b503fed0c063b68fca6a1439196f&w=826",
    },
    {
      id: "ocr-file-tracking",
      title: "OCR File Tracking",
      description: "Optical Character Recognition (OCR) based file tracking system for efficient document management.",
      features: [
        "Automated file recognition",
        "Real-time tracking",
        "Integration with existing systems",
        "Customizable workflows",
        "Scalable architecture",
      ],
      category: "Specialized Solutions",
      icon: "📂",
      image: "https://img.freepik.com/free-vector/file-searching-concept-landing-page_23-2148292954.jpg?t=st=1741982070~exp=1741985670~hmac=e94e5072a2259e4ffd3fcb62381be77abafc910028383a31a9476c455c844dce&w=826",
    },

    // System Development Solutions
    {
      id: "networking-system",
      title: "Networking System",
      description: "Robust networking solutions for seamless connectivity and communication.",
      features: [
        "High-speed data transfer",
        "Secure network architecture",
        "Scalable infrastructure",
        "24/7 monitoring and support",
        "Customizable configurations",
      ],
      category: "System Development",
      icon: "🌐",
      image: "https://img.freepik.com/free-photo/laptop-which-there-is-world-people-drawn_1232-288.jpg?t=st=1741982133~exp=1741985733~hmac=b524102de364ce272a833d94ac0fa304fe32da672b3cdd500fd94f6fa5a39143&w=1380",
    },
    {
      id: "cloud-computing",
      title: "Cloud Computing",
      description: "Scalable cloud computing solutions for efficient data storage and processing.",
      features: [
        "Flexible storage options",
        "High availability",
        "Secure data encryption",
        "Integration with existing systems",
        "Customizable deployment",
      ],
      category: "System Development",
      icon: "☁️",
      image: "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399284.jpg?t=st=1741982207~exp=1741985807~hmac=2e17a3224ef4125f5663becfc597f31d8fb6c37c427b1ea745e86c620737f786&w=1380",
    },
    {
      id: "cyber-training",
      title: "Cyber Training",
      description: "Comprehensive cybersecurity training programs to enhance organizational security.",
      features: [
        "Customizable training modules",
        "Real-world simulations",
        "Certification programs",
        "Ongoing support",
        "Scalable training solutions",
      ],
      category: "System Development",
      icon: "🛡️",
      image: "https://img.freepik.com/free-photo/group-multinational-busy-people-working-office_146671-15660.jpg?t=st=1741982498~exp=1741986098~hmac=251856ac469ad834605177763fecb59e9d99092cb4b26068b094d5a002857e53&w=1380",
    },
    {
      id: "mobile-app",
      title: "Mobile App Development",
      description: "Custom mobile app development for seamless user experiences.",
      features: [
        "Cross-platform compatibility",
        "User-friendly design",
        "Integration with existing systems",
        "Scalable architecture",
        "Ongoing support",
      ],
      category: "System Development",
      icon: "📱",
      image: "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169863.jpg?t=st=1741982564~exp=1741986164~hmac=dfd5d2eca5c62d053a3780037a4194f3f073b2ae474efa77439a6190078859cc&w=826",
    },
    {
      id: "website-development",
      title: "Website Development",
      description: "Custom website development for businesses to enhance online presence.",
      features: [
        "Responsive design",
        "SEO optimization",
        "Integration with existing systems",
        "Scalable architecture",
        "Ongoing support",
      ],
      category: "System Development",
      icon: "💻",
      image: "https://img.freepik.com/free-photo/website-development-links-seo-webinar-cyberspace-concept_53876-120953.jpg?t=st=1741982743~exp=1741986343~hmac=e34b22a1acbc6abc3812d79bf41119b6c1e0f901bcabca453aceb25c700f051c&w=826",
    },
    {
      id: "ai-ml",
      title: "AI & ML Solutions",
      description: "Advanced AI and Machine Learning solutions for intelligent automation and insights.",
      features: [
        "Predictive analytics",
        "Natural Language Processing (NLP)",
        "Integration with existing systems",
        "Customizable models",
        "Scalable architecture",
      ],
      category: "System Development",
      icon: "🤖",
      image: "https://img.freepik.com/free-photo/ai-chip-artificial-intelligence-future-technology-innovation_53876-129780.jpg?t=st=1741982803~exp=1741986403~hmac=89d1bed47982557d82fcfb78bfc70e4165fa1c926fdae63beeb96f9395eaed97&w=826",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/30 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our <GradientText className="bg-gradient-to-r from-blue-400 to-yellow-400">SMART Solutions</GradientText>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/80 mb-8"
            >
              Patented technology solutions for enhanced security, fraud prevention, and operational efficiency
            </motion.p>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-24 bg-gradient-to-b from-black to-blue-950">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Patented SMART Technology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-white/70"
            >
              Our experts have created innovative SMART solutions to address critical security and operational
              challenges
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.slice(0, 4).map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all hover:border-white/20 hover:bg-white/10"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-white">{solution.title}</h3>
                <p className="mb-4 text-white/70">{solution.description}</p>
                <Link href={`#${solution.id}`} className="flex items-center text-blue-400 group">
                  <span className="font-medium">Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Solutions */}
      <section className="py-24 bg-blue-950" id="solutions-detail">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Explore Our Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-white/70 max-w-2xl mx-auto"
            >
              Discover our comprehensive range of SMART technology solutions designed to meet your specific business
              needs
            </motion.p>
          </div>

          <Tabs defaultValue="All" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-12">
              {solutionCategories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {solutionCategories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {solutions
                    .filter((solution) => category === "All" || solution.category === category)
                    .map((solution) => (
                      <motion.div
                        key={solution.id}
                        id={solution.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
                      >
                        <div className="relative h-[200px]">
                          <Image
                            src={solution.image || "/placeholder.svg"}
                            alt={solution.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                          <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-white/70 mb-6">{solution.description}</p>
                          <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                          <div className="space-y-3 mb-6">
                            {solution.features.map((feature, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                                <p className="text-white/70">{feature}</p>
                              </div>
                            ))}
                          </div>
                          <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                            <Button asChild className="rounded-full px-8 bg-blue-600 hover:bg-blue-700">
                              <Link href="/contact">Request Information</Link>
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

   
     {/* Implementation Process */}
<section className="py-24 bg-gradient-to-b from-blue-950 to-black">
  <div className="container px-4 md:px-6">
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-white mb-6"
      >
        Our Implementation Process
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg text-white/70 max-w-2xl mx-auto"
      >
        A structured approach that ensures successful delivery of your SMART technology solutions
      </motion.p>
    </div>

    {/* Process Steps with Connecting Lines */}
    <div className="relative">
      {/* Horizontal Line */}
      <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/20 hidden md:block" />

      {/* Grid for Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            step: 1,
            title: "Assessment",
            description:
              "We analyze your security requirements, challenges, and goals to develop a comprehensive understanding of your needs.",
          },
          {
            step: 2,
            title: "Solution Design",
            description:
              "Our team creates a customized solution design, technical specifications, and implementation plan.",
          },
          {
            step: 3,
            title: "Implementation",
            description:
              "Our expert team implements your solution with minimal disruption to your operations.",
          },
          {
            step: 4,
            title: "Support & Optimization",
            description:
              "We provide ongoing support, monitoring, and optimization to ensure your solution continues to perform optimally.",
          },
        ].map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Step Number */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg z-10">
              {step.step}
            </div>

            {/* Step Content */}
            <div className="pt-16 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-white/70">{step.description}</p>
            </div>

            {/* Vertical Line (for Mobile) */}
            {index < 3 && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-white/20 md:hidden" />
            )}

            {/* Horizontal Line (for Desktop) */}
            {index < 3 && (
              <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-1/2 h-[2px] bg-white/20 hidden md:block" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 md:p-12"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] bg-yellow-400/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[20%] w-[30vw] h-[30vw] bg-white/5 rounded-full blur-[100px]" />
              </div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Implement SMART Solutions?</h2>
              <p className="text-white/80 text-lg mb-8">
                Contact us today to discuss how our SMART technology solutions can help secure your business and improve
                operational efficiency.
              </p>
              <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8" asChild>
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
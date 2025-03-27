"use client"

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
  media?: {
    type: 'video' | 'audio';
    source: 'tiktok' | 'youtube' | 'facebook' | 'cloud';
    url: string;
    thumbnail?: string;
  }[];
}

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const [playingMedia, setPlayingMedia] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Introduction to Financial Fraud in Ethiopia",
      excerpt: "Understanding the landscape of financial fraud in Ethiopia's growing digital economy",
      content: `
        <p>Ethiopia's rapid digital transformation has brought both opportunities and risks. Financial fraud has evolved from simple scams to sophisticated cybercrimes targeting mobile banking users.</p>
        
        <h3 className="font-semibold mt-4">Common Fraud Types:</h3>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Mobile banking PIN theft</li>
          <li>Fake agent fraud</li>
          <li>SIM swap scams</li>
          <li>Phishing messages pretending to be banks</li>
        </ul>
      `,
      date: "June 1, 2024",
      author: "Yilma Mengstu",
      tags: ["Financial", "Awareness"],
      image: "/assets/photos/introduction.jpg",
      media: [
        {
          type: 'video',
          source: 'youtube',
          url: 'https://www.youtube.com/embed/example1',
          thumbnail: '/assets/thumbnails/video1.jpg'
        }
      ]
    },
    {
      id: 2,
      title: "Educational Institution Scams",
      excerpt: "How fraudsters target students and academic organizations",
      content: `
        <p>With the growth of online education, Ethiopian students face increasing risks of academic fraud.</p>
        
        <h3 className="font-semibold mt-4">Warning Signs:</h3>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>"Guaranteed admission" offers</li>
          <li>Fake scholarship programs</li>
          <li>Degree certificate forgery</li>
          <li>Exam paper leaks</li>
        </ul>
      `,
      date: "June 8, 2024",
      author: "Yilma Mengstu",
      tags: ["Education", "Students"],
      image: "/assets/photos/school.jpg",
      media: [
        {
          type: 'audio',
          source: 'cloud',
          url: 'https://example.com/audio1.mp3',
          thumbnail: '/assets/thumbnails/audio1.jpg'
        }
      ]
    },
    {
      id: 3,
      title: "Mobile Banking Security",
      excerpt: "Protecting your Telebirr, M-Birr and CBE Birr accounts",
      content: `
        <p>Mobile money services have become prime targets for fraudsters in Ethiopia.</p>
        
        <h3 className="font-semibold mt-4">Essential Protections:</h3>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Never share your PIN</li>
          <li>Enable transaction notifications</li>
          <li>Verify agent IDs before transactions</li>
          <li>Use official apps only</li>
        </ul>
      `,
      date: "June 15, 2024",
      author: "Yilma Mengstu",
      tags: ["Mobile Money", "Security"],
      image: "/assets/photos/mobilebank.jpg",
      media: [
        {
          type: 'video',
          source: 'tiktok',
          url: 'https://www.tiktok.com/embed/example3',
          thumbnail: '/assets/thumbnails/video3.jpg'
        }
      ]
    },
    {
      id: 4,
      title: "Social Engineering Attacks",
      excerpt: "How scammers manipulate victims psychologically",
      content: `
        <p>Social engineering relies on human psychology rather than technical hacking.</p>
        
        <h3 className="font-semibold mt-4">Common Tactics:</h3>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Urgency and fear tactics</li>
          <li>Pretending to be authority figures</li>
          <li>Fake emergencies</li>
          <li>Overpayment scams</li>
        </ul>
      `,
      date: "June 22, 2024",
      author: "Yilma Mengstu",
      tags: ["Psychology", "Scams"],
      image: "/assets/photos/comunity.jpg",
      media: [
        {
          type: 'video',
          source: 'facebook',
          url: 'https://www.facebook.com/plugins/video.php?href=example4',
          thumbnail: '/assets/thumbnails/video4.jpg'
        }
      ]
    },
    {
      id: 5,
      title: "E-Commerce Fraud Prevention",
      excerpt: "Safe online shopping practices for Ethiopian consumers",
      content: `
        <p>As e-commerce grows in Ethiopia, so do fraudulent online stores.</p>
        
        <h3 className="font-semibold mt-4">Red Flags:</h3>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Prices too good to be true</li>
          <li>No physical address</li>
          <li>Unsecured payment methods</li>
          <li>No customer reviews</li>
        </ul>
      `,
      date: "June 29, 2024",
      author: "Yilma Mengstu",
      tags: ["E-Commerce", "Shopping"],
      image: "/assets/photos/ecomers.jpg",
      media: [
        {
          type: 'audio',
          source: 'cloud',
          url: 'https://example.com/audio2.mp3',
          thumbnail: '/assets/thumbnails/audio2.jpg'
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const expandVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: "auto", opacity: 1 }
  };

  const playMedia = (url: string) => {
    setPlayingMedia(url === playingMedia ? null : url);
  };

  return (
    <div className="container mx-auto px-4 py-12 relative">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-800 transform -translate-x-1/2 z-0"></div>

      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-center relative z-10"
      >
       Our Blogs
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative rounded-xl overflow-hidden mb-16 z-10"
      >
        <div className="aspect-[21/9] bg-muted">
          <Image
            src="/assets/photos/blog.jpg"  
            alt="Fraud Prevention"
            className="w-full h-full object-cover"
            width={1920}
            height={1080} 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
          <div className="p-8 text-white max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">5 Critical Fraud Prevention Topics</h2>
            <p className="text-white/80">
              A comprehensive guide to protecting yourself in Ethiopia's digital landscape
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-24 relative z-10"
      >
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            variants={itemVariants}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center relative`}
          >
            {/* Timeline dot */}
            <div className="hidden md:block absolute left-1/2 top-1/2 w-6 h-6 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 border-4 border-white dark:border-gray-900"></div>

            {/* Text Content */}
            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} relative z-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg`}>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span> • <span>{post.author}</span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                >
                  {expandedPost === post.id ? 'Show Less' : 'Read More'}
                </motion.button>
              </div>

              <motion.div
                initial="collapsed"
                animate={expandedPost === post.id ? "expanded" : "collapsed"}
                variants={expandVariants}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div 
                    className="text-gray-700 dark:text-gray-300 mb-4 prose dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  {post.media && post.media.length > 0 && (
                    <div className="mt-6 space-y-4">
                      <h4 className="font-medium">Related Media:</h4>
                      <div className="grid gap-4">
                        {post.media.map((media, i) => (
                          <div key={i} className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                            {media.type === 'video' ? (
                              <div className="aspect-video bg-black relative">
                                {playingMedia === media.url ? (
                                  <iframe 
                                    src={media.url}
                                    className="w-full h-full"
                                    allowFullScreen
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  ></iframe>
                                ) : (
                                  <>
                                    <Image
                                      src={media.thumbnail || '/assets/default-thumbnail.jpg'}
                                      alt="Video thumbnail"
                                      fill
                                      className="object-cover"
                                    />
                                    <button 
                                      onClick={() => playMedia(media.url)}
                                      className="absolute inset-0 flex items-center justify-center"
                                    >
                                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M8 5v14l11-7z" />
                                        </svg>
                                      </div>
                                    </button>
                                  </>
                                )}
                              </div>
                            ) : (
                              <div className="p-4 flex items-center gap-4 bg-gray-50 dark:bg-gray-800">
                                <Image
                                  src={media.thumbnail || '/assets/default-audio.jpg'}
                                  alt="Audio thumbnail"
                                  width={80}
                                  height={80}
                                  className="rounded-lg"
                                />
                                <div className="flex-1">
                                  <div className="font-medium">Audio Explanation</div>
                                  <audio 
                                    ref={audioRef}
                                    src={media.url}
                                    controls
                                    className="w-full mt-2"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div 
              className="md:w-1/2 rounded-xl overflow-hidden shadow-lg relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src={post.image} 
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;
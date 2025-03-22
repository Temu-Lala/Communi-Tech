module.exports = {
    siteUrl: 'https://www.communitech.com', // Replace with your website URL
    generateRobotsTxt: true, // Generate robots.txt file
    sitemapSize: 7000, // Split large sitemaps into multiple files
    exclude: ['/', '/about', '/solutions', '/contact', '/team'], // Exclude specific routes
    changefreq: 'daily', // Change frequency for sitemap entries
    priority: 0.7, // Priority for sitemap entries
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
        {
          userAgent: '*',
          disallow: '/admin',
        },
      ],
    },
  };
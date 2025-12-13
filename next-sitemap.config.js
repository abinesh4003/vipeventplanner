/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.vipeventmanagement.in',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  generateIndexSitemap: false,
  exclude: ['/api/*'],

  transform: async (config, path) => {
    const customPriorities = {
      '/': { priority: 1.0, changefreq: 'daily' },
      '/services': { priority: 0.9, changefreq: 'weekly' },
      '/about': { priority: 0.9, changefreq: 'monthly' },
      '/contact': { priority: 0.9, changefreq: 'weekly' },
      '/gallery': { priority: 0.9, changefreq: 'monthly' },
      '/testimonials': { priority: 0.9, changefreq: 'monthly' },
      '/faqs': { priority: 0.6, changefreq: 'monthly' },
      '/privacy-policy': { priority: 0.6, changefreq: 'yearly' },
      '/terms-of-service': { priority: 0.6, changefreq: 'yearly' },
    }

    const current = customPriorities[path] || {
      priority: config.priority,
      changefreq: config.changefreq,
    }

    return {
      loc: path,
      changefreq: current.changefreq,
      priority: current.priority,
      lastmod: new Date().toISOString(),
    }
  },
}

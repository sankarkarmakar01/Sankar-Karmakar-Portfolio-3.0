import type { IConfig } from "next-sitemap";

const config: IConfig = {
  siteUrl: "https://sankar-karmakar-portfolio.vercel.app/",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 1.0,
  generateIndexSitemap: true,
};

export default config;

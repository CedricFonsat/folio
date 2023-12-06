import React from 'react';
import { xml } from 'xmlbuilder';

const Sitemap = () => {
  const baseUrl = 'http://fonsat.ovh'; // Remplacez par l'URL de base de votre site
  const pages = [
    { path: '/', changefreq: 'weekly', priority: 1.0 },
    { path: '/about', changefreq: 'monthly', priority: 0.8 },
    // Ajoutez plus de pages au besoin
  ];

  const generateSitemapXML = () => {
    const sitemap = xml({ version: '1.0', encoding: 'UTF-8' }, 
      { urlset: { '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9' } }
    );

    pages.forEach((page) => {
      sitemap.element({
        url: {
          loc: `${baseUrl}${page.path}`,
          lastmod: new Date().toISOString(),
          changefreq: page.changefreq,
          priority: page.priority,
        },
      });
    });

    return sitemap.end({ pretty: true });
  };

  return (
    <pre style={{ whiteSpace: 'pre-wrap' }}>
      {generateSitemapXML()}
    </pre>
  );
};

export default Sitemap;
import React from 'react';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = 'https://www.hirealize.in/logo.png',
  ogType = 'website'
}) => {
  const siteName = 'Hirealize Consultants';
  const fullTitle = `${title} | ${siteName}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical || 'https://www.hirealize.in/'} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical || 'https://www.hirealize.in/'} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </>
  );
};

export default SEO;

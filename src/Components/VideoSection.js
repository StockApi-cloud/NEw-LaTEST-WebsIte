import React from 'react';
import { Helmet } from 'react-helmet';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <>
      <Helmet>
        <title>Stock Market Classes in Bihar | Stock Archery</title>
        <meta name="description" content="Join Stock Archery for expert stock market classes in Bihar. Learn trading strategies and investment techniques with our comprehensive courses. Enroll today!" />
        <meta name="keywords" content="stock market classes near me, stock market class, stock trading courses, learn stock market Bihar, Stock Archery" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Stock Archery" />
        <meta property="og:title" content="Stock Market Classes in Bihar | Stock Archery" />
        <meta property="og:description" content="Master the stock market with Stock Archery's expert-led classes in Bihar. Tailored courses for beginners and advanced traders. Start today!" />
        <meta property="og:image" content="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1741760954/stock_archery_image.jpg" />
        <meta property="og:url" content="https://www.stockarchery.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stock Market Classes in Bihar | Stock Archery" />
        <meta name="twitter:description" content="Learn stock trading with Stock Archery's expert classes in Bihar. Enroll now for top-tier stock market education!" />
        <meta name="twitter:image" content="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1741760954/stock_archery_image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Stock Market Classes by Stock Archery",
            "description": "Comprehensive stock market classes in Bihar, offering expert trading strategies and investment knowledge for beginners and advanced traders.",
            "provider": {
              "@type": "Organization",
              "name": "Stock Archery",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Patna",
                "addressRegion": "Bihar",
                "addressCountry": "IN"
              }
            },
            "image": "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1741760954/stock_archery_image.jpg",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>
      <div className="video-section">
        <div className="text-container">
          <h2 className="section-heading">Bihar's First Trading Floor</h2>
          <p className="section-text">
            Welcome to Stock Archery, your premier source for expert stock market classes in Bihar. Achieve trading success with our in-depth resources, tips, and insights tailored for savvy investors. Enroll in our stock market classes today!
          </p>
        </div>
        <div className="image-container">
          <img
            className="image"
            src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1741764726/DSC_3230_swvlls.jpg"
            alt="Stock market classes in Bihar at Stock Archery"
          />
        </div>
      </div>
    </>
  );
};

export default VideoSection;
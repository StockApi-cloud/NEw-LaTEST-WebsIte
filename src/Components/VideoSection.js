import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <section className="video-section" itemScope itemType="https://schema.org/Organization">
      <div className="text-container">
        <h1 className="section-heading">Bihar's Premier Stock Trading Floor at Stock Archery</h1>
        <p className="section-text">
          Discover Stock Archery, Bihar's leading destination for expert stock trading knowledge and strategies. Unlock trading success with our comprehensive resources, expert tips, and tailored insights for savvy investors. Start mastering the stock market today.
        </p>
      </div>
      <div className="image-container">
        <img
          className="section-image"
          src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1741764726/DSC_3230_swvlls.jpg"
          alt="Bihar's first stock trading floor at Stock Archery"
          loading="lazy"
        />
      </div>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Stock Archery",
            "description": "Stock Archery is Bihar's premier stock trading platform offering expert trading knowledge, strategies, and resources for investors.",
            "url": "https://www.stockarchery.com",
            "image": "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1741760954/stock_trading_floor_optimized.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bihar",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.facebook.com/stockarchery",
              "https://www.twitter.com/stockarchery",
              "https://www.linkedin.com/company/stockarchery"
            ]
          }
        `}
      </script>
    </section>
  );
};

export default VideoSection;
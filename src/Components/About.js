import React from 'react';
import { Helmet } from 'react-helmet'; // Import react-helmet for meta tags
import './About.css'; // Import the CSS file

const AboutUs = () => {
    return (
        <>
            {/* Meta Tags for SEO */}
            <Helmet>
                <title>Stock Archery - About Our Trading Classes in Bhagalpur | Learn Stock Market</title>
                <meta
                    name="description"
                    content="Learn about Stock Archery, Bihar’s leading stock market institute in Bhagalpur. Discover our expert-led trading classes covering Nifty 50, Sensex, mutual funds, and technical analysis."
                />
                <meta
                    name="keywords"
                    content="Stock Archery, trading classes in Bhagalpur, stock trading, Nifty 50, BSE Sensex, mutual funds, SIP investment, demat account, intraday trading, technical analysis, Tata Motors, Reliance Industries, HDFC Bank, Bharti Airtel, IPO 2025, stock market news, trading strategies, Zerodha trading, Groww app, stock market for beginners, NSE India, BSE India"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Stock Archery" />

                {/* Open Graph Tags for Social Media */}
                <meta property="og:title" content="About Stock Archery - Trading Classes in Bhagalpur, Bihar" />
                <meta
                    property="og:description"
                    content="Discover Stock Archery’s expert-led trading classes in Bhagalpur. Learn stock trading, Nifty 50, Sensex, mutual funds, and technical analysis with Bihar’s first trading floor."
                />
                <meta property="og:image" content="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152409/logo1_rzt9qj.png" />
                <meta property="og:url" content="https://www.stockarchery.in/about" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Stock Archery - Trading Classes in Bhagalpur" />
                <meta
                    name="twitter:description"
                    content="Join Stock Archery in Bhagalpur for expert trading classes on stock market, Nifty 50, mutual funds, and SIP investment. Start your financial journey today."
                />
                <meta name="twitter:image" content="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152409/logo1_rzt9qj.png" />
            </Helmet>

            {/* Structured Data for SEO */}
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "About Stock Archery - Trading Classes in Bhagalpur",
                        "description": "Stock Archery in Bhagalpur, Bihar, offers expert-led stock trading classes, covering Nifty 50, BSE Sensex, mutual funds, SIP investment, and technical analysis.",
                        "url": "https://www.stockarchery.in/about",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Stock Archery",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152409/logo1_rzt9qj.png"
                            }
                        }
                    }
                `}
            </script>
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Course",
                        "name": "Stock Trading Classes in Bhagalpur",
                        "description": "Learn stock trading, Nifty 50, Sensex, mutual funds, and technical analysis with Stock Archery’s expert-led courses in Bhagalpur, Bihar.",
                        "provider": {
                            "@type": "Organization",
                            "name": "Stock Archery",
                            "sameAs": "https://www.stockarchery.in"
                        },
                        "hasCourseInstance": {
                            "@type": "CourseInstance",
                            "courseMode": "onsite",
                            "location": {
                                "@type": "Place",
                                "name": "Stock Archery Bhagalpur",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Bhagalpur",
                                    "addressRegion": "Bihar",
                                    "addressCountry": "India"
                                }
                            }
                        }
                    }
                `}
            </script>

            {/* Original Content - Unchanged */}
            <div className="about-us-container">
                <div className="about-us-content">
                    <h2 className="about-us-subtitle">About Us</h2>
                    <h1 className="about-us-title">
                        Where trading skills meet 
                        <span className="highlight"> real market </span> 
                        experience. 
                    </h1>
                    <p className="about-us-description">
                        Stock Archery is a leading stock market trading institute, offering expert-led training, live market sessions, and personalized mentorship. With 9 years of experience, we empower traders to master market strategies, manage risks, and achieve consistent profitability.
                    </p>
                    <a href='/ContactUs'> <button className="about-us-button">Contact Us</button></a>
                </div>
                <div className="about-us-image-container">
                    <img src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1742809840/Add_a_heading_2_scoibs.png" alt="Person working on a laptop at a desk with colorful wall art in the background" className="about-us-image" />
                </div>
            </div>

            {/* Card Section - Unchanged */}
            <div className="about-us-cards">
                <div className="carde">
                    <img src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1742800346/Add_a_subheading_2_e8hsr1.png" alt="Expert Training" className="card-image" />
                    <h3 className="carde-title">Expert Training</h3>
                    <p className="carde-description">Learn from industry experts with years of experience.</p>
                </div>
                <div className="carde">
                    <img src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1742800345/Add_a_subheading_3_l8uay9.png" alt="Live Market Sessions" className="card-image" />
                    <h3 className="carde-title">Live Market Sessions</h3>
                    <p className="carde-description">Participate in live trading sessions to gain real-time experience.</p>
                </div>
                <div className="carde">
                    <img src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1742800345/Add_a_subheading_5_kvtkjb.png" alt="Personalized Mentorship" className="card-image" />
                    <h3 className="carde-title">Personalized Mentorship</h3>
                    <p className="carde-description">Get one-on-one mentorship tailored to your trading goals.</p>
                </div>
                <div className="carde">
                    <img src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1742800345/Add_a_subheading_4_rjr3ll.png" alt="Risk Management" className="card-image" />
                    <h3 className="carde-title">Risk Management</h3>
                    <p className="carde-description">Learn effective strategies to manage risks in trading.</p>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
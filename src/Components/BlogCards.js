import React, { memo, useMemo } from 'react';
import './BlogCards.css';

// Moved data outside component to prevent recreation on each render
const blogData = [
     {
        id: 9,
        image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1748325606/Leonardo_Kino_XL_A_dramatic_cinematic_depiction_of_a_stock_mar_1_x3zta0.jpg',
        title: 'Sensex Crashes 800 Points',
        link: '/blog9',
    },
    {
        id: 8,
        image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1748064140/Flux_Dev_A_majestic_golden_Bitcoin_coin_meticulously_detailed__3_leuoxl.jpg',
        title: 'Bitcoin: New All time high Upcoming ?',
        link: '/blog8',
    },
    {
        id: 7,
        image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1747645011/maxresdefault_n3d1so.jpg',
        title: 'RBI Fines Yes Bank ₹29.6 Lakh',
        link: '/blog7',
    },
    {
        id: 6,
        image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1747382676/USA-TRUMP-TARIFFS-INDIA-0_1747295397691_1747295428411_dxbtug.jpg',
        title: 'India Vs Us Tariff Deal',
        link: '/blog6',
    },
    {
        id: 5,
        image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1746867309/Flux_Dev_Create_a_highresolution_digital_illustration_depictin_0_l2a6g1.jpg',
        title: 'India Vs Pakistan War 2025',
        link: '/blog5',
    },
    {
        id: 4,
        image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1745216657/image_fh7ljf.webp',
        title: 'India Renewable Energy Surge',
        link: '/blog4',
    },
    {
        id: 3,
        image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1745045207/Flux_Dev_A_dramatic_sketchstyle_illustration_of_a_trade_war_be_2_1_hcd6hw.jpg',
        title: 'USA Vs CHINA TRIFF WAR',
        link: '/blog3',
    },
    {
        id: 2,
        image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725792479/316945-bajaj-housing-finance-ipo_tx03z5.avif',
        title: 'Bajaj Housing Finance IPO',
        link: '/blog1',
    }
];

// Memoized BlogCard component
const BlogCard = memo(({ blog }) => (
    <div className="card">
        <img 
            src={blog.image} 
            alt={blog.title}
            loading="lazy"
            width="300"
            height="200"
        />
        <h3>{blog.title}</h3>
        {blog.text && <p>{blog.text}</p>}
        <div className="social-icons">
            <a href="https://www.instagram.com/accounts/login/?hl=en" aria-label="Facebook">
                <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/accounts/login/?hl=en" aria-label="Twitter">
                <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/accounts/login/?hl=en" aria-label="Instagram">
                <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
        </div>
        <a href={blog.link} className="read-more" aria-label={`Read more about ${blog.title}`}>Read More</a>
    </div>
));

const BlogCards = () => {
    // Memoize the blog cards to prevent unnecessary re-renders
    const blogCards = useMemo(() => (
        blogData.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
        ))
    ), []); // Empty dependency array since blogData is static

    return (
        <div className="blog-container">
            {blogCards}
        </div>
    );
};

export default memo(BlogCards);
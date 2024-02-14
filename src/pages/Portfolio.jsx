import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Portfolio = () => {
    return (
        <div>
            <Header />
            <section id="portfolio">
                {/* Your Portfolio content goes here */}
                <h2>Portfolio</h2>
                <p>List of your projects goes here...</p>
            </section>
            <Footer />
        </div>
    );
}

export default Portfolio;

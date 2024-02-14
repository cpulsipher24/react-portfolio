import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutMe = () => {
    return (
        <div>
            <Header />
            <section id="about">
                {/* Your About Me content goes here */}
                <h2>About Me</h2>
                <p>Your short bio goes here...</p>
            </section>
            <Footer />
        </div>
    );
}

export default AboutMe;

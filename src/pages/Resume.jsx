import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Resume = () => {
    return (
        <div>
            <Header />
            <section id="resume">
                {/* Your Resume content goes here */}
                <h2>Resume</h2>
                <p>Your resume and proficiencies go here...</p>
            </section>
            <Footer />
        </div>
    );
}

export default Resume;

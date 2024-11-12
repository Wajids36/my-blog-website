import React from 'react';
import Link from 'next/link';

/**
 * About component that displays information about the organization.
 *
 * This functional component renders a section of the website that provides
 * an overview of the organization's mission, values, and commitment to service.
 * It includes a title and several paragraphs that convey the organization's
 * dedication to quality and customer satisfaction.
 *
 * @returns {JSX.Element} A JSX element representing the About Us section.
 */
const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">About Us</h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Welcome to our website! We are dedicated to providing the best service possible.
            Our team is passionate about our work and committed to excellence.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our mission is to deliver high-quality products that meet the needs of our customers.
            We believe in innovation, integrity, and customer satisfaction.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Thank you for visiting our site. We hope you find what you are looking for and enjoy your experience with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import Link from 'next/link';




const newAbout = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-20 max-w-5xl">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-8">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed text-center">
            Welcome to our website! We are dedicated to providing the best service possible. Our team is passionate about our work and committed to excellence.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed text-center">
            Our mission is to deliver high-quality products that meet the needs of our customers. We believe in innovation, integrity, and customer satisfaction.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-center">
            Thank you for visiting our site. We hope you find what you are looking for and enjoy your experience with us.
          </p>
          <div className="text-lg text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
            <div className="space-y-4 text-center">
              <p><strong>Phone:</strong> <a href="tel:+92300-3611032" className="text-blue-600 hover:underline">(+92) 300-3611032</a></p>
              <p><strong>Email:</strong> <a href="mailto:wajialisolangi.51@gmail.com" className="text-blue-600 hover:underline">wajialisolangi.51@gmail.com</a></p>
              <p><strong>Address:</strong> Street # 01, House # D44, Bakhtawat goth, Bhittaiabad, Karachi</p>
              <p><strong>Business Hours:</strong> Mon-Fri, 9am - 5pm</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href="mailto:wajialisolangi.51@gmail.com" className="inline-block bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">
              Contact Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default newAbout;

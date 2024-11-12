'use client'
import Image from "next/image";
import About from "./About/page";
import Typed from 'typed.js';
import React, { useRef, useEffect } from 'react';
import Contact  from "./Contact/page";


export default function Home() {

  
  const TypedComponent = () => {
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Tailwind CSS', 'Web Development', 'Coding', 'Software Engineering', 'Data Science', 'Machine Learning'],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
      });

      // Cleanup function to destroy the Typed instance on component unmount
      return () => {
        typed.destroy();
      };
    }, []); // Empty dependency array to run effect only once

    return <span ref={el} className="text-primary font-semibold" />;
  };

  
  return (
    <main>

      <section className="container px-4 py-10 mx-auto lg:h-128  lg:space-x-8 lg:flex lg:items-center">
      <div className="w-full text-center lg:text-left lg:w-1/2 lg:mt-8">
      <h1 className="text-3xl font-bold text-gray-800 leading-tight dark:text-gray-200 md:text-4xl transition-all duration-300 ease-in-out">
  A <span className="font-semibold transition-colors duration-300 hover:text-primary">free repository</span> for community
  <span className="block lg:inline transition-colors duration-300 hover:text-primary"> components using </span>
  <span className="font-semibold underline decoration-primary transition-colors duration-300 hover:decoration-secondary hover:text-primary">
  <TypedComponent />
  </span>
</h1>

  <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
    Open source Tailwind UI components and templates to
    <span className="block lg:inline"> bootstrap your new apps, projects, or landing sites!</span>
  </p>

  <div className="flex justify-center lg:justify-start mt-6">
    <div className="w-full max-w-md bg-transparent border border-gray-300 rounded-lg focus-within:border-primary dark:border-gray-700">
      <form
        action="https://www.creative-tim.com/twcomponents/search"
        className="flex items-center"
      >
        <input
          type="search"
          name="query"
          placeholder="Search Components"
          required
          className="flex-1 h-12 px-4 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent"
        />
        <button
          type="submit"
          className="p-3 text-white bg-primary rounded-r-lg focus:outline-none hover:bg-primary/80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
    </div>
  </div>
</div>



        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      <br />

      <section className="container px-4 py-8 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center"></section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 text-center">
            Pricing Plans
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 text-center">
            Choose the plan that suits you best
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Basic
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-300">$10/month</p>
              <ul className="mt-6 mb-6 space-y-4">
                <li className="text-gray-600 dark:text-gray-400">
                  10GB Storage
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  Basic Support
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  Single User
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  Community Access
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  Weekly Updates
                </li>
              </ul>
              <button
                className="w-full px-4 py-2 text-white bg:blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                variant="outline"
              >
                Choose Plan
              </button>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Bestseller
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-300">$20/month</p>
              <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-yellow-500 rounded-full">
                Bestseller
              </span>
              <ul className="mt-6 mb-6 space-y-4">
                <li className="text-gray-600 dark:text-gray-400">
                  50GB Storage
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  Priority Support
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  Up to 5 User
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  Community Access
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  Daily Updates
                </li>
              </ul>
              <button
                className="w-full px-4 py-2 text-white bg:blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                variant="outline"
              >
                Choose Plan
              </button>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Premium
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-300">$30/month</p>
              <ul className="mt-6 mb-6 space-y-4">
                <li className="text-gray-600 dark:text-gray-400">
                  200GB Storage
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  24/7 Support
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  Unlimited User
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  Community Access
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  Real-time Update
                </li>
              </ul>
              <button
                className="w-full px-4 py-2 text-white bg:blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                variant="outline"
              >
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-blue-100 dark:bg-blue-900">
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-800 dark:text-blue-200 mb-8">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-blue-500 dark:text-blue-300 text-center">
            Hear from our satisfied customers
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 hover:bg-blue-200 dark:hover:bg-blue-700 text-center">
                <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-200">
                  John Deo
                </h3>
                <p className="mt-4 text-blue-600 dark:text-blue-400">
                  This services has been a game-charger for our business. Highly
                  recommended!
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 hover:bg-blue-200 dark:hover:bg-blue-700 text-center">
                <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-200">
                  Jane Smith
                </h3>
                <p className="mt-4 text-blue-600 dark:text-blue-400">
                  Amazing experience! The team was professional and the result
                  were outstanding.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 hover:bg-blue-200 dark:hover:bg-blue-700 text-center">
                <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-200">
                  Michael Brown
                </h3>
                <p className="mt-4 text-blue-600 dark:text-blue-400">
                  Exceptional service and support. We could not be happier with
                  the results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-12 bg-gray-100 dark:bg-gray-900">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Top Blogs
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Check out our most popular blog posts
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Blog 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Serene Nature Landscape"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    The Benefits of Nature on Mental Health
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Exploring the calming effects of spending time in nature and
                    how it can boost mood and reduce stress levels.
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-300 text-sm">
                    Learn about the science behind nature therapy and discover
                    ways to incorporate more outdoor activities into your daily
                    routine.
                  </p>
                  <a href="/Blog-post-1">
                    <button className="m-2 px-4 py-2 border border-gray-500 rounded text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Blog 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Coffee and Notebook for Morning Creativity"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Enhancing Creativity Through Morning Routines
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Discover how starting your day with simple rituals, like
                    enjoying coffee and writing, can boost your creativity.
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-300 text-sm">
                    Learn about the science behind morning routines and get tips
                    on creating habits that encourage fresh ideas and focus.
                  </p>
                  <a href="/Blog-post-2">
                    <button className="m-2 px-4 py-2 border border-gray-500 rounded text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Modern Workspace with Laptop"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    The Future of Remote Work
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Discover the evolving trends in remote work and how they
                    impact productivity and work-life balance.
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-300 text-sm">
                    Dive into strategies for effective communication, managing
                    virtual teams, and leveraging technology to stay connected.
                  </p>
                  <a href="/Blog-post-3">
                    <button className="m-2 px-4 py-2 border border-gray-500 rounded text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Contact />
    </main>
  );
}

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>

      <div className="min-h-screen py-8 px-4 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 pt-14">About Us</h1>
          <p className="text-lg mb-6">
            Welcome to BookStore! We are passionate about bringing you the best selection of books across various genres. Our mission is to provide a platform where book lovers can discover, explore, and enjoy their favorite reads with ease.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg mb-6">
            Founded in 2023, BookStore started as a small online bookstore with a vision to create a community for book enthusiasts. Over the years, we have grown and expanded our catalog to include a wide range of books from bestsellers to hidden gems.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Customer Satisfaction: We strive to provide the best service and ensure that our customers have a seamless shopping experience.</li>
            <li>Quality Selection: We carefully curate our book collection to offer high-quality and diverse options for every reader.</li>
            <li>Community Engagement: We value our community and are committed to supporting local authors and literary events.</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg mb-6">
            If you have any questions or feedback, feel free to reach out to us at <a href="mailto:tyagishahvez551@gmail.com" className="text-blue-500 hover:underline">info@bookstore.com</a>.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

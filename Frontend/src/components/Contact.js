import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-200 to-pink-100 p-6">
      <div className="bg-white shadow-xl rounded-3xl p-8 max-w-2xl w-full transform transition duration-500 hover:shadow-2xl hover:scale-105 hover:translate-y-2">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Get in Touch
        </h2>
        <form className="space-y-6">
          <div className="relative">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Enter the subject"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Enter your message"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 hover:rotate-1 transition-transform duration-500 ease-in-out transform flex items-center justify-center"
          >
            <i className="material-icons-outlined text-base mr-2">
              Send Message
            </i>
          </button>
        </form>
        <div className="mt-10 text-center text-gray-600">
          <p>Or reach us directly at:</p>
          <p className="font-semibold mt-2">team03cat@gmail.com</p>
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition-colors transform hover:scale-125"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 transition-colors transform hover:scale-125"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors transform hover:scale-125"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

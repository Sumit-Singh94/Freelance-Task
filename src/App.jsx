import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-600">YuGa</div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600">Features</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Solutions</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Pricing</a>
          <button className="text-gray-600 hover:text-blue-600">Talk to Sales</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Get started for FREE
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-200 to-blue-500 text-white py-16 px-6 flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold mb-4">
          The World's First Yogasana Championship Software
        </h1>
        <p className="text-lg mb-6">
          Experience the future of competition management with Yogasana Bharat—a cutting-edge platform designed to streamline every aspect of your championship.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Get started for FREE
        </button>
        <div className="mt-8">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Dashboard Preview"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Championship Stats Section */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold mb-4">
          Championship Excellence, <span className="text-blue-600">Proven by Numbers</span>
        </h2>
        <p className="text-lg mb-6">
          "Join the platform that's transforming competition management—over 250 championships organized, 3,000+ athletes empowered, and 100,000+ events logged. Experience the future of Yogasana excellence today. JOIN NOW"
        </p>
        <div className="flex justify-center space-x-12">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">250+</h3>
            <p>Championships Organized</p>
            <p className="text-sm text-gray-600">
              Our platform powers over 250 successful championships, delivering seamless event management and top-tier competition experiences.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">3,000+</h3>
            <p>Athletes Empowered</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-blue-500 text-white py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Streamlined Athlete Enrollment</h3>
            <p>
              Our platform powers over 250 successful championships, delivering seamless event management and top-tier competition experiences.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Comprehensive Panel Creation</h3>
            <p>
              Build and manage judge panels effortlessly—assign roles and responsibilities to ensure fair and consistent evaluations.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Seamless Multi-Level Management</h3>
            <p>
              With robust features tailored for L1, L2, and L3, our platform integrates administrative tasks, competition oversight.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Dynamic Event & Result Tracking</h3>
            <p>
              Log and track thousands of events in real time, providing clear insights and analytics to help you monitor progress and celebrate success.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Secure and Efficient Workflows</h3>
            <p>
              From locking enrollments to adjusting marks, our software ensures data integrity and a secure workflow.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">User-Friendly Interface & Dedicated Support</h3>
            <p>
              Our software is designed to adapt to your specific championship needs, ensuring a smooth experience from setup to execution.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">A Step-by-Step Guide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="bg-blue-100 p-6 rounded-lg">
              <p className="text-blue-600 mb-2">Step 1</p>
              <h3 className="text-2xl font-semibold mb-2">Let your customers share what they love about you</h3>
              <p>
                Our innovative solutions provide a clear direction, helping you streamline workflows, organize tasks effortlessly, & achieve unparalleled efficiency. Let Zenify Navigator be your compass on the journey to intelligent & effective
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> Create a form in 30 seconds. Share or embed it anywhere
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> Collect video adn text testimonials
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> Import testimonials from 20+ social & review platforms
                </li>
              </ul>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Create Your Organization
              </button>
            </div>
          </div>
          <div>
            <div className="bg-blue-100 p-6 rounded-lg">
              <p className="text-blue-600 mb-2">Step 2</p>
              <h3 className="text-2xl font-semibold mb-2">Save, manage, group, tag and search your testimonials</h3>
              <p>
                Our innovative solutions provide a clear direction, helping you streamline workflows, organize tasks effortlessly, & achieve unparalleled efficiency. Let Zenify Navigator be your compass on the journey to intelligent & effective
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> Create a form in 30 seconds. Share or embed it anywhere
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> Collect video adn text testimonials
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> Import testimonials from 20+ social & review platforms
                </li>
              </ul>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Sign up for FREE
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold">
            <span className="text-green-500">Success!</span> Seamlessly manage your Championship with us
          </h3>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Create Your Championship →
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-4">
          What Yogasana lovers say using our Software
        </h2>
        <p className="text-center mb-12">
          Discover firsthand accounts from organizers, athletes, and judges who have experienced the seamless excellence of our platform. Their stories showcase how we’ve transformed championship management and elevated competitive success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, star) => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
              <p>
                I had a fantastic experience shopping here! The site is easy to navigate, and the customer service is outstanding. My order arrived swiftly, and the product quality was even better than I expected. Highly recommend!
              </p>
              <p className="mt-4 font-semibold">Mahmud Tamvir</p>
              <p className="text-gray-600">Co-Founder of Huge Icons</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-4">
          Flexible Pricing, Unbeatable Value
        </h2>
        <p className="text-center mb-12">
          Discover the perfect plan to power your championships—whether you’re managing local events or global competitions. Our transparent pricing offers affordable options, with no hidden fees. Choose your plan and elevate your events today.
        </p>
        <div className="flex justify-center mb-8">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-l-lg">Monthly</button>
          <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-r-lg">Yearly</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Starter</h3>
            <p className="text-gray-600 mb-4">Perfect for small championships</p>
            <div className="text-4xl font-bold mb-4">$29<span className="text-gray-500 text-sm">/month</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>Up to 100 participants
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>Basic scoring system
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>Email support
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>
          
          <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Professional</h3>
            <p className="mb-4">For growing organizations</p>
            <div className="text-4xl font-bold mb-4">$99<span className="text-sm">/month</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="text-green-300 mr-2">✔</span>Up to 500 participants
              </li>
              <li className="flex items-center">
                <span className="text-green-300 mr-2">✔</span>Advanced scoring system
              </li>
              <li className="flex items-center">
                <span className="text-green-300 mr-2">✔</span>Priority support
              </li>
              <li className="flex items-center">
                <span className="text-green-300 mr-2">✔</span>Real-time analytics
              </li>
            </ul>
            <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100">
              Get Started
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
            <p className="text-gray-600 mb-4">For large scale events</p>
            <div className="text-4xl font-bold mb-4">Custom</div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>Unlimited participants
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>Custom features
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>24/7 dedicated support
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>White-labeling
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold">Company Name</h2>
        <div className="flex justify-center space-x-4 my-4">
          <i className="fab fa-facebook text-blue-500 text-2xl"></i>
          <i className="fab fa-twitter text-blue-400 text-2xl"></i>
          <i className="fab fa-youtube text-red-500 text-2xl"></i>
          <i className="fab fa-instagram text-pink-500 text-2xl"></i>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div>
            <h3 className="text-blue-500 font-bold">Shopify</h3>
            <a href="#" className="block text-gray-700 hover:underline">About us</a>
            <a href="#" className="block text-gray-700 hover:underline">Features</a>
            <a href="#" className="block text-gray-700 hover:underline">Blogs</a>
            <a href="#" className="block text-gray-700 hover:underline">Reviews</a>
            <a href="#" className="block text-gray-700 hover:underline">Pricing</a>
          </div>
          <div>
            <h3 className="text-blue-500 font-bold">Support</h3>
            <a href="#" className="block text-gray-700 hover:underline">Integrations</a>
            <a href="#" className="block text-gray-700 hover:underline">Careers</a>
            <a href="#" className="block text-gray-700 hover:underline">Contact us</a>
            <a href="#" className="block text-gray-700 hover:underline">FAQ's</a>
          </div>
          <div>
            <h3 className="text-blue-500 font-bold">Developers</h3>
            <a href="#" className="block text-gray-700 hover:underline">Changelog</a>
            <a href="#" className="block text-gray-700 hover:underline">Cookie Policy</a>
            <a href="#" className="block text-gray-700 hover:underline">Coming Soon</a>
          </div>
          <div>
            <h3 className="text-blue-500 font-bold">Products</h3>
            <a href="#" className="block text-gray-700 hover:underline">Privacy Policy</a>
            <a href="#" className="block text-gray-700 hover:underline">Licensing</a>
            <a href="#" className="block text-gray-700 hover:underline">Terms & Conditions</a>
            <a href="#" className="block text-gray-700 hover:underline">Password</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;











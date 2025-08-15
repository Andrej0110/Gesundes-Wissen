import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Explore Our Topics
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link to="/" className="block group">
          <div className="relative bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://picsum.photos/400/200?random=1"
              alt="Home"
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                Home
              </h2>
              <p className="text-gray-600 text-sm">
                Discover our homepage and explore what we have to offer.
              </p>
            </div>
            <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
        </Link>
        <Link to="/about" className="block group">
          <div className="relative bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://picsum.photos/400/200?random=2"
              alt="About"
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                About
              </h2>
              <p className="text-gray-600 text-sm">
                Learn about our mission, values, and team.
              </p>
            </div>
            <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
        </Link>
        <Link to="/contact" className="block group">
          <div className="relative bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://picsum.photos/400/200?random=3"
              alt="Contact"
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                Contact
              </h2>
              <p className="text-gray-600 text-sm">
                Get in touch with us for any inquiries.
              </p>
            </div>
            <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
        </Link>
        <Link to="/blog" className="block group">
          <div className="relative bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://picsum.photos/400/200?random=4"
              alt="Blog"
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                Blog
              </h2>
              <p className="text-gray-600 text-sm">
                Read our latest articles and updates.
              </p>
            </div>
            <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

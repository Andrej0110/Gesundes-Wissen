import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Unsere Themen
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link to="/" className="block">
          <div className="bg-white border-4 border-gray-400 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <img
              src="https://picsum.photos/400/200?random=1"
              alt="Startseite"
              className="w-full h-48 object-cover border-b-4 border-gray-400"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Startseite
              </h2>
              <p className="text-gray-700 text-base">
                Entdecke unser Angebot und was uns ausmacht.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/about" className="block">
          <div className="bg-white border-4 border-gray-400 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <img
              src="https://picsum.photos/400/200?random=2"
              alt="Über uns"
              className="w-full h-48 object-cover border-b-4 border-gray-400"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Über uns
              </h2>
              <p className="text-gray-700 text-base">
                Erfahre mehr über unsere Mission und unser Team.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/contact" className="block">
          <div className="bg-white border-4 border-gray-400 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <img
              src="https://picsum.photos/400/200?random=3"
              alt="Kontakt"
              className="w-full h-48 object-cover border-b-4 border-gray-400"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Kontakt</h2>
              <p className="text-gray-700 text-base">
                Nimm Kontakt mit uns auf für Fragen oder Feedback.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/blog" className="block">
          <div className="bg-white border-4 border-gray-400 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <img
              src="https://picsum.photos/400/200?random=4"
              alt="Blog"
              className="w-full h-48 object-cover border-b-4 border-gray-400"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Blog</h2>
              <p className="text-gray-700 text-base">
                Lies unsere neuesten Artikel und Updates.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Navigation</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-gray-600 rounded"
                  : "block p-2 hover:bg-gray-700 rounded"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-gray-600 rounded"
                  : "block p-2 hover:bg-gray-700 rounded"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-gray-600 rounded"
                  : "block p-2 hover:bg-gray-700 rounded"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/entgiften"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-gray-600 rounded"
                  : "block p-2 hover:bg-gray-700 rounded"
              }
            >
              Entgiften und Ausleiten
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;

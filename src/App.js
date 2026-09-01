import "./App.css";
import { Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const navLinkClasses =
  "block px-3 py-1.5 rounded-md border border-slate-300 bg-slate-800 text-white hover:bg-slate-600 transition-colors";

function App() {
  return (
    <>
      <nav>
        <ul className="flex flex-wrap gap-4">
          <li>
            <Link to="/" className={navLinkClasses}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/wordle" className={navLinkClasses}>
              Wordle
            </Link>
          </li>
          <li>
            <Link to="/todo" className={navLinkClasses}>
              Todo
            </Link>
          </li>
          <li>
            <Link to="/todolocalstorage" className={navLinkClasses}>
              Todo Local Storage
            </Link>
          </li>
          {/* <li>
            <Link to="/counter" className={navLinkClasses}>
              Counter
            </Link>
          </li> */}
          <li>
            <Link to="/tasks" className={navLinkClasses}>
              Tasks List
            </Link>
          </li>
          <li>
            <Link to="/scrubshop" className={navLinkClasses}>
              Scrub Shop
            </Link>
          </li>
        </ul>
      </nav>
      <main className="max-w-6xl mx-auto px-4 py-6">
        <AppRoutes />
      </main>
    </>
  );
}

export default App;

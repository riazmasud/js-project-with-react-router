import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Array } from "./pages/Array";
import { BookList } from "./pages/BookList";
import { Book } from "./pages/Book";
import { NewBook } from "./pages/NewBook";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import ShowHide from "./pages/ShowHide";
import Todo from "./pages/Todo";
import TodoLocalStorage from "./pages/TodoLocalStorage";
import AutoComplete from "./pages/AutoComplete";
import UserList from "./pages/UserList";
import ProductPage from "./pages/ProductPage";
import Counter from "./pages/Counter";
import Greetings from "./pages/Greetings";
import Users from "./pages/Users";
import TasksList from "./pages/TasksList";
import Wordle from "./pages/Wordle";
import ScrubShop from "./pages/ScrubShop";

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
            <Link to="/books" className={navLinkClasses}>
              Books
            </Link>
          </li>
          <li>
            <Link to="/about" className={navLinkClasses}>
              About
            </Link>
          </li>
          <li>
            <Link to="/array" className={navLinkClasses}>
              Array
            </Link>
          </li>
          <li>
            <Link to="/showhide" className={navLinkClasses}>
              Show/Hide
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
          <li>
            <Link to="/userlist" className={navLinkClasses}>
              User List
            </Link>
          </li>
          <li>
            <Link to="/autocomplete" className={navLinkClasses}>
              Auto Complete
            </Link>
          </li>
          <li>
            <Link to="/productpage" className={navLinkClasses}>
              Product Page
            </Link>
          </li>
          <li>
            <Link to="/counter" className={navLinkClasses}>
              Counter
            </Link>
          </li>
          <li>
            <Link to="/greetings" className={navLinkClasses}>
              Greetings
            </Link>
          </li>
          <li>
            <Link to="/users" className={navLinkClasses}>
              Users
            </Link>
          </li>
          <li>
            <Link to="/tasks" className={navLinkClasses}>
              Tasks List
            </Link>
          </li>
          <li>
            <Link to="/wordle" className={navLinkClasses}>
              Wordle
            </Link>
          </li>
          <li>
            <Link to="/scrubshop" className={navLinkClasses}>
              Scrub Shop
            </Link>
          </li>
          <li>
            <Link to="/contact" className={navLinkClasses}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <main className="max-w-3xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/array" element={<Array />} />
          <Route path="/books">
            <Route index element={<BookList />} />
            <Route path=":id" element={<Book />} />
            <Route path="new" element={<NewBook />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/showhide" element={<ShowHide />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/todolocalstorage" element={<TodoLocalStorage />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/autocomplete" element={<AutoComplete />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/greetings" element={<Greetings />} />
          <Route path="/users" element={<Users />} />
          <Route path="/tasks" element={<TasksList />} />
          <Route path="/wordle" element={<Wordle />} />
          <Route path="/scrubshop" element={<ScrubShop />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

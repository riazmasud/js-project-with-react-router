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

function App() {
  return (
    <>
      <nav>
        <ul className="flex flex-wrap gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/array">Array</Link>
          </li>
          <li>
            <Link to="/showhide">Show/Hide</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/todolocalstorage">Todo Local Storage</Link>
          </li>
          <li>
            <Link to="/userlist">User List</Link>
          </li>
          <li>
            <Link to="/autocomplete">Auto Complete</Link>
          </li>
          <li>
            <Link to="/productpage">Product Page</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/greetings">Greetings</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks List</Link>
          </li>
          <li>
            <Link to="/wordle">Wordle</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

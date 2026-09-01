import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Array } from "../pages/Array";
import { BookList } from "../pages/BookList";
import { Book } from "../pages/Book";
import { NewBook } from "../pages/NewBook";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound";
import ShowHide from "../pages/ShowHide";
import Todo from "../pages/Todo";
import TodoLocalStorage from "../pages/TodoLocalStorage";
import AutoComplete from "../pages/AutoComplete";
import UserList from "../pages/UserList";
import ProductPage from "../pages/ProductPage";
import Counter from "../pages/Counter";
import Greetings from "../pages/Greetings";
import Users from "../pages/Users";
import TasksList from "../pages/TasksList";
import Wordle from "../pages/Wordle";
import ScrubShop from "../pages/ScrubShop";
import ProductGrid from "../components/ProductGrid";
import Checkout from "../components/Checkout";
import Confirmation from "../components/Confirmation";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/scrubshop" replace />} />
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
      <Route path="/scrubshop" element={<ScrubShop />}>
        <Route index element={<ProductGrid />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="confirmation" element={<Confirmation />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

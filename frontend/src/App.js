import "./App.css";
import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Newproduct from "./pages/Newproduct";
import Signup from "./pages/Signup";
import Payment from "./pages/Payment";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div className="App ">
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/newproduct" element={<Newproduct />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

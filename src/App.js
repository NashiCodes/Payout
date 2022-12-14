import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar/>
      <Container customClass="min-heigth">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route exact path="/Projects" element={<Projects />}></Route>

          <Route exact path="/company" element={<Company />}></Route>

          <Route exact path="/contact" element={<Contact />}></Route>

          <Route exact path="/newproject" element={<NewProject />}></Route>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;

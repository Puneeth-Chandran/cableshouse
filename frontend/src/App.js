import "./App.css";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />

      <main className="main" style={{backgroundColor: "#fafafa"}}>
      <Routes>
         <Route path="/" element={<Home />} />
      </Routes>
      </main>

      <Footer />
    </div>
    </Router>
  );
}

export default App;

import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Footer />
      </main>
      <footer></footer>
    </>
  );
};

export default App;

import React from "react";
import Navbar from "./components/Header/index";
import About from "./components/About/index";
import Resume from "./components/Resume/index";
import Contacto from "./components/Contacto/index";
import Portofolio from "./components/Portofolio";

function ComponentScripts() {
  let scripts = [
    { src: "assets/js/plugins.min.js" },
    { src: "assets/js/app.js" },
  ];

  scripts.map((item) => {
    const script = document.createElement("script");
    script.src = item.src;
    script.async = true;
    document.body.appendChild(script);
  });
}

function App() {
  ComponentScripts();
  return (
    <>
      <Navbar />
      <main className="yb-main-content">
        <About />
        <Resume />
        <Portofolio />
        <Contacto />
      </main>

    </>
  );
}

export default App;

import React from "react";
import Navbar from "./components/Header/index";
import Navigation from "./components/Navigation/index";
import Banner from "./components/Banner/index";
import About from "./components/About/index";

function ComponentScripts() {
  let scripts = [
    { src: "assets/js/jquery.js" },
    { src: "assets/js/popper.min.js" },
    { src: "assets/js/bootstrap.min.js" },
    { src: "assets/js/jquery.mCustomScrollbar.concat.min.js" },
    { src: "assets/js/jquery.fancybox.js" },
    { src: "assets/js/appear.js" },
    { src: "assets/js/parallax.min.js" },
    { src: "assets/js/tilt.jquery.min.js" },
    { src: "assets/js/jquery.paroller.min.js" },
    { src: "assets/js/owl.js" },
    { src: "assets/js/wow.js" },
    { src: "assets/js/jquery-ui.js" },
    { src: "assets/js/script.js" },
    { src: "assets/js/color-settings.js" },
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
      <Navigation />
      <Banner />
      <About />
    </>
  );
}

export default App;

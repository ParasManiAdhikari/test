import "./App.css";
import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import Middle from "./Personal";
import CopyToClipboard from "./CopyToClipboard";
import Scroll from "./Scroll";
import Gallery from "./Gallery";

const App = () => {
  const homeButtonClass = "hover:underline fixed top-2 left-1/2 -translate-x-1/2 bg-pgreen-700 text-lime-100 py-2 px-4 rounded";
  const [view, setView] = useState("homepage");

  const toggleView = (v) => {
    setView(v)
  };

  return (
    <div>
      {view === "homepage" ? (
        <div className="min-h-screen text-lime-100 flex flex-col justify-center items-center">

          <header className="bg-pgreen-700 shadow-md p-4 mb-8 rounded-lg max-w-lg border border-lime-50">
            <ul className="flex space-x-20">
              <li>
                <button onClick={() => toggleView("cp")} className="hover:underline">Color Picker</button>
              </li>
              <li>
                <button onClick={() => toggleView("gallery")} className="hover:underline">Gallery</button>
              </li>
              <li>
                <button onClick={() => toggleView("scroll")} className="hover:underline">Scroll Page</button>
              </li>
            </ul>
          </header>

          <Middle></Middle>

          <footer className="bg-pgreen-700 shadow-md p-4 mt-8 rounded-lg max-w-lg border border-lime-50">
            <ul className="flex space-x-20">
              <li>
                <button className="hover:underline" onClick={() => toggleView("email")}>Email</button>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/paras-adhikari-247726245/"
                  className="text-pastel-green hover:underline">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/parasxdhikari"
                  className="text-pastel-green hover:underline">GitHub</a>
              </li>
            </ul>
          </footer>
        </div>

      ) : view === "cp" ? (
        <>
          <div className="relative">
            <ColorPicker />
            <button onClick={() => toggleView("homepage")} className={`${homeButtonClass}`}>Home</button>
          </div>
        </>

      ) : view === "scroll" ? (
        <>
          <Scroll />
          <button onClick={() => toggleView("homepage")} className={`${homeButtonClass}`}>Home</button>
        </>
      ) : view === "gallery" ? (
        <>
          <Gallery />
          <button onClick={() => toggleView("homepage")} className={`${homeButtonClass}`}>Home</button>
        </>
      ) : (
        <div className="min-h-screen flex flex-col justify-center items-center text-lime-100">
          <CopyToClipboard text="parasad612@gmail.com" />
          <button onClick={() => toggleView("homepage")} className={`${homeButtonClass}`}>Home</button>
        </div>
      )}
    </div>
  );
};

export default App;
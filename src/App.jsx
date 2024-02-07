import "./App.css";
import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import Middle from "./Personal";
import CopyToClipboard from "./CopyToClipboard";
import Scroll from "./Scroll";

const App = () => {
  const [view, setView] = useState("homepage");

  const toggleView = (v) => {
    setView(v)
  };

  return (
    <div>
      {view === "homepage" ? (
        <div className="min-h-screen text-white flex flex-col justify-center items-center">

          <header className="bg-zinc-800 shadow-md p-4 mb-8 rounded-lg max-w-lg border border-green-800">
            <ul className="flex space-x-20">
              <li>
                <button onClick={() => toggleView("cp")} className="hover:underline">Color Picker</button>
              </li>
              <li>
                <button onClick={() => toggleView("scroll")} className="hover:underline">Scroll Page</button>
              </li>
            </ul>
          </header>

          <Middle></Middle>

          <footer className="bg-zinc-800 shadow-md p-4 mt-8 rounded-lg max-w-lg border border-green-800">
            <ul className="flex space-x-40">
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
            <button onClick={() => toggleView("homepage")} className="hover:underline absolute top-2 left-1/2 -translate-x-1/2 bg-zinc-800 text-green-100 py-2 px-4 rounded">
              Home
            </button>
          </div>
        </>

      ) : view === "scroll" ? (
        <>
          <Scroll />
          <button onClick={() => toggleView("homepage")} className="hover:underline absolute top-2 left-1/2 -translate-x-1/2 bg-zinc-800 text-green-100 py-2 px-4 rounded">Home</button>
        </>
      ) : (
        <div className="min-h-screen flex flex-col justify-center items-center text-green-100">
          <CopyToClipboard text="parasad612@gmail.com" />
          <button onClick={() => toggleView("homepage")} className="hover:underline mt-3 bg-zinc-800 py-2 px-4 rounded">Back</button>
        </div>
      )}
    </div>
  );
};

export default App;
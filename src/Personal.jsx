import React from "react";

function Middle() {
  return (
    <div className="max-w-lg p-8 bg-zinc-800 shadow-lg rounded-md border border-green-800">
      <h1 className="text-4xl font-bold text-slate-100 mb-4">Paras Adhikari</h1>
      <p className="text-slate-200 mb-6">Software Developer</p>
      <div className="bg-neutral-900 p-6 rounded-md mb-8">
        <h2 className="text-lg font-bold text-slate-100 mb-2">About Me</h2>
        <p className="text-slate-300">
          I'm a Software Developer with a keen interest in creating
          user-friendly programs and applications.
        </p>
      </div>
      <div className="bg-neutral-900 p-6 rounded-md">
        <h2 className="text-lg font-bold text-slate-100">Skills</h2>
        <ul className=" text-slate-300 list-none">
          <li>Java</li>
          <li>Python</li>
          <li>Kotlin</li>
          <li>React JS / Native</li>
          <li>MySQL</li>
        </ul>
      </div>
    </div>
  );
}

export default Middle;

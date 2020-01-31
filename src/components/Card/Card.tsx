import React from "react";

const Card = () => (
  <div className="max-w-xl">
    <header className="flex relative">
      <img src="https://placehold.it/600x190" />
      <label className="absolute left-0 bottom-0 m-6 bg-green-500 rounded px-4 py-1 text-white text-base font-medium tracking-normal leading-tight">Ongoing</label>
      <div className="h-2 w-64 bg-green-500 absolute left-0 bottom-0"></div>
    </header>
    <section className="p-5">
      <p className="text-base">WeWork CoWorking Space</p>
      <div className="flex justify-between">
        <p className="text-lg">Foundation course to understand about Software</p>
        <button>Join</button>
      </div>
    </section>
    <footer className="flex p-6">
      <p>120 attending</p>
      <p className="pl-10">Jan 2, 2019 | 5 - 6 pm</p>
    </footer>
  </div>
);

export default Card;
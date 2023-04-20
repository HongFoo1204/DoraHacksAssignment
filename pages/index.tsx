import Card from "@/components/Card";
import React from "react";

const cardList = [
  { icon: "/icon.png", title: "Dorayaki", desc1: "3.14", desc2: "2.72" },
  { icon: "/icon.png", title: "Dorayaki", desc1: "3.14", desc2: "2.72" },
  { icon: "/icon.png", title: "Dorayaki", desc1: "3.14", desc2: "2.72" },
  { icon: "/icon.png", title: "Dorayaki", desc1: "3.14", desc2: "2.72" },
  { icon: "/icon.png", title: "Dorayaki", desc1: "3.14", desc2: "2.72" },
  { icon: "/icon.png", title: "Dorayaki", desc1: "3.14", desc2: "2.72" },
];

export default function Home() {
  return (
    <main
      className="
      h-full
      p-14
      flex flex-col
      justify-center
      items-center
    "
    >
      <article className="prose">
        <h1 className="text-slate-200">Hello, I am Foo Hong Zee</h1>
        <h2 className="text-slate-200">
          There is a prototype below. Please try to build a web page to
          implement this prototype with responsive layout and interactive
          effects.
        </h2>
        <p className="text-slate-400 text-lg">
          There is no presupposed responsive/adaptive design strategy for this
          prototype. The interactive animations/effects of this prototype is
          technology agnostic. Hence, any reasonable solutions are welcome.
        </p>
        <p className="text-slate-400 text-lg">
          I using React, NextJs, TailwindCSS to build this page.
        </p>
      </article>
      <div
        id="cards"
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 m-10"
      >
        {cardList.map((item, index) => (
          <Card key={`card-${index}`} item={item} />
        ))}
      </div>
    </main>
  );
}

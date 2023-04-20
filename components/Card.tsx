import Image from "next/image";
import type { MouseEvent } from "react";

interface CardItem {
  icon: string;
  title: string;
  desc1: string;
  desc2: string;
}

interface CardProps {
  item: CardItem;
}

export default function Card(props: CardProps) {
  const { item } = props;

  const handleMouseMove = (event: MouseEvent) => {
    const cardStyle: any = document.getElementsByClassName("card");

    for (const card of cardStyle) {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`card w-[22rem] bg-[#ffd1b3] bg-opacity-5 flex flex-col justify-center items-center border border-[#3c3b4d] rounded-2xl p-12`}
    >
      <Image
        className="h-20 w-20 m-5 invert"
        width={80}
        height={80}
        src={item.icon}
        alt="icon"
      />
      <div className="w-full flex flex-col items-center">
        <h2 className="text-slate-200 text-3xl font-medium">{item.title}</h2>
        <button className="px-4 py-2 my-5 bg-[#3d363a]/50 border border-[#ffd1b3]/25 text-[#ffd1b3] text-sm font-medium rounded-full z-[2] hover:shadow-[0px_0px_10px_1px_rgba(255,209,179,1)]">
          Button Label
        </button>
        <div className="w-full flex flex-row justify-between mt-10">
          <div>
            <p className="text-4xl font-bold text-slate-200 mb-0">
              {item.desc1}%
            </p>
            <p className="text-slate-400 text-center mt-0">Description1</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-slate-200 mb-0">
              {item.desc2}%
            </p>
            <p className="text-slate-400 text-center mt-0">Description2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

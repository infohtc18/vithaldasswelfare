// components/TeamCard.jsx
import Image from "next/image";

export default function TeamCard({ name, title, img, desc, style }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow text-center opacity-90">
      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
        <Image
          src={img}
          alt={name}
          width={120}
          height={120}
          className={`object-contain`}
          style={style}
        />
      </div>
      <div className="mt-3 font-semibold">{name}</div>
      <div className="text-sm text-slate-500">{title}</div>
      <div className="text-sm text-slate-600 mt-2">{desc}</div>
    </div>
  );
}

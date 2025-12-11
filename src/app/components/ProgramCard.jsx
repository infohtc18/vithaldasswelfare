import Image from "next/image";

export default function ProgramCard({ title, desc, img, link }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-center group">
      <div className="relative h-52 w-full rounded-xl overflow-hidden">
        <Image
          src={`${img}`}
          alt={title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-slate-600 mt-2">{desc}</p>
        <a href={link} className="mt-3 inline-block text-vfBlue font-medium">
          Read more →
        </a>
      </div>
    </div>
  );
}

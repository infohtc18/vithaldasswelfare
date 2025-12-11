// app/page.js
"use client";
import Image from "next/image";
import Link from "next/link";
import ProgramCard from "./components/ProgramCard";
import StatBubble from "./components/StatBubble";
import VideoSlider from "./components/VideoSlider";

const PROGRAMS = [
  {
    title: "Education & Skill Development",
    desc: "Value-based education, girl-child learning support & vocational training.",
    img: "/1.jpg",
  },
  {
    title: "Healthcare & Medical Outreach",
    desc: "Free medical camps, awareness drives and preventive care.",
    img: "/2.jpg",
  },
  {
    title: "Women Empowerment",
    desc: "Self help groups, skill training and livelihood support.",
    img: "/3.jpg",
  },
  {
    title: "Environmental Sustainability",
    desc: "Plantation drives, water conservation & pollution awareness.",
    img: "/4.jpg",
  },
  {
    title: "Elderly Support",
    desc: "Old-age care, counselling & welfare programs.",
    img: "/assets/202.jpg",
  },
  {
    title: "Community Awareness",
    desc: "Sanitation drives, cultural preservation & long-term behaviour change.",
    img: "/assets/201.jpg",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* HERO */}
      <section className="bg-orange-950/40 rounded-2xl p-8 md:p-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Empowering Lives, Enriching Futures
          </h1>
          <p className="mt-4 text-slate-700 max-w-xl">
            Vithaldass Welfare Foundation is a Section 8 nonprofit working
            across education, healthcare, women empowerment and environmental
            sustainability — impacting over 10,000+ beneficiaries.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="support-us"
              className="inline-block bg-orange-950/70 hover:bg-orange-950 text-white px-5 py-3 rounded-lg shadow hover:opacity-95"
            >
              Donate Now
            </Link>
            <Link href="/about">
              <span className="inline-block border border-vfBlue text-vfBlue px-5 py-3 rounded-lg hover:bg-vfBlue hover:text-white transition">
                Become a Volunteer
              </span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/img1.png"
            alt="NGO community"
            width={650}
            height={400}
            className="rounded-xl object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Who We Serve */}
      <section className="mt-12">
        <h3 className="text-2xl font-semibold">Who We Serve</h3>
        <p className="text-slate-600 mt-2">
          Reaching the most underserved populations.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-6 text-center opacity-80">
          {[
            "Children",
            "Women",
            "Youth & Adolescents",
            "Differently-abled",
            "Deprived Population",
            "Socially Neglected People",
          ].map((item) => (
            <div
              key={item}
              className="bg-white shadow rounded-xl p-3 text-sm font-medium text-slate-700 border-l-2 border-orange-950"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="mt-20 grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="mt-3 text-slate-700">
            Vithaldass Welfare Foundation (Section 8) — people-first social
            transformation across education, healthcare, women empowerment and
            environment. Since inception we have impacted 10,000+ beneficiaries
            through structured programs.
          </p>
          <div className="mt-4">
            <Link href="/about">
              <span className="text-vfBlue font-medium">Learn More →</span>
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-4 opacity-80">
          <div className="text-sm text-slate-500">Registered</div>
          <div className="text-xl font-semibold">Section 8 NGO</div>
          <div className="mt-2 text-slate-600">10,000+ beneficiaries</div>
        </div>
      </section>

      {/* Programs */}
      <section className="mt-12">
        <h3 className="text-2xl font-semibold">Programs</h3>
        <p className="text-slate-600 mt-2">
          Multi-sector programs for lasting impact.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.slice(0, 6).map((p) => (
            <ProgramCard
              key={p.title}
              title={p.title}
              desc={p.desc}
              img={p.img}
              link="/about#programs"
            />
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="mt-20 bg-transparent p-6 shadow-md rounded-2xl grid md:grid-cols-4 gap-6">
        <StatBubble number="10,000+" label="Beneficiaries" />
        <StatBubble number="20+ yrs" label="Leadership Experience" />
        <StatBubble number="6+" label="Core Programs" />
        <StatBubble number="Multi-sector" label="Model" />
      </section>

      {/* Why choose us */}
      {/* <section className="mt-12 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-semibold">Why Choose Us</h3>
          <ul className="mt-4 space-y-2 text-slate-700 list-disc ml-5">
            <span>
              {"-> Multi-domain welfare foundation with lifecycle approach."}
            </span>
            <br />
            <span>
              {
                "-> Registered & compliance-ready (Section 8, 12A, 80G, CSR eligible)."
              }
            </span>{" "}
            <br />
            <span>
              {
                "-> Strong monitoring & reporting system with measurable impact."
              }
            </span>{" "}
            <br />
            <span>
              {"-> Experienced board, doctors, educators and volunteers."}
            </span>
            <br />
          </ul>
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1521747116042-5a810fda9664"
            alt="volunteers"
            width={700}
            height={440}
            className="rounded-xl object-cover"
          />
        </div>
      </section> */}
      <section className="mt-12 grid md:grid-cols-2 gap-6 items-center">
        {/* LEFT SIDE TEXT */}
        <div>
          <h3 className="text-2xl font-semibold">Why Choose Us</h3>
          <ul className="mt-4 space-y-2 text-slate-700 list-disc ml-5">
            <span>
              {`-> Multi-domain welfare foundation with lifecycle approach.`}
            </span>
            <br />
            <span>
              {`-> Registered & compliance-ready (Section 8, 12A, 80G, CSR eligible).`}
            </span>
            <br />
            <span>
              {` -> Strong monitoring & reporting system with measurable impact.`}
            </span>
            <br />
            <span>
              {` -> Experienced board, doctors, educators and volunteers.`}
            </span>
          </ul>
        </div>

        {/* RIGHT SIDE VIDEO SWIPER */}
        <div className="rounded-xl overflow-hidden">
          <VideoSlider />
        </div>
      </section>

      {/* Compliance Strip */}
      <section className="mt-20 bg-white shadow p-4 rounded-xl grid sm:grid-cols-4 gap-4 text-center text-sm text-slate-700 opacity-80">
        <div>Section 8 Registered (U88900DL2023NPL414099)</div>
        <div>12A Certified</div>
        <div>80G Certified</div>
        <div>NITI Aayog Registered (DL/2023/0350012)</div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-xl p-8 text-center bg-vfBlue/5">
        <h3 className="text-2xl md:text-3xl font-sans">
          Support Our Mission — Your Contribution Changes Lives
        </h3>
        <div className="mt-5 flex justify-center gap-4">
          <Link
            href="support-us"
            className="bg-orange-950/70 hover:bg-orange-950 text-white px-6 py-3 rounded-lg"
          >
            Donate Now
          </Link>
          <Link
            href="about"
            className="border border-vfBlue hover:bg-vfBlue hover:text-white px-6 py-3 rounded-lg"
          >
            Become a Volunteer
          </Link>
        </div>
        <p className="mt-3 text-xs text-slate-600">
          <strong>Bank Details for Donations:</strong> ICICI Bank – A/C No:
          082605002361 – IFSC: ICIC0000826
        </p>
      </section>
    </div>
  );
}

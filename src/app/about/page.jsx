// app/about/page.js
import Image from "next/image";
import TeamCard from "../components/TeamCard";
import ContactForm from "../components/ContactForm";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-12">
      {/* About */}
      <section id="about" className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl font-sans">
            About Vithaldass Welfare Foundation
          </h1>
          <p className="mt-4 text-slate-700">
            Vithaldass Welfare Foundation, registered as a Section 8 non-profit
            company, is committed to social transformation through education,
            healthcare, women empowerment, and environmental sustainability.
            Since inception, we have impacted over 10,000 beneficiaries across
            Delhi and nearby regions through structured community programs,
            welfare initiatives, and awareness drives. Our foundation operates
            with a people-first approach, working closely with marginalized
            families, women, youth, and senior citizens to enable access to
            education, health services, livelihood support, and social dignity.
          </p>
        </div>
        <div className="space-y-4">
          <Image
            src="/assets/201.jpg"
            alt="helping hands"
            width={700}
            height={200}
            className="rounded-xl object-cover shadow"
          />
        </div>
      </section>
      {/* Chairman Message */}
      <section className="bg-orange-950/40 p-6 rounded-xl shadow mt-20">
        <h3 className="text-xl font-semibold">Message from the Chairman</h3>
        <p className="mt-3 text-slate-700 text-sm leading-relaxed">
          “When we started, we had very limited resources and only a few
          volunteers. But our commitment to serve deprived communities kept us
          moving. Today, Vithaldass Welfare Foundation supports more than 10,000
          direct and indirect beneficiaries across Delhi. The journey has been
          challenging, yet deeply rewarding. We believe that together—with
          dedication and compassion— we can bring a brighter tomorrow for the
          poor, marginalized, and underserved.”
        </p>
        <p className="mt-3 font-semibold text-slate-800">
          – Neeraj Mahinder Vora, Chairman
        </p>
      </section>
      {/* Vision & Mission */}
      <section id="vision" className="grid md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-xl shadow border-l-2 border-orange-950">
          <h3 className="text-xl font-semibold text-orange-950">Vision</h3>
          <p className="mt-4 text-slate-700 leading-relaxed">
            To build an equitable and empowered society by integrating
            education, health, sustainability, and traditional values for a
            better India.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow border-l-2 border-vfBlue">
          <h3 className="text-xl font-semibold text-orange-950">Mission</h3>

          <ul className="mt-4 text-slate-700 space-y-3 list-none">
            {[
              "Providing quality education with focus on girls and deprived communities.",
              "Conducting free health awareness & medical support programmes.",
              "Empowering women through skill training & livelihood generation.",
              "Promoting environmental protection through plantation & water management.",
              "Supporting neglected populations like senior citizens and differently-abled.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-orange-950 font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 opacity-80">
        {["Transparency", "Honesty", "Integrity", "Discipline", "Faith"].map(
          (v) => (
            <div
              key={v}
              className="bg-white p-2 rounded-xl shadow text-center text-slate-700 font-medium border-l-2 border-e-orange-950"
            >
              {v}
            </div>
          )
        )}
      </section>
      {/* Problems */}
      <section id="problems">
        <h3 className="text-2xl font-semibold">Problems We Address</h3>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 opacity-80">
          {[
            "Lack of access to quality education",
            "Inadequate healthcare & awareness",
            "Unemployment among women & youth",
            "Elderly & differently-abled neglect",
            "Environmental degradation & pollution",
          ].map((p) => (
            <div
              key={p}
              className="bg-white p-5 rounded-xl shadow flex items-start gap-3"
            >
              <div className="w-10 h-10 bg-vfBlue/10 rounded-full flex items-center justify-center text-vfBlue font-bold">
                !
              </div>
              <div>
                <div className="font-semibold">{p}</div>
                <div className="text-sm text-slate-600">
                  Community-focused interventions to address root causes.
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="programs">
        <h3 className="text-2xl font-semibold">Our Holistic Model</h3>
        <p className="text-slate-600 mt-2">
          Integrated programs designed for lifecycle support and long-term
          impact.
        </p>

        <div className="mt-12 space-y-20">
          {[
            {
              title: "Education & Skill Empowerment",
              img: "/1.jpg",
              bullets: [
                "Value-based education and girl-child support",
                "Vocational & skill training for youth",
                "Digital learning hubs and mentoring",
              ],
            },
            {
              title: "Healthcare Outreach",
              img: "/2.jpg",
              bullets: [
                "Free medical camps & screenings",
                "Health awareness and preventive care",
                "Referral linkages with hospitals",
              ],
            },
            {
              title: "Women Empowerment & Livelihood",
              img: "/3.jpg",
              bullets: [
                "SHG formation & micro-enterprise support",
                "Financial literacy & market linkages",
                "Skill training and placement support",
              ],
            },
            {
              title: "Elderly & Social Support",
              img: "/assets/202.jpg",
              bullets: [
                "Old-age counselling & welfare support",
                "Community outreach & inclusion activities",
                "Assistive services and health check-ups",
              ],
            },
            {
              title: "Environmental Protection & Water Conservation",
              img: "/4.jpg",
              bullets: [
                "Plantation drives and pollution awareness",
                "Water table restoration projects",
                "Community-led sanitation initiatives",
              ],
            },
            {
              title: "Community Awareness & Behavioural Change",
              img: "/assets/203.jpg",
              bullets: [
                "Sanitation & hygiene campaigns",
                "Social awareness workshops",
                "Cultural preservation & participation",
              ],
            },
          ].map((pr, idx) => (
            <div
              key={pr.title}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-80 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={pr.img}
                  alt={pr.title}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2">
                <h4 className="text-2xl font-semibold">{pr.title}</h4>
                <ul className="mt-4 list-disc ml-6 text-slate-700 space-y-2">
                  {pr.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Focus areas & STP model */}
      <section id="focus" className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow border-l-2 border-orange-950">
          <h3 className="text-xl font-semibold">Focus Areas & Impact Model</h3>
          <ul className="mt-3 list-disc ml-5 text-slate-700 space-y-2">
            <li>Community-centric programs & lifecycle support</li>
            <li>Sustainability-led development & measurable impact</li>
            <li>Volunteer participation & technology-enabled monitoring</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow border-l-2 border-orange-950">
          <h3 className="text-xl font-semibold">STP & Market Potential</h3>
          <div className="mt-3 text-slate-700">
            <strong>Segmentation:</strong> Urban & semi-urban underserved
            communities.
            <br />
            <strong>Targeting:</strong> Underprivileged children, women, senior
            citizens, CSR partners.
            <br />
            <strong>Positioning:</strong> Transparent, impact-led multi-sector
            foundation.
            <br />
            <div className="mt-3 text-sm text-slate-500">
              India NGO market projected ~$353B by 2025 (research & markets).
            </div>
          </div>
        </div>
      </section>
      {/* Team */}
      {/* <section id="team">
        <h3 className="text-2xl font-semibold">Team</h3>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TeamCard
            name="Neeraj Mahinder Vora"
            title="Chairman & Managing Director"
            img="https://images.unsplash.com/photo-1599566150163-29194dcaad36"
            desc="20+ years experience, leads vision & CSR collaborations."
          />
          <TeamCard
            name="Tanu Vora"
            title="Vice President & Director"
            img="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
            desc="Operational leadership focused on women empowerment & program execution."
          />
          <TeamCard
            name="Shivam Chaprana"
            title="Director, Marketing & Outreach"
            img="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
            desc="Handles branding, fundraising & public engagement."
          />
        </div>

        <h4 className="mt-8 text-lg font-semibold">Core Committee</h4>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Amit Gupta",
            "Mani Singh Sandhu",
            "Vitu Jain",
            "Virender Singh Bhatia",
            "Love Malhotra",
            "Rajesh Kumar Sharma",
          ].map((name) => (
            <div key={name} className="bg-white p-4 rounded-lg shadow">
              <div className="font-semibold">{name}</div>
              <div className="text-sm text-slate-600">
                Core Committee Member
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <section id="team">
        <h3 className="text-2xl font-semibold">Team</h3>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TeamCard
            name="Romila Vora "
            title="Founder"
            img="/assets/211.png"
            desc={
              <>
                A-253, Second Floor, Meera Bagh, Paschim Vihar, Delhi – 87
                <br />
                Email: Romila1953@gmail.com <br />
                Ph: 9990303777
              </>
            }
          />
          <TeamCard
            name="Neeraj Mahinder Vora"
            title="President / Managing Director"
            img="/assets/212.png"
            desc={
              <>
                A-253, Second Floor, Meera Bagh, Paschim Vihar, Delhi – 87
                <br />
                Email: neerajmvora@gmail.com <br />
                Ph: 9311707772
              </>
            }
          />

          <TeamCard
            name="Tanu Vora"
            title="Director"
            img="/assets/213.png"
            desc={
              <>
                A-253, Meera Bagh, Paschim Vihar, Delhi – 87
                <br />
                Email: voratanu@gmail.com <br />
                Ph: 9911116777
              </>
            }
          />
          <TeamCard
            name="Shivam Chaprana"
            title="Director"
            img="/assets/215.png"
            desc={
              <>
                FLAT NO – 761, POCKET – 5, MAYUR VIHAR,
                <br />
                PHASE – 1, EAST DELHI – 91 <br />
                Email: Shivamchaprana1986@gmail.com
                <br />
                Ph: 9873639639
              </>
            }
          />
          <TeamCard
            name="Abhishek Shah"
            title="CEO"
            img="/assets/205.jpg"
            desc={
              <>
                A-54, Meera Bagh, Paschim Vihar, Delhi – 87 <br />
                Email: Abhishek.shah@live.com <br />
                Ph: 9654177771
              </>
            }
          />
          <TeamCard
            name="Amit Gupta"
            title="Finance Advisor"
            img="/assets/214.png"
            desc={
              <>
                NO – 355, Aggarwal Plaza, Sector-14, Rohini, Delhi – 85 <br />
                Email: Amitgupta3375@gmail.com <br />
                Ph: 9873471241
              </>
            }
          />

          <TeamCard
            name="Mani Singh Sandhu"
            title="Manager"
            img="/assets/206.jpg"
            desc={
              <>
                H.S No – 2, B-1, Himgiri Enclave, Chander Vihar, <br />
                Vikas Puri Extn., Nilothi Delhi – 41 <br />
                Email: Manisandhu74@gmail.com <br />
                Ph: 9811929243
              </>
            }
          />
          <TeamCard
            name="Love Malhotra"
            title="Social Worker"
            img="/assets/210.jpeg"
            desc={
              <>
                201, G.F. Ashoka Enclave, Vasundhara, <br />
                Faridabad, Haryana – 121003 <br />
                Email: lovelyenterprises@gmail.com <br />
                Ph: 8882322232
              </>
            }
          />
          <TeamCard
            name="Ramesh Chandra Tiwari"
            title="Social Worker"
            img="/assets/209.png"
            desc={
              <>
                72A, Ismailganj, Station Road, Fatehpur-212601 (UP), India{" "}
                <br />
                Email: rameshtewariftp@gmail.com <br />
                Ph: 9015445260
              </>
            }
          />
        </div>
      </section>

      <section id="funds" className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-semibold">Fund Utilization</h3>
          <p className="mt-2 text-slate-700">
            Allocation of funds across programs:
          </p>

          <table className="mt-4 w-full text-sm border-collapse">
            <thead className="text-left text-slate-600">
              <tr>
                <th>Program</th>
                <th>Allocation</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Education & Skill Development", "25%"],
                ["Healthcare & Medical Camps", "20%"],
                ["Women Empowerment", "15%"],
                ["Environment & Water", "12%"],
                ["Community Awareness", "10%"],
                ["Monitoring & Reporting", "8%"],
                ["Admin & Operational", "10%"],
              ].map(([k, v]) => (
                <tr key={k} className="border-t">
                  <td className="py-3">{k}</td>
                  <td className="py-3 font-semibold">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FIXED PIE CHART */}
        <div className="flex flex-col items-center">
          <div className="relative w-56 h-56 rounded-full shadow bg-white overflow-hidden">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `
            conic-gradient(
              #6b7280 0% 25%,      /* Education 25% */
              #9ca3af 25% 45%,     /* Healthcare 20% */
              #d1d5db 45% 60%,     /* Women Empowerment 15% */
              #e5e7eb 60% 72%,     /* Environment & Water 12% */
              #f1f5f9 72% 82%,     /* Community Awareness 10% */
              #cbd5e1 82% 90%,     /* Monitoring 8% */
              #94a3b8 90% 100%     /* Operational 10% */
            )
          `,
              }}
            ></div>
          </div>

          <div className="mt-4 text-slate-600 text-sm">
            Fund Allocation (Grey-scale Pie Chart)
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm mt-4">
            <div>
              <span className="inline-block w-3 h-3 bg-[#6b7280] mr-2"></span>
              Education (25%)
            </div>
            <div>
              <span className="inline-block w-3 h-3 bg-[#9ca3af] mr-2"></span>
              Healthcare (20%)
            </div>

            <div>
              <span className="inline-block w-3 h-3 bg-[#d1d5db] mr-2"></span>
              Women Empowerment (15%)
            </div>
            <div>
              <span className="inline-block w-3 h-3 bg-[#e5e7eb] mr-2"></span>
              Environment & Water (12%)
            </div>

            <div>
              <span className="inline-block w-3 h-3 bg-[#f1f5f9] mr-2"></span>
              Community Awareness (10%)
            </div>
            <div>
              <span className="inline-block w-3 h-3 bg-[#cbd5e1] mr-2"></span>
              Monitoring & Reporting (8%)
            </div>

            <div>
              <span className="inline-block w-3 h-3 bg-[#94a3b8] mr-2"></span>
              Admin & Operational (10%)
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section
        id="contact"
        className="bg-white p-6 md:p-10 rounded-xl shadow border border-slate-200"
      >
        <h3 className="text-xl font-semibold text-slate-800">Contact Us</h3>
        <p className="text-slate-600 text-sm mt-1">
          We’re here to help and answer any questions you may have.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <p className="text-slate-500 text-xs">Phone</p>
              <p className="text-base font-medium text-slate-800">
                +91 9311707772
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <p className="text-slate-500 text-xs">Email</p>
              <p className="text-base font-medium text-slate-800">
                vithaldaswelfare@gmail.com
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <p className="text-slate-500 text-xs">Address</p>
              <p className="text-base font-medium text-slate-800 leading-relaxed">
                A-253 Second Floor, Meera Bagh, Sunder Vihar,
                <br />
                West Delhi – 110087
              </p>
            </div>
          </div>

          {/* Contact Form */}
          {/* <form className="space-y-3">
            <input
              required
              name="name"
              placeholder="Your Name"
              className="w-full border border-slate-300 p-2.5 rounded-md text-sm focus:ring-1 focus:ring-vfRed focus:border-vfRed outline-none transition"
            />

            <input
              required
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full border border-slate-300 p-2.5 rounded-md text-sm focus:ring-1 focus:ring-vfRed focus:border-vfRed outline-none transition"
            />

            <input
              required
              name="mobile"
              placeholder="Mobile Number"
              className="w-full border border-slate-300 p-2.5 rounded-md text-sm focus:ring-1 focus:ring-vfRed focus:border-vfRed outline-none transition"
            />

            <textarea
              required
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full border border-slate-300 p-2.5 rounded-md text-sm focus:ring-1 focus:ring-vfRed focus:border-vfRed outline-none transition"
            />

            <button className="bg-orange-950/70 hover:bg-orange-950 transition text-white text-sm font-medium px-5 py-2.5 rounded-md w-full">
              Send Message
            </button>
          </form> */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

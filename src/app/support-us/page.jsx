// app/support/page.js
import Image from "next/image";

export default function SupportPage() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-12">
      {/* Page Header */}
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Support Our Mission
        </h1>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Your contribution enables us to deliver education, healthcare, women
          empowerment, environmental programs, and social welfare initiatives to
          thousands of underserved individuals.
        </p>
      </section>

      {/* Bank Details */}
      <section className="bg-white p-6 rounded-xl shadow opacity-90">
        <h3 className="text-2xl font-semibold">Bank Details for Donations</h3>
        <p className="mt-2 text-slate-600 text-sm">
          Support our programs through direct bank transfer.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-slate-700 ">
          <div className="p-4 bg-slate-50 rounded-lg border">
            Bank Name
            <br /> <strong>ICICI Bank</strong>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border">
            Branch Name
            <br />{" "}
            <strong>Guruharkrishan Nagar, Paschim Vihar, New Delhi</strong>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border">
            Account Name
            <br /> <strong>Vithaldass Welfare Foundation</strong>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg border">
            Account Number
            <br /> <strong>082605002361</strong>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border">
            IFSC Code
            <br /> <strong>ICIC0000826</strong>
          </div>
        </div>

        <div className="mt-8 text-center">
          <span className="inline-block bg-orange-950/80 text-white px-6 py-3 rounded-lg shadow cursor-default">
            Together, we can transform lives.
          </span>
        </div>
      </section>

      {/* Legal Status */}
      <section className="bg-white p-6 rounded-xl shadow opacity-90">
        <h3 className="text-2xl font-semibold">Legal Status</h3>
        <p className="text-slate-600 mt-2 text-sm">
          Vithaldass Welfare Foundation operates as a fully compliant and
          CSR-eligible non-profit.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-slate-700">
          <div className="p-4 bg-slate-50 rounded-lg border">
            Section 8 Registration
            <br /> <strong>U88900DL2023NPL414099</strong>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border">
            Registration Date
            <br /> <strong>13/05/2023</strong>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border">
            Registered At
            <br /> <strong>Delhi</strong>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg border">
            PAN Number
            <br /> <strong>AAJCV3912C</strong>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border">
            NITI Aayog ID
            <br /> <strong>DL/2023/0350012</strong>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg border">
            12A Registration
            <br /> <strong>AAJCV3912CE2023101</strong>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border">
            80G Registration
            <br /> <strong>AAJCV3912CF2023101</strong>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border">
            E-Anudaan ID
            <br /> <strong>DL/00032405</strong>
          </div>
        </div>
      </section>

      {/* Closing Note */}
      <section className="text-center mt-12">
        <p className="text-slate-700 text-sm max-w-xl mx-auto">
          Every contribution—small or large—helps us expand our programs and
          uplift more communities. Thank you for supporting our mission toward
          an equitable and empowered society.
        </p>
      </section>
    </div>
  );
}

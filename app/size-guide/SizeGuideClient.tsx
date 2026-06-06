"use client";

import { useState } from "react";
import Image from "next/image";

const ringGuideImage = "/images/Dimensions%20Overview%201.jpg";
const necklaceGuideImage = "/images/Dimensions%20Overview%202.jpg";

const womenSizes = [
  { size: "10", circumference: "48.7", diameter: "14.8" },
  { size: "11", circumference: "49.9", diameter: "15.2" },
  { size: "12", circumference: "50.9", diameter: "15.5" },
  { size: "13", circumference: "52.1", diameter: "15.9" },
  { size: "14", circumference: "53.1", diameter: "16.2" },
  { size: "15", circumference: "54.3", diameter: "16.6" }
];

const menSizes = [
  { size: "16", circumference: "55.6", diameter: "17.3" },
  { size: "17", circumference: "56.5", diameter: "17.7" },
  { size: "18", circumference: "57.5", diameter: "18.0" },
  { size: "19", circumference: "58.7", diameter: "18.7" },
  { size: "20", circumference: "59.7", diameter: "19.0" },
  { size: "21", circumference: "60.9", diameter: "19.4" }
];

const necklaceData = [
  { label: "Choker", length: "14 inches / 35 cm" },
  { label: "Princess", length: "16 inches / 40 cm" },
  { label: "Matinee", length: "18 inches / 45 cm" },
  { label: "Opera", length: "24 inches / 60 cm" },
  { label: "Rope", length: "30 inches / 75 cm" }
];

export default function SizeGuideClient() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState("");

  const openModal = (img: string, alt: string) => {
    setModalImage(img);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalAlt("");
  };

  const renderTable = (data: typeof womenSizes) => (
    <div className="overflow-x-auto rounded-2xl border border-gray-100">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-xs uppercase tracking-[0.25em] text-gray-500">
          <tr>
            <th className="px-4 py-4 text-left">Size</th>
            {data.map((r) => (
              <th key={r.size} className="px-4 py-4 text-center font-medium">
                {r.size}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          <tr>
            <td className="px-4 py-4 font-medium text-gray-900">
              Circumference
            </td>
            {data.map((r) => (
              <td key={r.size} className="px-4 py-4 text-center text-gray-600">
                {r.circumference} mm
              </td>
            ))}
          </tr>

          <tr>
            <td className="px-4 py-4 font-medium text-gray-900">Diameter</td>
            {data.map((r) => (
              <td key={r.size} className="px-4 py-4 text-center text-gray-600">
                {r.diameter} mm
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <main className="min-h-screen bg-white px-4 py-28 text-gray-900">
      <div className="mx-auto max-w-7xl space-y-20">
        {/* HEADER */}
        <section className="max-w-3xl mt-10">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Ring & Necklace Measurements
          </h1>

          <p className="mt-6 text-gray-600 leading-7">
            Find your perfect fit with our ring size reference and necklace
            length guide.
          </p>
          <button
            onClick={() => openModal(ringGuideImage, "Ring size guide")}
            className="mt-4 text-xs uppercase tracking-[0.3em] underline underline-offset-8 hover:text-gray-500 transition"
          >
            View full guide
          </button>
        </section>

        {/* RING GUIDE */}
        <section className="space-y-14">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
              Ring size guide
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-gray-900">
              Women’s Ring Size
            </h2>

            <div className="mt-6">{renderTable(womenSizes)}</div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
              Ring size guide
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-gray-900">
              Men’s Ring Size
            </h2>

            <div className="mt-6">{renderTable(menSizes)}</div>
          </div>
        </section>

        {/* NECKLACE GUIDE */}
        <hr className="border-gray-200" />
        <section className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
              Necklace guide
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-gray-900">
              Choose your length
            </h2>

            <p className="mt-4 text-gray-600 leading-7 max-w-md">
              Necklace lengths vary depending on body proportions and styling.
            </p>

            <div className="mt-8 space-y-3">
              {necklaceData.map((n, i) => (
                <div
                  key={n.label}
                  className="flex gap-4 border border-gray-100 rounded-xl p-4"
                >
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{n.label}</p>
                    <p className="text-sm text-gray-600">{n.length}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
            <button
              onClick={() => openModal(necklaceGuideImage, "Necklace guide")}
              className="w-full"
            >
              <Image
                src={necklaceGuideImage}
                alt="Necklace guide"
                width={1200}
                height={900}
                className="w-full object-contain max-h-[520px]"
              />
            </button>
          </div>
        </section>
      </div>

      {/* MODAL */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl p-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 w-8 h-8 bg-black text-white rounded-full"
            >
              ×
            </button>

            <Image
              src={modalImage}
              alt={modalAlt}
              width={1400}
              height={1000}
              className="max-h-[80vh] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}

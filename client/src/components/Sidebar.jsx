import React from "react";

export default function Sidebar({ setCategoryFilter }) {
  const categories = ["Nike", "Airmax", "Addidas", "Bags", "Apparel"];

  return (
    <aside className="bg-gray-100 shadow rounded p-4 space-y-3">
      <h3 className="font-medium  text-2xl mb-10">Hot Deals</h3>
      <ul className="space-y-9">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => setCategoryFilter(cat === "All" ? "" : cat)}
              className="w-full text-left hover:text-blue-500"
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

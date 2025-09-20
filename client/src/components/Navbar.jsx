import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center  ">
      <h1 className="text-xl font-bold text-blue-600">E-Comm</h1>
      <ul className=" hidden md:flex gap-6">
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 cursor-pointer">Bag</li>
        <li className="hover:text-blue-500 cursor-pointer">Sneakers</li>
        <li className="hover:text-blue-500 cursor-pointer">Contact</li>
      </ul>
      <button className="border px-3 py-1 rounded">Items $0.00</button>
    </nav>
  );
}

import React, { useState } from "react";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import Pirce from "../components/Pirce";
import Color from "../components/Color";
import Brand from "../components/Brand";

export default function Home() {
  const [categoryFilter, setCategoryFilter] = useState("");

  const filteredProducts = categoryFilter
    ? products.filter((p) => p.category === categoryFilter)
    : products;

  return (
    <div className="container mx-auto px-4 py-6 flex gap-6">
        
      {/* Sidebar */}
      <div className="w-60 hidden md:block ">
        <Sidebar setCategoryFilter={setCategoryFilter} />
        <Pirce/>
        <Color/>
        <Brand/>
      </div>

     
      {/* Main Content */}
      <main className="flex-1">
        <h2 className="text-xl font-bold mb-4">Products</h2>
        <div className="bg-green-600 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIbFe3OqrS1Z7Rxpjf9UvUViVE1aaxQogow&s)] bg-no-repeat bg-center bg-cover mb-10  w-full  rounded h-[600px] md:h-[400px] lg:h-[600px]">
          <img src="" className="object-contain" alt=""   />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>
    </div>
  );
}

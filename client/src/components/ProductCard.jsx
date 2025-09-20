import React from "react";

export default function ProductCard({ product }) {
  return (
    
    
    <div className="bg-white shadow rounded p-4">
      <div className="bg-red-500 text-white  text-center rounded w-[40px]">hot </div>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="h-40 w-full object-contain mb-3"
      />
      <h3 className="font-semibold text-sm mb-2">{product.name}</h3>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-blue-600 font-bold">${product.discountPrice}</span>
        <span className="text-gray-400 line-through text-sm">${product.price}</span>
      </div>
      <span className="text-xs text-red-500">{product.discountPercent}% off</span>
      <div className="text-yellow-500 text-sm">⭐ {product.rating}</div>
    </div>
   
  );
}

"use client";

import Link from "next/link";

const CardList = ({ id, name, price, stock, image, email }) => {
    const imageUrl =  image
    ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${image}` 
    : `${process.env.NEXT_PUBLIC_API_BASE_URL}/uploads/product/default-image.svg`;

  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">Stock: {stock}</p>
      <p className="text-gray-600">{email}</p>
      <p className="text-lg font-semibold text-blue-600">Rp {price}</p>
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover rounded-md mt-2"
      />
       <Link
        className="px-6 py-3 bg-fuchsia-700 rounded-lg hover:bg-fuchsia-600 transition font-semibold shadow-lg"
        href={`/products/edit?id=${id}`}
      >
       Edit Product
      </Link>
    </div>
  );
};

export default CardList;

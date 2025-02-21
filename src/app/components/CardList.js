"use client";

const CardList = ({ key, name, price, stock }) => {
  return (
    <>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}
        <div key={key} className="p-4 border rounded-lg shadow">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-600">Stock: {stock}</p>
          <p className="text-lg font-semibold text-blue-600">{price}</p>
        </div>
      {/* </div> */}
    </>
  );
};

export default CardList;

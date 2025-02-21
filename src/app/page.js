import Link from "next/link";

const Page =  () => {

  return (
    <>
      <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
       Welcome Back 
      </h1>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600">Stock: {product.stock}</p>
            <p className="text-lg font-semibold text-blue-600">
              {product.price}
            </p>
          </div>
        ))}
      </div> */}

      
      {/* {products.map(data => {
         return <Products key={data._id} name={data.name} price={data.price} stock={data.stock} />
      })} */}

      <p className="text-xl mb-2">
        You are running on an
        <span className="text-blue-400 font-semibold">Ubuntu VPS</span>.
      </p>
      <Link
        className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition font-semibold shadow-lg"
        href="/products"
      >
        Product page
      </Link>
    </>
  );
};

export default Page;

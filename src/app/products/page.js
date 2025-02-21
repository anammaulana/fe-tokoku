import Link from "next/link";
import CardList from "../components/CardList";

const Products = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`
  );
  const products = await response.json();
//   console.log(products);
  return (
    <>
      <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
       Product Page
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((data) => {
          return (
            <CardList
              key={data._id}
              name={data.name}
              price={data.price}
              stock={data.stock}
            />
          );
        })}
      </div>

      <Link
        className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition font-semibold shadow-lg"
        href="/"
      >
        Back to home
      </Link>
    </>
  );
};

export default Products;


import Link from "next/link";
import Button from "../components/Button";
import CardList from "../components/CardList";
// import Styles from "../products/products.module.css"

const base_url = "https://jsonplaceholder.typicode.com/posts"

const Products = async() => {
    const response = await fetch(base_url)
    const posts = await response.json()
    {/* <p>{posts[0].title}</p> */}
  return (
    <>
      <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-300">Product page</h1>
      <Link className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition font-semibold shadow-lg" href="/"> back to home</Link>
      <CardList> 
        {posts[0].title}
      </CardList>
    </>
  );
};

export default Products;

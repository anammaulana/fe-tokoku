
import Link from "next/link";
import Button from "../components/Button";
import CardList from "../components/CardList";
// import Styles from "../products/products.module.css"

const base_url = "https://jsonplaceholder.typicode.com/posts"

const Products = async() => {
    const response = await fetch(base_url)
    const posts = await response.json()
  return (
    <>
      <h1 className="bg-fuchsia-500 text-yellow-300">Product page</h1>
        {/* <p>{posts[0].title}</p> */}
      <CardList>
        <h1>haloo</h1>
        <h2>{posts[0].title}</h2>
      </CardList>

      <Link href="/"> back to home</Link>
    </>
  );
};

export default Products;

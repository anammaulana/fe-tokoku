import Link from "next/link";
import Navbar from "./components/Navbar";

const Page =  () => {

  return (
    <>
      <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
       Welcome Back 
      </h1>

      <p className="text-xl mb-2">
        You are running on an
        <span className="text-blue-400 font-semibold">Ubuntu VPS</span>.
      </p>
      <Link
        className="px-6 py-3 bg-fuchsia-500 rounded-lg hover:bg-fuchsia-600 transition font-semibold shadow-lg"
        href="/products"
      >
        Product page
      </Link>
    </>
  );
};

export default Page;

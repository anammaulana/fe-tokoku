import Link from "next/link";
import CardList from "./components/CardList";

export default function Page() {
  return (
    <>
      <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Halaman Utama</h1>
      <p className="text-xl mb-2">You are running on an <span className="text-blue-400 font-semibold">Ubuntu VPS</span>.</p>
      
      <Link className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition font-semibold shadow-lg" href="/products">Product page</Link>
    </>
  );
}



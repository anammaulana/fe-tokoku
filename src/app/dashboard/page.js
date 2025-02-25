"use client"
import { useEffect, useState } from "react";
import api from "../utils/api";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Button from "../components/Button"; // Import komponen Button

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await api.get("/");
        setUsers(data);
      } catch (error) {
        router.push("/login"); // Redirect jika token tidak valid
      }
    };

    fetchUsers();
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/auth/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Dashboard</h2>
           {/* Menggunakan komponen Button */}
         <Button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white hover:bg-red-600"
        >
          Logout
        </Button>
        <ul className="space-y-2">
          {users.map((user) => (
            <li
              key={user._id}
              className="bg-gray-200 p-3 rounded-lg shadow-sm flex justify-between"
            >
              <span className="font-semibold">{user.name}</span>
              <span className="text-gray-600">{user.email}</span>
              <span className="text-gray-600">{user.password}</span>
              <span className="text-gray-600">{user.createdAt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
};

// export const getServerSideProps = async (context) => {
//     const token = context.req.cookies.token;
  
//     if (!token) {
//       return {
//         redirect: {
//           destination: "/login",
//           permanent: false,
//         },
//       };
//     }
  
//     return { props: {} };
//   };

export default Dashboard;

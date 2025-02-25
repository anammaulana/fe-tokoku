"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Gunakan `next/navigation` untuk App Router
import api from "../../utils/api";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import Form from "../../components/Form";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/login", form);
      Cookies.set("token", data.token, { expires: 1 });
      toast.success(data.message || "Login Berhasil");
      router.push("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  

  return (
    <Form
      title="Login"
      fields={[
        { type: "email", name: "email", placeholder: "Email", value: form.email, onChange: handleChange },
        { type: "password", name: "password", placeholder: "Password", value: form.password, onChange: handleChange },
      ]}
      onSubmit={handleSubmit}
      buttonText="Login"
      link={{ href: "/auth/register", text: "Belum punya akun? Daftar" }}
    />
  );
  
};

export default Login;

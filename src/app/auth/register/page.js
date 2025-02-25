"use client"
import { useState } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "../../components/Form";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/register", form);
      toast.success(response.data?.message || "Registrasi berhasil! Silakan login.");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registrasi gagal");
    }
  };
  

  return (
     <Form
     title="Register"
     fields={[
       { type: "name", name: "name", placeholder: "Name", value: form.name, onChange: handleChange },
       { type: "email", name: "email", placeholder: "Email", value: form.email, onChange: handleChange },
       { type: "password", name: "password", placeholder: "Password", value: form.password, onChange: handleChange },
     ]}
     onSubmit={handleSubmit}
     buttonText="Register"
     link={{ href: "/login", text: "Sudah Punya Akun ? Login!" }}
   />
  );  
};

export default Register;

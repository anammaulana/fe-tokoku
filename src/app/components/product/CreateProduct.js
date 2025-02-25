"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import Form from "../Form";

const CreateProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    image: null,
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    setForm({ ...form, [name]: type === "file" ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("price", form.price);
      formData.append("stock", form.stock);
      if (form.image) {
        formData.append("image", form.image);
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Gagal menambahkan produk");

      toast.success("Produk berhasil ditambahkan!");
      router.push("/products");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Form
    title="Tambah Produk"
    fields={[
      { type: "text", name: "name", placeholder: "name", value: form.name, onChange: handleChange },
      { type: "number", name: "price", placeholder: "price", value: form.price, onChange: handleChange },
      { type: "number", name: "stock", placeholder: "stock", value: form.stock, onChange: handleChange },
      { type: "file", name: "image", placeholder: "image", onChange: handleChange },
    ]}
    onSubmit={handleSubmit}
    buttonText="Tambah Produk"
    // link={{ href: "/register", text: "Belum punya akun? Daftar" }}
  />
  );
};

export default CreateProduct;

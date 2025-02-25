"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Form from "../Form";
import { toast } from "react-toastify";

const EditProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    image: null, // Biarkan null untuk gambar
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("id"); // Ambil ID produk dari URL

  useEffect(() => {
    if (productId) {
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${productId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setForm({
              name: data.name,
              price: data.price,
              stock: data.stock,
              image: null, // Tidak mengisi gambar agar tidak ada bug
            });
          }
        })
        .catch((error) => {
          console.error("Gagal memuat data produk:", error);
          toast.error("Gagal memuat data produk!");
        });
    }
  }, [productId]);

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

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${productId}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Gagal memperbarui produk");

      toast.success("Produk berhasil diperbarui!");
      router.push("/products");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Form
        title="Edit Produk"
        fields={[
          {
            type: "text",
            name: "name",
            placeholder: "Nama Produk",
            value: form.name,
            onChange: handleChange,
          },
          {
            type: "number",
            name: "price",
            placeholder: "Harga Produk",
            value: form.price,
            onChange: handleChange,
          },
          {
            type: "number",
            name: "stock",
            placeholder: "Stok Produk",
            value: form.stock,
            onChange: handleChange,
          },
          {
            type: "file",
            name: "image",
            placeholder: "Upload Gambar (opsional)",
            onChange: handleChange,
          },
        ]}
        onSubmit={handleSubmit}
        buttonText="Perbarui Produk"
      />
    </>
  );
};

export default EditProduct;

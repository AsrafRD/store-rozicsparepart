"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import CartItem from '../components/cart-item';

interface FormData {
  name: string,
  email: string, // Perbaikan: Menggunakan "email" bukan "Email"
  phone: string,
  address: string,
}

const CheckoutPage: React.FC = () => {
  const items = useCart((state) => state.items);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "", // Perbaikan: Menggunakan "email" bukan "Email"
    phone: "",
    address: "",
  });
  
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    // Validasi sederhana: Pastikan semua bidang wajib diisi
    const errors: Partial<FormData> = {};

    if (!formData.name) {
      errors.name = "Nama wajib diisi";
    }
    if (!formData.email) {
      errors.email = "Email wajib diisi";
    }
    if (!formData.phone) {
      errors.phone = "Nomor telepon wajib diisi";
    }
    if (!formData.address) {
      errors.address = "Alamat wajib diisi";
    }

    setFormErrors(errors);

    // Validasi sederhana untuk menentukan apakah formulir valid
    return Object.keys(errors).length === 0;
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Jika formulir valid, lanjutkan dengan permintaan
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
          {
            productIds: items.map((item) => item.id),
            formData,
          }
        );
        window.location = response.data.url;
      } catch (error) {
        console.log(error);
      }
    }
  };

  const totalPrice = items.reduce((total: number, item: { price: any }) => {
    return total + Number(item.price);
  }, 0);

  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="p-2">
      <h1 className="flex justify-center font-bold mb-6 pt-4">Lengkapi Data Untuk Checkout</h1>
      <form onSubmit={handleCheckout}>
        <div className="flex flex-col px-4">
          <label htmlFor="name">Nama</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-2 mb-2 mt-1 mt-1 py-1 px-2"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email" // Perbaikan: Menggunakan "email" bukan "Email"
            name="email" // Perbaikan: Menggunakan "email" bukan "Email"
            value={formData.email}
            className="border-2 mb-2 mt-1 py-1 px-2"
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            className="border-2 mb-2 mt-1 mt-1 py-1 px-2"
            onChange={handleChange}
            required
          />
          <label htmlFor="address">Address</label> // Perbaikan: Menggunakan "address" bukan "phone"
          <input
            type="text" // Perbaikan: Menggunakan "text" bukan "address"
            id="address"
            name="address"
            value={formData.address}
            className="border-2 mb-2 mt-1 mt-1 py-1 px-2"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <ul>
            {cart.items.map((item) => (
              <div className="" key={item.id}>
                <CartItem data={item} />
              </div>
            ))}
          </ul>
        </div>

        <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
          <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <div className="text-base font-medium text-gray-900">
                Order total
              </div>
              <Currency value={totalPrice} />
            </div>
          </div>
        </div>
        <Button type="submit" disabled={items.length === 0} className="w-full mt-6">
          Checkout
        </Button>
      </form>
      
      <Link href="/cart">
        Back to Cart/Kembali ke Keranjang
      </Link>
    </div>
  );
};

export default CheckoutPage;
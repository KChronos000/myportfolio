"use client"


import React, { useState } from 'react';

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ตัวอย่างเช็ค login อย่างง่าย
    if (formData.email === 'admin@example.com' && formData.password === '123456') {
      alert('Login success!');
      setError(null);
    } else {
      setError('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4 text-center">เข้าสู่ระบบ</h2>

        {error && <div className="mb-4 text-red-600">{error}</div>}

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">อีเมล</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded-md"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-1 font-medium">รหัสผ่าน</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border rounded-md"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
};

export default Login;

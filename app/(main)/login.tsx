/*"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';    
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    if (response.ok) {
      alert(data.message);
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="p-8 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
            placeholder="Username"
            className="w-full"
          />
          <Input
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full"
          />
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;*/
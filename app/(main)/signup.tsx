/*"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const SignupPage = () => {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      setUser({ username: '', password: '' });
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
            value={user.username}
            onChange={handleInputChange}
            placeholder="Username"
            className="w-full"
          />
          <Input
            name="password"
            type="password"
            value={user.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full"
          />
          <Button type="submit" className="w-full">Signup</Button>
        </form>
      </Card>
    </div>
  );
};

export default SignupPage;*/
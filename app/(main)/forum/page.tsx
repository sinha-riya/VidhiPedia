"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';  
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ForumPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JackShack', content: 'yo , heard about Indian new data protection law?' },
    { id: 2, title: 'Mudryk10', content: 'nah, what is that?' },
    { id: 3, title: 'My_GOAT_Antony', content: 'Digital Personal Data Protection Act 2023. big privacy stuff' },
    { id: 4, title: 'RizzLord', content: 'oh cool. what does it do?' }
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPosts([...posts, { id: posts.length + 1, ...newPost }]);
    setNewPost({ title: '', content: '' });
  };

  return (
    <div className="container ml-4 mx-auto p-4">
      <h1 className="text-3xl ml-2 font-bold mb-7 text-center text-blue-500">Share Your Thoughts</h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
      <div className="mb-4">
        {posts.map(post => (
          <Card key={post.id} className="mb-4">
            <h2 className="text-xl font-semibold ml-2 mt-2">{post.title}</h2>
            <p className='mb-2 ml-2'>{post.content}</p>
          </Card>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="title"
          value={newPost.title}
          onChange={handleInputChange}
          placeholder="Username"
          className="w-full"
        />
        <Textarea
          name="content"
          value={newPost.content}
          onChange={handleInputChange}
          placeholder="Message"
          className="w-full"
        />
        <Button variant="primary" type="submit" className="w-full">Create Post</Button>
      </form>
      </motion.div>
    </div>
  );
};

export default ForumPage;
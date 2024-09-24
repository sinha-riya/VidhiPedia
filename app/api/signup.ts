import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    const filePath = path.resolve('./src/data/users.json');
    const users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const userExists = users.some((u: { username: string }) => u.username === username);

    if (userExists) {
      res.status(409).json({ message: 'Username already exists' });
    } else {
      users.push({ username, password });
      fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
      res.status(201).json({ message: 'User registered successfully!' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
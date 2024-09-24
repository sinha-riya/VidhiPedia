import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    const filePath = path.resolve('./src/data/users.json');
    const users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const user = users.find((u: { username: string; password: string }) => u.username === username && u.password === password);
    if (user) {
      res.status(200).json({ message: 'Login successful!' });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
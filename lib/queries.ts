// src/db/queries.ts
import prisma from './prisma';
import { cache } from 'react';

export const age = cache (async () => {
  const data = await prisma.age.findMany();
    return data;
});


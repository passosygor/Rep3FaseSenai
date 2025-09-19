// Path: prisma/prisma.js

import { PrismaClient } from '@prisma/client'
export const prismaClient = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],

});

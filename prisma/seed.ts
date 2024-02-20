// seed.ts

import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();
const categories = [
  {
    id: 0,
    name: 'All',
    link: 'all'
  }
];

async function main() {
  await prisma.role.createMany({
    data: [{ type: 'ADMIN' }, { type: 'STAFF' }, { type: 'USER' }],
    skipDuplicates: true // This ensures roles aren't created if they already exist
  });
  const password = await hash('QpV2qfxu', 12);
  const user = await prisma.user.upsert({
    where: { email: 'admin@admin.com' },
    update: {},
    create: {
      email: 'admin@admin.com',
      userName: 'Admin',
      role: {
        connect: { type: 'ADMIN' }
      },
      password
    }
  });

  for (const category of categories) {
    await prisma.category.create({
      data: category
    });
  }
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

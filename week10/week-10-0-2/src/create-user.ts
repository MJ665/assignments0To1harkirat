// welcome to the prisma getting started sedction prisma is an opensource next generation orm 
// it consista of the following parts
// prismaclient auto generated and type safe query builder for Node.js and TS
// prisma migrate migration tool to easily evolve your database schema from prototyping to production 
// prisma studio gui to view eand edit data in your database






// automated migration means 
// db changes ofter yhou add more columns add new tables you have to do migration to keep syncing the db state 
// pre orm days manually update the prod db dev edrb
// there was no log of the changes made to the db

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  })
  console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
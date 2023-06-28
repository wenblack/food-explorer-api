import bcrypt from 'bcryptjs'
import prisma from '../src/lib/prisma'

async function main() {
  await prisma.categorie.upsert({
    where: { name: 'Prato principal' },
    update: {},
    create: {
      name: 'Prato principal',
    },
  })
  
  await prisma.categorie.upsert({
    where: { name: 'Sobremesas' },
    update: {},
    create: {
      name: 'Sobremesas',
    },
  })
  await prisma.categorie.upsert({
    where: { name: 'Bebidas' },
    update: {},
    create: {
      name: 'Bebidas',
    },
  })

  await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      name: 'Bob',
      password: bcrypt.hashSync("password", 8),
      isAdmin: false
    },
  })

    await prisma.user.upsert({
    where: { email: 'admin' },
    update: {},
    create: {
      email: 'admin',
      name: 'Administrator',
      isAdmin:true,
      password: bcrypt.hashSync("admin", 8),
    },
  })

  await  prisma.product.create({
    data :{
        name: "Torradas de Parma ",
        description: "Presunto de parma e rúcula em um pão com fermentação natural.",
        imgUrl: "",
        price :.97,
    }
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

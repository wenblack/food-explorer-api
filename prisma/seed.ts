import bcrypt from 'bcryptjs'
import prisma from '../src/lib/prisma'

async function main() {
  await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      name: 'Alice',
      password: bcrypt.hashSync("password", 8),
      isAdmin: false
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
        name: "Salada Ravanello ",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
        imgUrl: "",
        price :49.97,   
    }
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

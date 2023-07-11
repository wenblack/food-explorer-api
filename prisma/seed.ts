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

  await  prisma.product.createMany({
    data :[
      {
        "name": "Salada Ravanello",
        "description": "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
        "price": 25.97,
        "imgUrl": "https://example.com/product1.jpg"
      },
      {
        "name": "Torradas de Parma",
        "description": "Presunto de parma e rúcula em um pão com fermentação natural.",
        "price": 49.97,
        "imgUrl": "https://example.com/product2.jpg"
      },
      {
        "name": "Spaguetti Gambe",
        "description": "Massa fresca com camarões e pesto. ",
        "price": 79.97,
        "imgUrl": "https://example.com/product3.jpg"
      },
      {
        "name": "Salada Molla",
        "description": "Description of Product 4",
        "price": 49.99,
        "imgUrl": "https://example.com/product4.jpg"
      },
      {
        "name": "Prugna Pie ",
        "description": "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
        "price": 49.97,
        "imgUrl": "https://example.com/product6.jpg",
        "categorie":"Sobremesas"      
      },
      {
        "name":"Peachy pastrie",
        "description": "Delicioso folheado de pêssego com folhas de hortelã.",
        "price": 32.97,
        "imgUrl": "https://example.com/product7.jpg",
        "categorie":"Sobremesas"
      },
      {
        "name": "Macarons",
        "description": "Farinha de amêndoas, manteiga, claras e açúcar.",
        "price": 79.97,
        "imgUrl": "https://example.com/product8.jpg",
        "categorie":"Sobremesas"
      },
      {
        "name": "Bolo de damasco",
        "description": "Damascos frescos em uma massa sem glúten.",
        "price": 19.97,
        "imgUrl": "https://example.com/product9.jpg",
        "categorie":"Sobremesas"
      },
      {
        "name": "Suco de maracujá",
        "description": "Suco de maracujá gelado, cremoso, docinho.",
        "price": 32.97,
        "imgUrl": "https://example.com/product10.jpg",
        "categorie":"Sobremesas"
      },
      {
        "name": "Espresso",
        "description": "Café cremoso feito na temperatura e pressões perfeitas.",
        "price": 49.97,
        "imgUrl": "https://example.com/product11.jpg",
        "categorie":"Bebidas"      
      },
      {
        "name": "Tè d'autunno",
        "description": "Chá de anis, canela e limão. Sinta o outono italiano.",
        "price": 19.97,
        "imgUrl": "https://example.com/product12.jpg",
        "categorie":"Bebidas"
      },
   {
        "name":"Pomo bourbon",
        "description": "Maçã, whisky, canela. On the rocks.",
        "price": 79.97,
        "imgUrl": "https://example.com/product12.jpg",
        "categorie":"Bebidas"
      }
    ]})
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

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
    data :
      {
        "name": "Salada Ravanello",
        "description": "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
        "price": 25.97,
        "imgUrl": "files/product (1).png"
      }
    }),
    await  prisma.product.create({
      data :
        {
          "name": "Torradas de Parma",
        "description": "Presunto de parma e rúcula em um pão com fermentação natural.",
        "price": 49.97,
        "imgUrl": "files/product (2).png"
        }
      })
      await  prisma.product.create({
        data :
          {"name": "Spaguetti Gambe",
          "description": "Massa fresca com camarões e pesto. ",
          "price": 79.97,
          "imgUrl": "files/product (3).png"
          }
        })
        await  prisma.product.create({
          data :
            {
              "name": "Salada Molla",
              "description": "Description of Product 4",
              "price": 49.99,
              "imgUrl": "files/product (4).png"
            }
          })
          await  prisma.product.create({
            data :
              {"name": "Prugna Pie ",
              "description": "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
              "price": 49.97,
              "imgUrl": "https://example.com/product6.jpg",
              "categorie":"Sobremesas"      
              }
            })
            await  prisma.product.create({
              data :
                {"name":"Peachy pastrie",
                "description": "Delicioso folheado de pêssego com folhas de hortelã.",
                "price": 32.97,
                "imgUrl": "files/product (6).png",
                "categorie":"Sobremesas"      
                }
              })
              await  prisma.product.create({
                data :
                  {
                    "name": "Macarons",
        "description": "Farinha de amêndoas, manteiga, claras e açúcar.",
        "price": 79.97,
        "imgUrl": "files/product (7).png",
        "categorie":"Sobremesas"      
                  }
                })
                await  prisma.product.create({
                  data :
                    {
                      "name": "Bolo de damasco",
                      "description": "Damascos frescos em uma massa sem glúten.",
                      "price": 19.97,
                      "imgUrl": "files/product (8).png",
                      "categorie":"Sobremesas"    
                    }
                  })
                
                  await  prisma.product.create({
                    data :
                      {
                        "name": "Suco de maracujá",
        "description": "Suco de maracujá gelado, cremoso, docinho.",
        "price": 32.97,
        "imgUrl": "files/product (9).png",
        "categorie":"Bebidas"   
                      }
                    })
                    await  prisma.product.create({
                      data :
                        {
                          "name": "Espresso",
                          "description": "Café cremoso feito na temperatura e pressões perfeitas.",
                          "price": 49.97,
                          "imgUrl": "files/product (10).png",
                          "categorie":"Bebidas"   
                        }
                      })
                      await  prisma.product.create({
                        data :
                          {
                            "name": "Tè d'autunno",
                            "description": "Chá de anis, canela e limão. Sinta o outono italiano.",
                            "price": 19.97,
                            "imgUrl": "files/product (11).png",
                            "categorie":"Bebidas"   
                          }
                        })
                        await  prisma.product.create({
                          data :
                            {
                              "name":"Pomo bourbon",
        "description": "Maçã, whisky, canela. On the rocks.",
        "price": 79.97,
        "imgUrl": "files/product (12).png",
        "categorie":"Bebidas"   
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

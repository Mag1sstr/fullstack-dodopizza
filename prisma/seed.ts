import { prismaClient } from "./prisma-client";

const ingredientsData = [
  {
    name: "Томатный соус",
    price: 50,
    imageUrl: "/images/ingredients/tomato.png",
  },
  {
    name: "Моцарелла",
    price: 80,
    imageUrl: "/images/ingredients/mozzarella.png",
  },
  {
    name: "Пепперони",
    price: 100,
    imageUrl: "/images/ingredients/pepperoni.png",
  },
  { name: "Базилик", price: 30, imageUrl: "/images/ingredients/basil.png" },
  { name: "Пармезан", price: 90, imageUrl: "/images/ingredients/parmesan.png" },
  { name: "Дор Блю", price: 110, imageUrl: "/images/ingredients/dorblu.png" },
  { name: "Чеддер", price: 90, imageUrl: "/images/ingredients/cheddar.png" },
];

const pizzas = [
  {
    name: "Пепперони",
    price: 550,
    imageUrl: "/images/pizza/pepperoni.png",
    ingredients: ["Томатный соус", "Моцарелла", "Пепперони"],
    items: [
      { price: 450, size: 25, pizzaType: 1 },
      { price: 550, size: 30, pizzaType: 1 },
      { price: 600, size: 30, pizzaType: 2 },
    ],
  },
  {
    name: "Маргарита",
    price: 480,
    imageUrl: "/images/pizza/margarita.png",
    ingredients: ["Томатный соус", "Моцарелла", "Базилик"],
    items: [
      { price: 380, size: 25, pizzaType: 1 },
      { price: 480, size: 30, pizzaType: 1 },
    ],
  },
  {
    name: "Четыре сыра",
    price: 620,
    imageUrl: "/images/pizza/4cheese.png",
    ingredients: ["Моцарелла", "Пармезан", "Дор Блю", "Чеддер"],
    items: [
      { price: 520, size: 25, pizzaType: 2 },
      { price: 620, size: 30, pizzaType: 2 },
    ],
  },
];

async function main() {
  const category = await prismaClient.category.upsert({
    where: { name: "Пицца" },
    update: {},
    create: { name: "Пицца" },
  });

  for (const ingredient of ingredientsData) {
    await prismaClient.ingredient.upsert({
      where: { name: ingredient.name },
      update: {},
      create: ingredient,
    });
  }

  for (const pizza of pizzas) {
    await prismaClient.product.create({
      data: {
        name: pizza.name,
        price: pizza.price,
        imageUrl: pizza.imageUrl,
        categoryId: category.id,

        ingredients: {
          connect: pizza.ingredients.map((name) => ({ name })),
        },

        items: {
          create: pizza.items,
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });

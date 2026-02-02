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

const productsData = [
  {
    name: "Пепперони",
    price: 550,
    imageUrl: "/images/pizza/pepperoni.avif",
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
    imageUrl: "/images/pizza/marga.avif",
    ingredients: ["Томатный соус", "Моцарелла", "Базилик"],
    items: [
      { price: 380, size: 25, pizzaType: 1 },
      { price: 480, size: 30, pizzaType: 1 },
    ],
  },
  {
    name: "Двойной цыпленок",
    price: 620,
    imageUrl: "/images/pizza/cipa.avif",
    ingredients: ["Моцарелла", "Пармезан", "Дор Блю", "Чеддер"],
    items: [
      { price: 520, size: 25, pizzaType: 2 },
      { price: 620, size: 30, pizzaType: 2 },
    ],
  },
  {
    name: "Сырная",
    price: 500,
    imageUrl: "/images/pizza/cheese.avif",
    ingredients: ["Моцарелла", "Пармезан", "Чеддер"],
    items: [
      { price: 420, size: 25, pizzaType: 1 },
      { price: 500, size: 30, pizzaType: 1 },
    ],
  },
  {
    name: "Ветчина и сыр",
    price: 590,
    imageUrl: "/images/pizza/vet.avif",
    ingredients: ["Томатный соус", "Моцарелла", "Пепперони"],
    items: [
      { price: 490, size: 25, pizzaType: 2 },
      { price: 590, size: 30, pizzaType: 2 },
    ],
  },
  {
    name: "Гавайская",
    price: 540,
    imageUrl: "/images/pizza/gavai.avif",
    ingredients: ["Моцарелла", "Пармезан"],
    items: [
      { price: 440, size: 25, pizzaType: 1 },
      { price: 540, size: 30, pizzaType: 1 },
    ],
  },
  {
    name: "Терияки",
    price: 510,
    imageUrl: "/images/pizza/ter.avif",
    ingredients: ["Томатный соус", "Моцарелла", "Базилик"],
    items: [
      { price: 410, size: 25, pizzaType: 1 },
      { price: 510, size: 30, pizzaType: 1 },
    ],
  },
  {
    name: "Кока-Кола",
    price: 190,
    imageUrl: "/images/drinks/coca-cola.avif",
    ingredients: ["Газированная вода", "Сахар", "Карамельный краситель"],
    items: [
      { price: 150, size: 330, drinkType: 1 },
      { price: 190, size: 500, drinkType: 1 },
    ],
  },
  {
    name: "Апельсиновый сок",
    price: 210,
    imageUrl: "/images/drinks/orange-juice.avif",
    ingredients: ["Апельсиновый сок"],
    items: [
      { price: 180, size: 300, drinkType: 1 },
      { price: 210, size: 500, drinkType: 1 },
    ],
  },
  {
    name: "Минеральная вода",
    price: 140,
    imageUrl: "/images/drinks/water.avif",
    ingredients: ["Минеральная вода"],
    items: [
      { price: 120, size: 500, drinkType: 1 },
      { price: 140, size: 1000, drinkType: 1 },
    ],
  },
  {
    name: "Холодный чай Лимон",
    price: 170,
    imageUrl: "/images/drinks/ice-tea-lemon.avif",
    ingredients: ["Чай", "Лимон", "Сахар"],
    items: [
      { price: 150, size: 400, drinkType: 1 },
      { price: 170, size: 600, drinkType: 1 },
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

  for (const product of productsData) {
    await prismaClient.product.create({
      data: {
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        categoryId: category.id,

        ingredients: {
          connect: product.ingredients.map((name) => ({ name })),
        },

        items: {
          create: product.items,
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

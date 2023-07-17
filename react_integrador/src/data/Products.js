export const products = [
    {
        id: 1,
        title: "Café House Blend",
        img: "/images/producto_9.png",
        description: "Intensidad: Suave. Notas: Cereza, frutos rojos, avellanas tostadas y miel.",
        price: 2300,
        category:"CafeteraItaliana",
    },
    {
        id: 2,
        title: "Café Molido Brasil",
        img: "/images/producto_5.png",
        description: "Intensidad: Media. Notas: Azúcar mascabo, almendras tostadas y madera.",
        price: 2300,
        category:"PrensaFrancesa",
    },
    {
        id: 3,
        title: "Café Molido Colombia",
        img: "/images/producto_14.png",
        description: "Intensidad: Media. Notas: Azúcar morena, miel y cacao.",
        price: 2200,
        category:"CafeteraItaliana",
    },
    {
        id: 4,
        title: "Café Molido Perú",
        img: "/images/producto_6.png",
        description: "Intensidad: Media. Notas: Naranja, azúcar morena y nuez.",
        price: 2600,
        category:"MaquinasEspresso",
    },
    {
        id: 5,
        title: "Café Molido Descafeinado",
        img: "/images/producto_3.png",
        description: "Intensidad: Suave. Café tostado natural en grano de especialidad.",
        price: 2800,
        category:"PrensaFrancesa",
    },
    {
        id: 6,
        title: "Café Molido Italiano",
        img: "/images/producto_15.png",
        description: "Intensidad: Intenso. Notas: Chocolate amargo y avellana tostada.",
        price: 2200,
        category:"Chemex",
    },
    {
        id: 7,
        title: "Café Caramelo Blend",
        img: "/images/producto_10.png",
        description: "Intensidad: Media. Notas: Caramelo, Crema.",
        price: 2600,
        category:"MaquinasEspresso",
    },
    {
        id: 8,
        title: "Café Cinnamon Blend",
        img: "/images/producto_13.png",
        description: "Intensidad: Media. Notas: Canela, azúcar rubia, y vainilla.",
        price: 3000,
        category:"V60",
    },
    {
        id: 9,
        title: "Café Chocolate Blend",
        img: "/images/producto_12.png",
        description: "Intensidad: Media. Notas: Chocolate dulce, caramelo, almendra, limón.",
        price: 3000,
        category:"Chemex",
    },
    // {
    //     id: 10,
    //     title: "Café ",
    //     img: "/images/producto_7.png",
    //     description: "Intensidad: Media. Notas: Chocolate dulce, caramelo, almendra, limón.",
    //     price: 3000,
    //     category:"Chemex",
    // },
];

export const TotalProducts = products.length;

export const Products = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category] = [...acc[product.category], product];

  return acc;
}, {});
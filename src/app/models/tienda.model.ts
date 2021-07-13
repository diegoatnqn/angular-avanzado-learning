import { Producto } from "../interfaces/producto";

export class Tienda {
  tiendaItems: Array<Producto>;

  constructor() {
    this.tiendaItems = [
      {
        id: 1,
        texto:
          "H+ Sport is dedicated to creating eco-friendly, high-quality, nutrient-rich, nutritional products that enhance active lifestyles.",
        titulo: "Orange Mineral Water ",
        imagen: "mineralwater-orange.jpg",
        precio: 20
      },
      {
        id: 2,
        texto:
          "H+ Sport is dedicated to creating eco-friendly, high-quality, nutrient-rich, nutritional products that enhance active lifestyles.",
        titulo: "Strawberry Mineral Water ",
        imagen: "mineralwater-strawberry.jpg",
        precio: 33
      },
      {
        id: 3,
        texto:
          "H+ Sport is dedicated to creating eco-friendly, high-quality, nutrient-rich, nutritional products that enhance active lifestyles.",
        titulo: "Chocolate Protein Bar",
        imagen: "proteinbar-chocolate.jpg",
        precio: 120
      },
      {
        id: 4,
        texto:
          "H+ Sport is dedicated to creating eco-friendly, high-quality, nutrient-rich, nutritional products that enhance active lifestyles.",
        titulo: "Pastillas suaves (para niños)",
        imagen: "halls-mentholyptus-extra-strong.jpg",
        precio: 10
      },
      {
        id: 5,
        texto:
          "H+ Sport is dedicated to creating eco-friendly, high-quality, nutrient-rich, nutritional products that enhance active lifestyles.",
        titulo: "Lápices feos",
        imagen: "boligrafo-pelikan-pastel.jpg",
        precio: 45
      },
      {
        id: 6,
        texto:
          "H+ Sport is dedicated to creating eco-friendly, high-quality, nutrient-rich, nutritional products that enhance active lifestyles.",
        titulo: "Mogul",
        imagen: "rollo_mogul_frutales.png",
        precio: 15
      },
      {
        id: 7,
        texto:
          "H+ Sport is dedicated to creating eco-friendly, high-quality, nutrient-rich, nutritional products that enhance active lifestyles.",
        titulo: "Bubalú",
        imagen: "bazoka.jpg",
        precio: 5
      }
    ];
  }
}

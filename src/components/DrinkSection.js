import React from "react";
import ParallaxBanner from "./ParallaxBanner.js";
import Menu from "./Menu.js";
const menuData = [
  {
    itemName: "Frose",
    description: "with strawberry puree",
    price: 3
  },
  {
    itemName: "Vodka",
    description: "80 proof",
    price: 4
  },
  {
    itemName: "Pepsi",
    description: "",
    price: 2
  },
  {
    itemName: "Sprite",
    description: "",
    price: 3
  },
  {
    itemName: "Lemonade",
    description: "with freshly squeezed lemons",
    price: 2
  },
  {
    itemName: "Lemon Water",
    description: "with freshly squeezed lemons",
    price: 3
  },
  {
    itemName: "Peach Lemonade",
    description: "with white peaches",
    price: 3
  },
  {
    itemName: "Diet Coke",
    description: "zero calories",
    price: 2
  },
  {
    itemName: "Ciroc",
    description: "strawberry or rasberry",
    price: 2
  }
];

const DrinkSection = props => {
  return (
    <section className="drink__section">
      <ParallaxBanner title="Drinks" id="2" />
      <Menu menuData={menuData} title="Drink Menu" boast="Locally Cultivated" />
    </section>
  );
};

export default DrinkSection;

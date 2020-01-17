import img0 from "../images/house1.jpg";
import img1 from "../images/house2.jpg";
import img2 from "../images/house3.jpg";
import img3 from "../images/house4.jpg";
import img4 from "../images/house5.jpg";
import img5 from "../images/house6.jpg";

import realtor1 from "../images/realtor-1.jpeg";
import realtor2 from "../images/realtor-2.jpeg";
import realtor3 from "../images/realtor-3.jpeg";
import realtor4 from "../images/realtor-4.jpg";

import city1 from "../images/city-1.jpg";
import city2 from "../images/city-2.jpg";
import city3 from "../images/city-3.jpg";
import city4 from "../images/city-4.jpg";
import city5 from "../images/city-5.jpg";

import luxury1 from "../images/luxury-1.jpg";
import luxury2 from "../images/luxury-2.jpg";
import luxury3 from "../images/luxury-3.jpg";
import luxury4 from "../images/luxury-4.jpg";

import h1b from "../images/interior/house1b.jpg";
import h1c from "../images/interior/house1c.jpg";
import h1d from "../images/interior/house1d.jpg";

import h2a from "../images/interior/house2a.jpg";
import h2b from "../images/interior/house2b.jpg";
import h2c from "../images/interior/house2c.jpg";
import h2d from "../images/interior/house2d.jpg";
import h2e from "../images/interior/house2e.jpg";

import h3a from "../images/interior/house3a.jpg";
import h3b from "../images/interior/house3b.jpg";
import h3c from "../images/interior/house3c.jpg";
import h3d from "../images/interior/house3d.jpg";
import h3e from "../images/interior/house3e.jpg";

import h4a from "../images/interior/house4a.jpg";
import h4b from "../images/interior/house4b.jpg";
import h4c from "../images/interior/house4c.jpg";
import h4d from "../images/interior/house4d.jpg";

import h5a from "../images/interior/house5a.jpg";
import h5b from "../images/interior/house5b.jpg";
import h5c from "../images/interior/house5c.jpg";
import h5d from "../images/interior/house5d.jpg";

import h6a from "../images/interior/house6a.jpg";
import h6b from "../images/interior/house6b.jpg";
import h6c from "../images/interior/house6c.jpg";
import h6d from "../images/interior/house6d.jpg";
import h6e from "../images/interior/house6e.jpg";

export const homes = {
  0: {
    img: img0,
    status: 1,
    size: 700,
    garage: 2,
    bed: 2,
    bath: 3,
    realator: "James Funkle",
    posted: 1,
    address: "1890 Cambridge Ave",
    city: "Beverly Hills, CA 90210",
    price: "210,000",
    id: 0,
    interior: [h1b, h1c, h1d, h6a]
  },
  1: {
    img: img1,
    status: 2,
    size: 350,
    garage: 2,
    bed: 2,
    bath: 3,
    realator: "James Funkle",
    posted: 30,
    address: "1512 Lockloal Dr.",
    city: "Hollywood, CA 98724",
    price: "489,000",
    id: 1,
    interior: [h2a, h2b, h2c, h2d]
  },
  2: {
    img: img2,
    status: 2,
    size: 300,
    garage: 4,
    bed: 4,
    bath: 3,
    realator: "Carlisle James",
    posted: 20,
    address: "1982 BuckHead Lane",
    city: "Brockton, NJ 67384",
    price: "650,000",
    id: 2,
    interior: [h3a, h3b, h3c, h3d]
  },
  3: {
    img: img3,
    status: 2,
    size: 200,
    garage: 1,
    bed: 3,
    bath: 3,
    realator: "Frank Turek",
    posted: 3,
    address: "1512 Lockloal Dr.",
    city: "Hollywood, CA 98724",
    price: "550,000",
    id: 3,
    interior: [h4a, h4b, h4c, h4d]
  },
  4: {
    img: img4,
    status: 2,
    size: 800,
    garage: 3,
    bed: 3,
    bath: 2,
    realator: "James Funkle",
    posted: 1,
    address: "152 Shackle",
    city: "Columbus, OH 43215",
    price: "150,000",
    id: 4,
    interior: [h5a, h5b, h5c, h5d]
  },
  5: {
    img: img5,
    status: 2,
    size: 500,
    garage: 2,
    bed: 2,
    bath: 3,
    realator: "Terry Crews",
    posted: 15,
    address: "167 Packard ST.",
    city: "Hollywood, CA 98724",
    price: "245,000",
    id: 5,
    interior: [h6a, h6b, h6c, h6d, h6e]
  }
};

export const realtors = {
  0: {
    img: realtor1,
    name: "James Connor",
    sells: 449,
    number: "419-444-5555",
    info:
      "With over 15 years of experience in the real-estate industry, James is on of our most experienced realtors and will surely be able to find the home you need."
  },
  1: {
    img: realtor2,
    name: "Jamie Blaze",
    sells: 134,
    number: "479-119-5555",
    info:
      "Jamie has the highest success rate of any of our realtors. If you want to find your house and find it quickly, Jamie is the realtor for you."
  },
  2: {
    img: realtor3,
    name: "Brandy Jones",
    sells: 400,
    number: "983-444-5532",
    info:
      "Brandy has a real knack for being able to close the most reasonable deals our company has ever done. Prefect realtor for those on a budget."
  },
  3: {
    img: realtor4,
    name: "Anthony Burgell",
    sells: 345,
    number: "419-444-5555",
    info:
      "It's no secret that Anthony is our most seasoned realtor with over 25 years of experience! Anthony will surely get you in the home you need in no time."
  }
};

export const cities = {
  0: { img: city1, name: "Amsterdam" },
  1: { img: city2, name: "Canada" },
  2: { img: city3, name: "Maine" },
  3: { img: city4, name: "Egypt" },
  4: { img: city5, name: "Colorado" }
};
export const luxuryTextData = [
  "On the surface our story is deceptively simple, but exactly how we give it life is highly sophisticated. Collaborating with our" +
    "extraordinary developer clientele, we create desire and demand for" +
    "luxury real estate in the great financial, social, cultural and" +
    "recreational capitals of the world. Like the world class architects" +
    "and designers they select, this new wave of developers is dedicated to" +
    "crafting the most geometrically inspiring and emotionally moving" +
    "structures imaginable. Our role is to market those residences to" +
    "discerning buyers and to help guide developer, architect and buyer" +
    "alike in an evolving world of luxury living.",
  "On the surface our story is deceptively simple, but exactly how we give it life is highly sophisticated. Collaborating with our" +
    "extraordinary developer clientele, we create desire and demand for" +
    "luxury real estate in the great financial, social, cultural and" +
    "recreational capitals of the world. Like the world class architects" +
    "and designers they select, this new wave of developers is dedicated to" +
    "crafting the most geometrically inspiring and emotionally moving"
];
export const luxuryProperties = {
  0: {
    img: luxury1,
    text: "Visit Cambridge"
  },
  1: {
    img: luxury2,
    text: "Marine"
  },
  2: {
    img: luxury3,
    text: "Lavish Loft"
  },
  3: {
    img: luxury4,
    text: "Canal Beach"
  }
};

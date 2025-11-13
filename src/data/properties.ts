export interface Property {
  id: string;
  name: string;
  price: number;
  location: string;
  city: string;
  rooms: number;
  bathrooms: number;
  description: string;
  image: string;
  type: "apartment" | "house" | "cottage" | "townhouse";
  available: boolean;
}

export const properties: Property[] = [
  {
    id: "1",
    name: "Modern London Apartment",
    price: 1800,
    location: "Kensington, London",
    city: "London",
    rooms: 2,
    bathrooms: 2,
    description: "Beautiful modern apartment in the heart of Kensington. Features contemporary design, fully equipped kitchen, and excellent transport links. Perfect for professionals or small families.",
    image: "/src/assets/property-1.jpg",
    type: "apartment",
    available: true,
  },
  {
    id: "2",
    name: "Charming Cotswolds Cottage",
    price: 1200,
    location: "Broadway, Cotswolds",
    city: "Cotswolds",
    rooms: 3,
    bathrooms: 2,
    description: "Picturesque stone cottage in the beautiful Cotswolds. Enjoy peaceful countryside living with modern amenities. Features a lovely garden and traditional character throughout.",
    image: "/src/assets/property-2.jpg",
    type: "cottage",
    available: true,
  },
  {
    id: "3",
    name: "Elegant Victorian Townhouse",
    price: 2500,
    location: "Chelsea, London",
    city: "London",
    rooms: 4,
    bathrooms: 3,
    description: "Stunning Victorian townhouse with original features and modern updates. Spacious rooms, private garden, and prime Chelsea location. Ideal for families seeking luxury.",
    image: "/src/assets/property-3.jpg",
    type: "townhouse",
    available: true,
  },
  {
    id: "4",
    name: "Contemporary Manchester Home",
    price: 1400,
    location: "Northern Quarter, Manchester",
    city: "Manchester",
    rooms: 3,
    bathrooms: 2,
    description: "Stylish modern house in Manchester's vibrant Northern Quarter. Close to cafes, restaurants, and cultural attractions. Features open-plan living and private parking.",
    image: "/src/assets/property-4.jpg",
    type: "house",
    available: true,
  },
  {
    id: "5",
    name: "Riverside Birmingham Flat",
    price: 1100,
    location: "Brindleyplace, Birmingham",
    city: "Birmingham",
    rooms: 2,
    bathrooms: 1,
    description: "Contemporary flat with canal views in Birmingham's premier development. Walking distance to shops, restaurants, and entertainment. Ideal for young professionals.",
    image: "/src/assets/property-1.jpg",
    type: "apartment",
    available: true,
  },
  {
    id: "6",
    name: "Georgian Edinburgh Apartment",
    price: 1600,
    location: "New Town, Edinburgh",
    city: "Edinburgh",
    rooms: 3,
    bathrooms: 2,
    description: "Beautiful Georgian apartment in Edinburgh's prestigious New Town. Period features combined with modern comfort. Central location with stunning views.",
    image: "/src/assets/property-2.jpg",
    type: "apartment",
    available: true,
  },
];

export const cities = [
  {
    name: "London",
    count: 2,
    description: "Capital city with diverse properties",
    image: "/src/assets/property-3.jpg",
  },
  {
    name: "Manchester",
    count: 1,
    description: "Vibrant northern city",
    image: "/src/assets/property-4.jpg",
  },
  {
    name: "Birmingham",
    count: 1,
    description: "UK's second city",
    image: "/src/assets/property-1.jpg",
  },
  {
    name: "Edinburgh",
    count: 1,
    description: "Historic Scottish capital",
    image: "/src/assets/property-2.jpg",
  },
  {
    name: "Cotswolds",
    count: 1,
    description: "Beautiful countryside",
    image: "/src/assets/property-2.jpg",
  },
];

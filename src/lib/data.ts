export type Category = {
  slug: string;
  name: string;
  image: string;
};

export type Business = {
  slug: string;
  name: string;
  category: string;
  rating: number;
  ratingCount: number;
  city: string;
  description: string;
  image: string;
  whatsapp: string;
  instagram: string;
  website: string;
};

export const categories: Category[] = [
  { slug: "comida", name: "COMIDA", image: "/images/categories/comida.jpg" },
  { slug: "joyeria", name: "JOYERÍA", image: "/images/categories/joyeria.jpg" },
  { slug: "eventos", name: "EVENTOS", image: "/images/categories/eventos.jpg" },
  { slug: "tecnologia", name: "TECNOLOGÍA", image: "/images/categories/tecnologia.jpg" },
  { slug: "belleza", name: "BELLEZA", image: "/images/categories/belleza.jpg" },
  { slug: "educacion", name: "EDUCACIÓN", image: "/images/categories/educacion.jpg" },
  { slug: "hogar", name: "HOGAR", image: "/images/categories/hogar.jpg" },
  { slug: "servicios", name: "SERVICIOS", image: "/images/categories/servicios.jpg" },
];

export const featuredBusinesses: Business[] = [
  {
    slug: "dulce-maria",
    name: "Dulce María",
    category: "Repostería artesanal",
    rating: 4.9,
    ratingCount: 127,
    city: "Bogotá",
    description: "Tortas y postres personalizados para tus momentos especiales.",
    image: "/images/businesses/dulce-maria.jpg",
    whatsapp: "573000000001",
    instagram: "dulcemaria",
    website: "https://example.com",
  },
  {
    slug: "adelina-invitations",
    name: "Adelina Invitations",
    category: "Invitaciones digitales",
    rating: 4.8,
    ratingCount: 96,
    city: "Colombia / Online",
    description: "Diseños únicos y personalizados para tus eventos.",
    image: "/images/businesses/adelina-invitations.jpg",
    whatsapp: "573000000002",
    instagram: "adelinainvitations",
    website: "https://example.com",
  },
  {
    slug: "cafe-de-la-montana",
    name: "Café de la Montaña",
    category: "Café y comida saludable",
    rating: 5.0,
    ratingCount: 83,
    city: "Bogotá",
    description: "Café especial y opciones saludables para cada día.",
    image: "/images/businesses/cafe-de-la-montana.jpg",
    whatsapp: "573000000003",
    instagram: "cafedelamontana",
    website: "https://example.com",
  },
  {
    slug: "luz-y-vida",
    name: "Luz y Vida",
    category: "Fotografía",
    rating: 4.9,
    ratingCount: 61,
    city: "Bogotá",
    description: "Sesiones familiares, eventos y momentos especiales.",
    image: "/images/businesses/luz-y-vida.jpg",
    whatsapp: "573000000004",
    instagram: "luzyvida",
    website: "https://example.com",
  },
  {
    slug: "code-and-purpose",
    name: "Code & Purpose",
    category: "Desarrollo web",
    rating: 4.8,
    ratingCount: 54,
    city: "Bogotá / Online",
    description: "Páginas web y soluciones digitales para emprendedores.",
    image: "/images/businesses/code-and-purpose.jpg",
    whatsapp: "573000000005",
    instagram: "codeandpurpose",
    website: "https://example.com",
  },
  {
    slug: "flor-de-sion",
    name: "Flor de Sión",
    category: "Decoración y eventos",
    rating: 4.9,
    ratingCount: 72,
    city: "Bogotá",
    description: "Decoración floral para eventos que inspiran.",
    image: "/images/businesses/flor-de-sion.jpg",
    whatsapp: "573000000006",
    instagram: "flordesion",
    website: "https://example.com",
  },
];
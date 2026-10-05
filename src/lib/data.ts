export type Category = {
  slug: string;
  name: string;
  image: string;
};

export type Business = {
  slug: string;
  name: string;
  category: string;
  rating?: number;
  ratingCount?: number;
  city: string;
  description: string;
  image: string;
  whatsapp?: string;
  instagram?: string;
  website?: string;
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
    slug: "massai-joyeria",
    name: "Massai Joyería",
    category: "Joyería",
    city: "Bogotá",
    description: "Fabricantes directos. Envío gratis a todo el país.",
    image: "/images/businesses/massai-joyeria.jpg",
    whatsapp: "573213734811",
    instagram: "massaijoyeria",
  },
  {
    slug: "adelina-invitations",
    name: "Adelina Invitations",
    category: "Invitaciones digitales",
    city: "Colombia / Online",
    description: "Invitaciones digitales elegantes, completas y sin complicaciones.",
    image: "/images/businesses/adelina-invitations.jpg",
    instagram: "adelina_invitations",
    website: "https://adeline-website-six.vercel.app",
  },
  {
    slug: "nuestras-raices-ancestrales",
    name: "Nuestras Raíces Ancestrales",
    category: "Conservas artesanales",
    city: "Bogotá",
    description: "Tradición, calidad y naturaleza. 100% natural, sin aditivos ni conservantes.",
    image: "/images/businesses/nuestras-raices-ancestrales.jpg",
  },
  {
    slug: "mr-shelos",
    name: "Mr Shelos",
    category: "Bordado, pintura y manillas",
    city: "Bogotá",
    description: "Manillas de mostacilla hechas a mano. Color, tradición y estilo en cada detalle.",
    image: "/images/businesses/mr-shelos.jpg",
    whatsapp: "573124470341",
  },
];
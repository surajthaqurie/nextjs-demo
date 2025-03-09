export interface ISampleProduct {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  images: string[];
  price: number;
  brand: string;
  storeName: string;
  rating: number;
  numReviews: number;
  stock: number;
  isFeatured: boolean;
  bannerUrl: string;
  sizes: string[];
  colors: string[];
}

export const sampleProductData: ISampleProduct[] = [
  {
    id: '1',
    name: 'Monti Sports Shoes',
    slug: 'monti-sports-shoes',
    category: 'Ladies Shoes',
    description: 'Monti Sport shoes for lady',
    images: [
      'https://utfs.io/f/HI9tOglpZNuRyB1OGYWXfM69BcwTqWAlC7gsmju2nhIRbp0Y',
      'https://utfs.io/f/HI9tOglpZNuRDPuBXGJx0mci8FJr4lDf1uLbvoXIt7WzSdeg',
      'https://utfs.io/f/HI9tOglpZNuR7sIZkXXL3H0VstzF5niqmpB2kdoQUgGYuORW',
    ],
    price: 59.99,
    brand: 'Monti',
    storeName: 'Monti Official Store',
    rating: 4.5,
    numReviews: 10,
    stock: 1,
    isFeatured: false, //if features than show the banner
    bannerUrl: 'banner-1.jpg',
    sizes: ['6', '7', '8', '9', '10'],
    colors: ['Black', 'White', 'Pink', 'Blue'],
  },
  {
    id: '2',
    name: 'Carlo High Shoes for mens',
    slug: 'carlo-high-shoes-for-mens',
    category: "Men's Shoes",
    description: 'Carlo Comfort shoes for full day',
    images: ['https://utfs.io/f/HI9tOglpZNuRuLaQTkQqrPfSwKWNyF14jEJA6RU3d5LegaOI'],
    price: 85.9,
    brand: 'Carlo',
    storeName: 'Carlo Premium Outlet',
    rating: 4.2,
    numReviews: 8,
    stock: 10,
    isFeatured: true,
    bannerUrl: 'https://utfs.io/f/HI9tOglpZNuR2Bo4JIYfOFWhzZ4EcU3PyMe6XqxtuwC79GV0',
    sizes: ['6', '7', '8', '9', '10'],
    colors: ['Black', 'White', 'Pink', 'Blue'],
  },
  {
    id: '3',
    name: 'Lama Party wear lady sandals',
    slug: 'lama-party-wear-lady-sandal',
    category: 'Ladies Shoes',
    description: 'perfect golden sandals lady party wear',
    images: ['https://utfs.io/f/HI9tOglpZNuR6sLjhiG3xjb8RE4JVuOip1eUYoCTyWAPZHMr'],
    price: 99.95,
    brand: 'Lama',
    storeName: 'Lama Fashion Store',
    rating: 4.9,
    numReviews: 3,
    stock: 0,
    isFeatured: true,
    bannerUrl: 'https://utfs.io/f/HI9tOglpZNuRtseyEChEvak5ydHpsjz9LeVYAZlDQ38Nw4P2',
    sizes: ['6', '7', '8', '9', '10'],
    colors: ['Black', 'White', 'Pink', 'Blue'],
  },
  {
    id: '4',
    name: 'Lama Sports Shoes',
    slug: 'lama-sports-shoes',
    category: "Men's Shoes",
    description: 'Perfect style and premium comfort',
    images: ['https://utfs.io/f/HI9tOglpZNuRKV4MzYtfqCRyDLT6ebaWw1AZoQ5xYJgNsumP'],
    price: 39.95,
    brand: 'Lama',
    storeName: 'Lama Fashion Store',
    rating: 3.6,
    numReviews: 5,
    stock: 10,
    isFeatured: true,
    bannerUrl: 'https://utfs.io/f/HI9tOglpZNuRAjqLmMF07kzPyJNMe23WYCwX1c9bnGimj8Sv',
    sizes: ['6', '7', '8', '9', '10'],
    colors: ['Black', 'White', 'Pink', 'Blue'],
  },
  {
    id: '5',
    name: 'Nike Kids Shoes',
    slug: 'nike-kids-shoes',
    category: 'Kids Shoes',
    description: 'A perfect blend and comfort',
    images: ['https://utfs.io/f/HI9tOglpZNuRhk9rhl84EUSc73FC0zPXenwy5Ijv9ZTMWoBu'],
    price: 79.99,
    brand: 'Nike',
    storeName: 'Nike Official Store',
    rating: 4.7,
    numReviews: 18,
    stock: 6,
    isFeatured: false,
    bannerUrl: '',
    sizes: ['6', '7', '8', '9', '10'],
    colors: ['Black', 'White', 'Pink', 'Blue'],
  },
  {
    id: '6',
    name: 'Pata Office Shoes',
    slug: 'pata-office-shoes',
    category: "Men's Shoes",
    description: 'Comfort on full day premium product',
    images: ['https://utfs.io/f/HI9tOglpZNuRjaf2ARKshMrEAcb1o36zHRqSkdgUPt924Wev'],
    price: 99.99,
    brand: 'Pata',
    storeName: 'Pata Official Store',
    rating: 4.6,
    numReviews: 12,
    stock: 8,
    isFeatured: true,
    bannerUrl: 'https://utfs.io/f/HI9tOglpZNuR2BlzMeWfOFWhzZ4EcU3PyMe6XqxtuwC79GV0',
    sizes: ['6', '7', '8', '9', '10'],
    colors: ['Black', 'White', 'Pink', 'Blue'],
  },
  {
    id: '7',
    name: 'Hilton Ladies Office Sandal',
    slug: 'ladies-office-sandal',
    category: 'Ladies Shoes',
    description: 'Comfort office sandals for ladies.',
    images: ['https://utfs.io/f/HI9tOglpZNuRXmGznpkzAjcy3i6KSlDYNfvPgUp9sJrha8Qe'],
    price: 99.99,
    brand: 'Hilton',
    storeName: 'Hilton Footwear',
    rating: 4.6,
    numReviews: 12,
    stock: 8,
    isFeatured: false,
    bannerUrl: '',
    sizes: ['6', '7', '8', '9', '10'],
    colors: ['Black', 'White', 'Pink', 'Blue'],
  },
];

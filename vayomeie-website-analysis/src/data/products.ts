export interface Product {
  id: number;
  name: string;
  slug: string;
  url: string;
  originalPrice: string;
  salePrice: string;
  images: string[];
  video?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'V-Neck Front-Slit Aline Dress (Teal Blue Pomegranate)',
    slug: 'v-neck-front-slit-aline-dress-teal-blue-pomegranate',
    url: 'https://vayomeie.com/product/v-neck-front-slit-aline-dress-teal-blue-pomegranate',
    originalPrice: '₹3,299',
    salePrice: '₹2,499',
    images: [
      'https://vayomeie.com/assets/img/products/6a02bd594c27c-dsc09060.jpg',
      'https://vayomeie.com/assets/img/products/6a008c4730fd9-dsc09068.jpg',
      'https://vayomeie.com/assets/img/products/6a008c5c2cc0b-dsc09082.jpg',
      'https://vayomeie.com/assets/img/products/6a02bd59e9153-dsc09077.jpg',
    ],
  },
  {
    id: 2,
    name: 'Caphands Alia-Cut Dress (Brown – Maroon Floral)',
    slug: 'caphands-alia-cut-dress-brown-maroon-floral',
    url: 'https://vayomeie.com/product/caphands-alia-cut-dress-brown-maroon-floral',
    originalPrice: '₹2,799',
    salePrice: '₹2,199',
    images: [
      'https://vayomeie.com/assets/img/products/6a02c1117a535-dsc09390.jpg',
      'https://vayomeie.com/assets/img/products/VAY-IND-004/03.jpg',
      'https://vayomeie.com/assets/img/products/VAY-IND-004/04.jpg',
      'https://vayomeie.com/assets/img/products/VAY-IND-004/06.jpg',
    ],
  },
  {
    id: 3,
    name: 'A-Line Motif Printed Maxi Dress (Black)',
    slug: 'a-line-motif-printed-maxi-dress-black',
    url: 'https://vayomeie.com/product/a-line-motif-printed-maxi-dress-black',
    originalPrice: '₹3,299',
    salePrice: '₹2,499',
    images: [
      'https://vayomeie.com/assets/img/products/6a0c713fbb8b1-img9472-cmpr.jpg',
      'https://vayomeie.com/assets/img/products/6a0c713f54fe4-img9474-cmpr.jpg',
      'https://vayomeie.com/assets/img/products/6a0c7140a18d2-img9464-cmpr.jpg',
      'https://vayomeie.com/assets/img/products/6a0c714115fb2-img9456-cmpr.jpg',
    ],
  },
  {
    id: 4,
    name: 'Halter Neck Tiered Dress (Cream-Elephant)',
    slug: 'halter-neck-tiered-dress-cream-elephant-2',
    url: 'https://vayomeie.com/product/halter-neck-tiered-dress-cream-elephant-2',
    originalPrice: '₹3,299',
    salePrice: '₹2,499',
    images: [
      'https://vayomeie.com/assets/img/products/6a02b8395d970-dsc09098.jpg',
      'https://vayomeie.com/assets/img/products/6a02b8f80f1e9-dsc09103.jpg',
      'https://vayomeie.com/assets/img/products/6a02b8f885cb6-dsc09117.jpg',
      'https://vayomeie.com/assets/img/products/6a02ba37312f7-dsc09106.jpg',
    ],
  },
  {
    id: 5,
    name: 'Halter Neck Tiered Dress (Blue-Elephant)',
    slug: 'halter-neck-tiered-dress-blue-elephant',
    url: 'https://vayomeie.com/product/halter-neck-tiered-dress-blue-elephant',
    originalPrice: '₹3,299',
    salePrice: '₹2,499',
    images: [
      'https://vayomeie.com/assets/img/products/6a02bb26811dd-dsc09118.jpg',
      'https://vayomeie.com/assets/img/products/6a02bb26b4654-dsc09122.jpg',
      'https://vayomeie.com/assets/img/products/6a02bb26e3e20-dsc09135.jpg',
      'https://vayomeie.com/assets/img/products/6a02bc90e9915-dsc09134.jpg',
    ],
  },
  {
    id: 6,
    name: 'Halter Neck Tiered Dress (Black Flowers Floral)',
    slug: 'halter-neck-tiered-dress-black-flowers-floral',
    url: 'https://vayomeie.com/product/halter-neck-tiered-dress-black-flowers-floral',
    originalPrice: '₹3,298',
    salePrice: '₹2,499',
    images: [
      'https://vayomeie.com/assets/img/products/6a02beb518855-dsc09168.jpg',
      'https://vayomeie.com/assets/img/products/VAY-IND-003/04.jpg',
      'https://vayomeie.com/assets/img/products/VAY-IND-003/05.jpg',
      'https://vayomeie.com/assets/img/products/6a02beb4ab164-dsc09153.jpg',
    ],
  },
  {
    id: 7,
    name: 'Hem-Tiered Aline Dress (Cream – Green Leaf)',
    slug: 'hem-tiered-aline-dress-cream-green-leaf',
    url: 'https://vayomeie.com/product/hem-tiered-aline-dress-cream-green-leaf',
    originalPrice: '₹2,798',
    salePrice: '₹2,199',
    images: [
      'https://vayomeie.com/assets/img/products/6a02c27ea5b38-dsc09709.jpg',
      'https://vayomeie.com/assets/img/products/VAY-IND-005/03.jpg',
      'https://vayomeie.com/assets/img/products/VAY-IND-005/04.jpg',
      'https://vayomeie.com/assets/img/products/6a02c280c71ef-dsc09767.jpg',
    ],
  },
  {
    id: 8,
    name: 'Aline Ruched Puff-Sleeve Dress (Red-Cream Floral)',
    slug: 'aline-ruched-puff-sleeve-dress-red-cream-floral',
    url: 'https://vayomeie.com/product/aline-ruched-puff-sleeve-dress-red-cream-floral',
    originalPrice: '₹2,798',
    salePrice: '₹2,199',
    images: [
      'https://vayomeie.com/assets/img/products/6a02c48ae00d5-dsc09317.jpg',
      'https://vayomeie.com/assets/img/products/VAY-IND-006/02.jpg',
      'https://vayomeie.com/assets/img/products/VAY-IND-006/04.jpg',
      'https://vayomeie.com/assets/img/products/VAY-IND-006/08.jpg',
    ],
  },
  {
    id: 9,
    name: 'Aline Ruched Puff-Sleeve Dress (Cream-Black Floral)',
    slug: 'aline-ruched-puff-sleeve-dress-cream-black-floral',
    url: 'https://vayomeie.com/product/aline-ruched-puff-sleeve-dress-cream-black-floral',
    originalPrice: '₹2,799',
    salePrice: '₹2,199',
    images: [
      'https://vayomeie.com/assets/img/products/6a02cf7ce4162-dsc09369.jpg',
      'https://vayomeie.com/assets/img/products/VAY-IND-007/01.jpg',
      'https://vayomeie.com/assets/img/products/VAY-IND-007/02.jpg',
      'https://vayomeie.com/assets/img/products/6a02cf7d535e2-dsc09387.jpg',
    ],
  },
  {
    id: 10,
    name: 'Aline Ruched Puff-Sleeve Dress (Cream-Brown Floral)',
    slug: 'aline-ruched-puff-sleeve-dress-cream-brown-floral',
    url: 'https://vayomeie.com/product/aline-ruched-puff-sleeve-dress-cream-brown-floral',
    originalPrice: '₹2,798',
    salePrice: '₹2,199',
    images: [
      'https://vayomeie.com/assets/img/products/VAY-IND-008/02.jpg',
      'https://vayomeie.com/assets/img/products/VAY-IND-008/05.jpg',
      'https://vayomeie.com/assets/img/products/6a02c5d06c921-dsc09283.jpg',
      'https://vayomeie.com/assets/img/products/6a02c673326a5-dsc09300.jpg',
    ],
  },
  {
    id: 11,
    name: 'Aline Ruched Puff-Sleeve Dress (Green-Cream Floral)',
    slug: 'aline-ruched-puff-sleeve-dress-green-cream-floral',
    url: 'https://vayomeie.com/product/aline-ruched-puff-sleeve-dress-green-cream-floral',
    originalPrice: '₹2,798',
    salePrice: '₹2,199',
    images: [
      'https://vayomeie.com/assets/img/products/VAY-IND-009/01.jpg',
      'https://vayomeie.com/assets/img/products/VAY-IND-009/03.jpg',
      'https://vayomeie.com/assets/img/products/VAY-IND-009/04.jpg',
      'https://vayomeie.com/assets/img/products/VAY-IND-009/07.jpg',
    ],
  },
  {
    id: 12,
    name: 'V-Neck Front-Slit Aline Dress (Rich Maroon Pomegranate)',
    slug: 'v-neck-front-slit-aline-dress-rich-maroon-pomegranate',
    url: 'https://vayomeie.com/product/v-neck-front-slit-aline-dress-rich-maroon-pomegranate',
    originalPrice: '₹2,799',
    salePrice: '₹2,499',
    images: [
      'https://vayomeie.com/assets/img/products/VAY-IND-010/01.jpg',
      'https://vayomeie.com/assets/img/products/VAY-IND-010/02.jpg',
      'https://vayomeie.com/assets/img/products/VAY-IND-010/04.jpg',
      'https://vayomeie.com/assets/img/products/6a02c751c39ab-dsc09057.jpg',
    ],
  },
];

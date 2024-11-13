export interface Homepage {
  hero: Hero;
  advantages: Advantages;
  aboutus: Aboutus;
  pricelist: Pricelist;
  customers: Customers;
}

export interface Aboutus {
  title: string;
  description: string;
  cards: AboutusCard[];
}

export interface AboutusCard {
  subtitle: string;
  title: string;
  description: string;
}

export interface Advantages {
  title: string;
  descriptionList: string[];
  marqueeCarouseles: string[][];
}

export interface Customers {
  description: string;
  items: CustomersItem[];
}

export interface CustomersItem {
  url: string;
  image: string;
}

export interface Hero {
  title: string;
  description: string;
  images: string[];
}

export interface Pricelist {
  title: string;
  description: string;
  items: PricelistItem[];
}

export interface PricelistItem {
  title: string;
  priceFrom: number;
  time: string;
  description: string;
  isHighlighted: boolean;
}

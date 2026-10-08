export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  number: string;
  variant: "wide" | "tall" | "offset";
}
export interface Faq {
  id: string;
  question: string;
  answer: string;
}
export interface Step {
  id: string;
  title: string;
  text: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}

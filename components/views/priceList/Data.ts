
export interface SubService {
  id: number;
  title: string;
  price: number;
}

export interface ServiceItem {
  id: number;
  title: string;
  price: number;
  subServices: SubService[];
}

export interface ServiceCategory {
  id: number;
  title: string;
  icon: string;
  services: ServiceItem[];
}

import { Image1, Image2, Image3, Image4 } from "~/assets/image";

const generateSubServices = (serviceId: number): SubService[] =>
  Array.from({ length: 20 }, (_, i) => ({
    id: serviceId * 100 + (i + 1),
    title: `sub_services.item_${i + 1}`,
    price: 5000 + i * 2000,
  }));

const generateServices = (categoryId: number): ServiceItem[] =>
  Array.from({ length: 20 }, (_, i) => {
    const serviceId = categoryId * 1000 + (i + 1);
    return {
      id: serviceId,
      title: `services.service_${i + 1}`,
      price: 50000 + i * 5000,
      subServices: generateSubServices(serviceId),
    };
  });

const categoryNames = [
  "clinic_diag",
  "virology",
  "biochemistry",
  "bacteriology",
  "immunology",
  "genetics",
  "microbiology",
  "hematology",
  "parasitology",
  "toxicology",
  "pathology",
];

const icons = [Image1, Image2, Image3, Image4];

export const serviceCategories: ServiceCategory[] = Array.from(
  { length: 40 },
  (_, i) => ({
    id: i + 1,
    title: `categories.${categoryNames[i % categoryNames.length]}`,
    icon: icons[i % icons.length],
    services: generateServices(i + 1),
  })
);

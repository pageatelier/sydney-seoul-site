import type { Metadata } from "next";
import RestaurantPage from "./RestaurantPage";

export const metadata: Metadata = {
  title: "Sydney Seoul | Contemporary Dining in Cheongdam",
  description:
    "Sydney Seoul is a contemporary dining restaurant in Cheongdam, Seoul, bringing Australian ingredients and Korean sensibility to one table.",
  alternates: {
    canonical: "https://sydneyseoul.com/",
    languages: {
      en: "https://sydneyseoul.com/",
      ko: "https://sydneyseoul.com/ko",
      "x-default": "https://sydneyseoul.com/",
    },
  },
};

export default function Home() {
  return <RestaurantPage locale="en" />;
}

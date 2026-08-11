import type { Metadata } from "next";
import RestaurantPage from "../RestaurantPage";

export const metadata: Metadata = {
  title: "Sydney Seoul | 시드니서울 - 청담 컨템포러리 다이닝",
  description:
    "서울 청담동에 위치한 시드니서울. 호주와 한국의 식재료로 완성하는 컨템포러리 다이닝입니다.",
  alternates: {
    canonical: "https://sydneyseoul.com/ko",
    languages: {
      en: "https://sydneyseoul.com/",
      ko: "https://sydneyseoul.com/ko",
      "x-default": "https://sydneyseoul.com/",
    },
  },
};

export default function KoreanHome() {
  return <RestaurantPage locale="ko" />;
}

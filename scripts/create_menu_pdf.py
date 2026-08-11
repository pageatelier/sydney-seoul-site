#!/usr/bin/env python3
"""Build the bilingual Sydney Seoul menu PDF."""

from __future__ import annotations

import argparse
from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas


PAPER = HexColor("#EBE4DA")
CREAM = HexColor("#F5F0E8")
INK = HexColor("#241C18")
CLAY = HexColor("#806D60")
WHITE = HexColor("#FFFFFF")


LUNCH = [
    ("Welcome Drink", "웰컴 드링크"),
    ("Amuse-Bouche", "아뮤즈 부슈"),
    ("Australian Crayfish", "호주산 크레이피시"),
    ("Barramundi Fish & Chips", "바라문디 피시 앤 칩스"),
    ("Kangaroo Ravioli", "캥거루 라비올리"),
    ("Beetroot Palate Cleanser", "비트 팔레트 클렌저"),
    ("Tenderloin Meat Pie", "안심 미트파이"),
    ("Seasonal Ice Cream", "제철 아이스크림"),
    ("Baked Alaska", "베이크드 알래스카"),
    ("Chocolate Petits Fours", "초콜릿 쁘띠푸르"),
    ("T2 Tea or Dukes Coffee", "T2 티 또는 듀크스 커피"),
]


DINNER = [
    ("Welcome Drink", "웰컴 드링크"),
    ("Amuse-Bouche", "아뮤즈 부슈"),
    ("Australian Crayfish", "호주산 크레이피시"),
    ("Barramundi Fish & Chips", "바라문디 피시 앤 칩스"),
    ("Chicken Roulade", "치킨 룰라드"),
    ("Kangaroo Ravioli", "캥거루 라비올리"),
    ("Beetroot Palate Cleanser", "비트 팔레트 클렌저"),
    ("Tenderloin Meat Pie", "안심 미트파이"),
    ("Rack of Lamb Steak", "양갈비 스테이크"),
    ("Seasonal Ice Cream", "제철 아이스크림"),
    ("Baked Alaska", "베이크드 알래스카"),
    ("Chocolate Petits Fours", "초콜릿 쁘띠푸르"),
    ("T2 Tea or Dukes Coffee", "T2 티 또는 듀크스 커피"),
]


WINE = [
    ("House of Arras, Brut Elite NV", "하우스 오브 아라스, 브뤼 엘리트 NV"),
    ("Tyrrell's, Hunter Valley Semillon 2025", "티렐스, 헌터 밸리 세미용 2025"),
    ("Vasse Felix, Premier Chardonnay 2023", "바스 펠릭스, 프리미어 샤르도네 2023"),
    ("Nitschke, Julius Shiraz 2022", "니치케, 줄리어스 쉬라즈 2022"),
    ("De Bortoli, Noble One 2019", "드 보르톨리, 노블 원 2019"),
]


def cover_image(canvas: Canvas, path: Path, x: float, y: float, w: float, h: float) -> None:
    image = ImageReader(path)
    iw, ih = image.getSize()
    scale = max(w / iw, h / ih)
    dw, dh = iw * scale, ih * scale
    canvas.saveState()
    canvas.rect(x, y, w, h, stroke=0, fill=0)
    canvas.clipPath(canvas.beginPath())
    canvas.drawImage(image, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh, mask="auto")
    canvas.restoreState()


def draw_crop(canvas: Canvas, path: Path, x: float, y: float, w: float, h: float) -> None:
    image = ImageReader(path)
    iw, ih = image.getSize()
    scale = max(w / iw, h / ih)
    dw, dh = iw * scale, ih * scale
    canvas.saveState()
    crop = canvas.beginPath()
    crop.rect(x, y, w, h)
    canvas.clipPath(crop, stroke=0, fill=0)
    canvas.drawImage(image, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh, mask="auto")
    canvas.restoreState()


def page_label(canvas: Canvas, page_no: int, title: str) -> None:
    width, height = A4
    canvas.setFillColor(INK)
    canvas.setFont("NotoKR-Medium", 7)
    canvas.drawString(34, height - 32, "SYDNEY SEOUL")
    canvas.drawRightString(width - 34, height - 32, f"{page_no:02d} / {title.upper()}")
    canvas.setStrokeColor(HexColor("#B8B1A5"))
    canvas.setLineWidth(0.45)
    canvas.line(34, height - 43, width - 34, height - 43)


def draw_items_page(canvas: Canvas, title: str, items: list[tuple[str, str]], page_no: int, image_path: Path) -> None:
    width, height = A4
    canvas.setFillColor(CREAM)
    canvas.rect(0, 0, width, height, stroke=0, fill=1)
    page_label(canvas, page_no, title)

    canvas.setFillColor(INK)
    canvas.setFont("EditorialSerif", 42)
    canvas.drawString(34, height - 100, title)
    canvas.setFont("NotoKR-Regular", 8)
    canvas.drawRightString(width - 34, height - 96, "SEASONAL TASTING COURSE")

    image_w = 164
    draw_crop(canvas, image_path, width - image_w - 34, 76, image_w, 235)
    canvas.setFillColor(INK)
    canvas.setFont("NotoKR-Regular", 6.8)
    canvas.drawRightString(width - 34, 64, "SEASONAL MENU / CHEONGDAM, SEOUL")

    x_num = 34
    x_text = 68
    y = height - 145
    step = 44 if len(items) <= 11 else 37
    for index, (english, korean) in enumerate(items, 1):
        canvas.setFillColor(CLAY)
        canvas.setFont("NotoKR-Medium", 7)
        canvas.drawString(x_num, y, f"{index:02d}")
        canvas.setFillColor(INK)
        canvas.setFont("NotoKR-Medium", 9.2)
        canvas.drawString(x_text, y + 1, english)
        canvas.setFillColor(HexColor("#6E6A63"))
        canvas.setFont("NotoKR-Regular", 7.7)
        canvas.drawString(x_text, y - 13, korean)
        y -= step

    canvas.showPage()


def build_pdf(
    output: Path,
    font_regular: Path,
    font_medium: Path,
    font_serif: Path,
    image_root: Path,
) -> None:
    pdfmetrics.registerFont(TTFont("NotoKR-Regular", str(font_regular)))
    pdfmetrics.registerFont(TTFont("NotoKR-Medium", str(font_medium)))
    pdfmetrics.registerFont(TTFont("EditorialSerif", str(font_serif)))

    output.parent.mkdir(parents=True, exist_ok=True)
    canvas = Canvas(str(output), pagesize=A4, pageCompression=1)
    canvas.setTitle("Sydney Seoul - The Menu")
    canvas.setAuthor("Sydney Seoul")
    canvas.setSubject("Bilingual seasonal tasting menu")

    width, height = A4
    draw_crop(canvas, image_root / "brand-story.webp", 0, 0, width, height)
    canvas.saveState()
    canvas.setFillColor(INK)
    canvas.setFillAlpha(0.38)
    canvas.rect(0, 0, width, height, stroke=0, fill=1)
    canvas.restoreState()
    canvas.setFillColor(WHITE)
    canvas.setFont("NotoKR-Medium", 7)
    canvas.drawString(34, height - 34, "CONTEMPORARY DINING / CHEONGDAM, SEOUL")
    canvas.setFont("EditorialSerif", 62)
    canvas.drawString(34, 122, "The Menu")
    canvas.setFont("NotoKR-Medium", 10)
    canvas.drawString(36, 94, "SYDNEY SEOUL")
    canvas.setFont("NotoKR-Regular", 7.5)
    canvas.drawString(36, 70, "LUNCH / DINNER / WINE PAIRING")
    canvas.showPage()

    draw_items_page(canvas, "Lunch", LUNCH, 2, image_root / "food-amuse.webp")
    draw_items_page(canvas, "Dinner", DINNER, 3, image_root / "food-tenderloin.webp")

    canvas.setFillColor(PAPER)
    canvas.rect(0, 0, width, height, stroke=0, fill=1)
    page_label(canvas, 4, "Wine Pairing")
    canvas.setFillColor(INK)
    canvas.setFont("EditorialSerif", 42)
    canvas.drawString(34, height - 100, "Wine Pairing")
    canvas.setFont("NotoKR-Medium", 8)
    canvas.drawRightString(width - 34, height - 96, "5 GLASSES")

    y = height - 160
    for index, (english, korean) in enumerate(WINE, 1):
        canvas.setFillColor(CLAY)
        canvas.setFont("NotoKR-Medium", 7)
        canvas.drawString(34, y, f"{index:02d}")
        canvas.setFillColor(INK)
        canvas.setFont("NotoKR-Medium", 9.5)
        canvas.drawString(68, y + 1, english)
        canvas.setFillColor(HexColor("#6E6A63"))
        canvas.setFont("NotoKR-Regular", 7.8)
        canvas.drawString(68, y - 14, korean)
        y -= 56

    draw_crop(canvas, image_root / "food-dessert.webp", 34, 106, 220, 220)
    canvas.setFillColor(INK)
    canvas.setFont("NotoKR-Medium", 9)
    canvas.drawString(286, 280, "A NOTE FROM THE KITCHEN")
    canvas.setFont("NotoKR-Regular", 7.7)
    canvas.drawString(286, 254, "Menu items may vary depending on the season")
    canvas.drawString(286, 240, "and availability of ingredients.")
    canvas.drawString(286, 214, "메뉴 구성은 계절과 식재료 수급 상황에 따라")
    canvas.drawString(286, 200, "일부 변경될 수 있습니다.")
    canvas.setStrokeColor(HexColor("#B8B1A5"))
    canvas.line(286, 176, width - 34, 176)
    canvas.setFont("NotoKR-Regular", 7.4)
    canvas.drawString(286, 153, "2F, 18 Dosan-daero 58-gil, Gangnam-gu, Seoul")
    canvas.drawString(286, 138, "서울 강남구 도산대로58길 18, 2층")
    canvas.drawString(286, 123, "02 545 7772")
    canvas.showPage()

    canvas.save()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--font-regular", type=Path, required=True)
    parser.add_argument("--font-medium", type=Path, required=True)
    parser.add_argument("--font-serif", type=Path, required=True)
    parser.add_argument("--images", type=Path, required=True)
    args = parser.parse_args()
    build_pdf(args.output, args.font_regular, args.font_medium, args.font_serif, args.images)


if __name__ == "__main__":
    main()

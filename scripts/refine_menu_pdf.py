#!/usr/bin/env python3
"""Replace generic brand slogans in the existing menu PDF without reflowing it."""

from __future__ import annotations

import argparse
from io import BytesIO
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from pypdf.generic import DecodedStreamObject, NameObject
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen.canvas import Canvas


def overlay_for(page_index: int) -> PdfReader:
    buffer = BytesIO()
    canvas = Canvas(buffer, pagesize=A4)
    width, _ = A4

    if page_index == 0:
        canvas.setFillColor(HexColor("#241C18"))
        canvas.rect(0, 0, width, 88, stroke=0, fill=1)
        canvas.setFillColor(HexColor("#FFFFFF"))
        canvas.setFont("Helvetica", 7.5)
        canvas.drawString(36, 42, "LUNCH / DINNER / WINE PAIRING")
    elif page_index in (1, 2):
        canvas.setFillColor(HexColor("#F7F4ED"))
        canvas.rect(300, 52, width - 334, 25, stroke=0, fill=1)
        canvas.setFillColor(HexColor("#241C18"))
        canvas.setFont("Helvetica", 6.8)
        canvas.drawRightString(width - 34, 64, "SEASONAL MENU / CHEONGDAM, SEOUL")

    canvas.save()
    buffer.seek(0)
    return PdfReader(buffer)


def refine_pdf(source: Path, output: Path) -> None:
    reader = PdfReader(str(source))
    writer = PdfWriter()
    writer.clone_document_from_reader(reader)

    for index, page in enumerate(writer.pages):
        if index <= 2:
            content = page.get_contents().get_data()
            if index == 0:
                old_text = (
                    b"BT 1 0 0 1 36 70 Tm /F4+0 7.5 Tf 9 TL "
                    b"(SYDNEY'S FREEDOM. SEOUL'S SEASONS.) Tj T* ET"
                )
            else:
                old_text = (
                    b"BT 1 0 0 1 435.5028 64 Tm /F4+0 6.8 Tf 8.16 TL "
                    b"(SYDNEY PRODUCE / SEOUL SENSIBILITY) Tj T* ET"
                )
            content = content.replace(old_text, b"")
            stream = DecodedStreamObject()
            stream.set_data(content)
            page[NameObject("/Contents")] = stream
            page.merge_page(overlay_for(index).pages[0], over=True)

    output.parent.mkdir(parents=True, exist_ok=True)
    with output.open("wb") as stream:
        writer.write(stream)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    refine_pdf(args.source, args.output)


if __name__ == "__main__":
    main()

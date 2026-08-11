import Link from "next/link";
import Interactions from "./Interactions";

const koreanReserve = "https://app.catchtable.co.kr/ct/shop/ahknPViXvZ72eNRDs1IQ6Q";
const internationalReserve = "https://www.catchtable.net/explore/shop/sydneyseoul";

type Locale = "en" | "ko";

const copy = {
  en: {
    lang: "en",
    otherLang: "KR",
    otherHref: "/ko",
    nav: ["Story", "Feature", "Menu", "Chef", "Farm"],
    navIds: ["story", "dining", "menu", "chef", "farm"],
    reserve: "Reserve",
    primaryReserve: internationalReserve,
    heroKicker: "",
    location: "Cheongdam, Seoul",
    discover: "Explore",
    storyEyebrow: "Sydney Seoul · Cheongdam",
    storyTitle: <>From Sydney,<br />at home in Seoul.</>,
    storyBody:
      "Owner-chef Minhoo Kim trained at Le Cordon Bleu Australia and developed his point of view through Sydney's food culture. At Sydney Seoul in Cheongdam, Australian ingredients meet Korean seasons in a tasting menu that changes throughout the year.",
    storyCaption: "Seasonal tasting menu",
    diningEyebrow: "Press",
    diningTitle: <>Where Australian<br />energy meets Seoul.</>,
    diningBody:
      "Bar & Dining's August 2026 issue visits Sydney Seoul to speak with Minhoo Kim about his years in Australia, the restaurant's own garden and ingredients including kangaroo and barramundi.",
    diningIssue: "Bar & Dining · August 2026",
    diningCta: "Open magazine spread",
    diningAlt: "Sydney Seoul feature in the August 2026 issue of Bar & Dining magazine",
    menuEyebrow: "Current tasting menu",
    menuTitle: "The Menu",
    menuBody:
      "Lunch and dinner follow separate seasonal courses, with Australian crayfish, barramundi fish & chips, kangaroo ravioli and tenderloin meat pie. View the full courses and wine pairing in the PDF.",
    viewMenu: "View menu",
    pdfNote: "PDF · EN / KR",
    dishes: ["Amuse-Bouche", "Tenderloin Meat Pie", "The Dessert"],
    chefEyebrow: "The Chef",
    chefRole: "Owner-Chef",
    chefBody:
      "Minhoo Kim trained at Le Cordon Bleu Australia. Sydney's relaxed dining culture and access to diverse produce continue to shape his cooking in Seoul. His menu places Australian ingredients within the rhythm of Korea's seasons.",
    farmEyebrow: "Farm to table",
    farmTitle: <>From our garden<br />to the kitchen.</>,
    farmBody:
      "We grow seasonal vegetables in our own garden and pair them with Australian beef, kangaroo and barramundi. What is ready to harvest helps decide the menu in the kitchen.",
    farmCaptions: ["From our garden", "Harvested by hand", "On the table"],
    reservationEyebrow: "Reservation",
    reservationTitle: <>Sydney Seoul,<br />Cheongdam.</>,
    reservationBody: "Lunch and dinner, Wednesday through Sunday. Reservations are available through Catchtable.",
    reserveTable: "Reserve a table",
    koreanGuests: "Korean guests",
    internationalGuests: "International guests",
    hoursLabel: "Opening hours",
    hours: "12:00-22:00 / Closed Mon & Tue",
    addressLabel: "Address",
    address: "2F, 18 Dosan-daero 58-gil, Gangnam-gu, Seoul",
    contactLabel: "Contact",
  },
  ko: {
    lang: "ko",
    otherLang: "EN",
    otherHref: "/",
    nav: ["Story", "Feature", "Menu", "Chef", "Farm"],
    navIds: ["story", "dining", "menu", "chef", "farm"],
    reserve: "Reserve",
    primaryReserve: koreanReserve,
    heroKicker: "",
    location: "서울, 청담",
    discover: "둘러보기",
    storyEyebrow: "Sydney Seoul · Cheongdam",
    storyTitle: <>시드니에서 배운 감각을,<br />서울의 계절로.</>,
    storyBody:
      "김민후 오너 셰프는 호주 르 코르동 블루에서 요리를 배우고 시드니의 미식 문화를 경험했습니다. 청담의 시드니서울에서는 호주의 식재료와 한국의 제철 재료를 한 테이스팅 메뉴 안에서 선보입니다.",
    storyCaption: "Seasonal tasting menu",
    diningEyebrow: "Press",
    diningTitle: <>호주의 에너지,<br />서울에서 융합되다.</>,
    diningBody:
      "Bar & Dining 2026년 8월호에서 김민후 셰프의 호주 생활, 직접 가꾸는 텃밭, 캥거루와 바라문디 등 시드니서울의 재료 이야기를 소개했습니다.",
    diningIssue: "Bar & Dining · 2026년 8월호",
    diningCta: "잡지 지면 보기",
    diningAlt: "Bar & Dining 2026년 8월호(Vol. 271)에 소개된 시드니서울 기사 지면",
    menuEyebrow: "Current tasting menu",
    menuTitle: "The Menu",
    menuBody:
      "런치와 디너는 각각의 시즌 코스로 운영합니다. 호주산 크레이피시, 바라문디 피시 앤 칩스, 캥거루 라비올리, 안심 미트파이와 와인 페어링은 PDF 메뉴에서 확인할 수 있습니다.",
    viewMenu: "메뉴 보기",
    pdfNote: "PDF · EN / KR",
    dishes: ["Amuse-Bouche", "Tenderloin Meat Pie", "The Dessert"],
    chefEyebrow: "The Chef",
    chefRole: "Owner-Chef",
    chefBody:
      "김민후 셰프는 호주 르 코르동 블루에서 요리를 배웠습니다. 시드니의 편안한 다이닝 문화와 다양한 식재료에 대한 경험이 지금도 서울에서 이어지고 있습니다. 호주 식재료를 한국의 계절 안에서 한 코스로 풀어냅니다.",
    farmEyebrow: "Farm to table",
    farmTitle: <>직접 기른 채소를<br />주방으로.</>,
    farmBody:
      "직접 가꾼 텃밭에서 제철 채소를 수확하고 호주산 소고기, 캥거루, 바라문디와 함께 사용합니다. 계절마다 수확한 재료로 시즌별 메뉴의 방향을 정합니다.",
    farmCaptions: ["From our garden", "Harvested by hand", "On the table"],
    reservationEyebrow: "Reservation",
    reservationTitle: <>시드니서울,<br />청담.</>,
    reservationBody: "수요일부터 일요일까지 점심과 저녁에 운영합니다. 예약은 캐치테이블에서 가능합니다.",
    reserveTable: "테이블 예약하기",
    koreanGuests: "국내 고객 예약",
    internationalGuests: "해외 고객 예약",
    hoursLabel: "운영시간",
    hours: "12:00-22:00 / 매주 월·화 휴무",
    addressLabel: "주소",
    address: "서울특별시 강남구 도산대로58길 18, 2층",
    contactLabel: "문의",
  },
} as const;

export default function RestaurantPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Sydney Seoul",
    image: "https://sydneyseoul.com/images/og-share.webp",
    telephone: "+82-2-545-7772",
    address: {
      "@type": "PostalAddress",
      streetAddress: locale === "ko" ? "도산대로58길 18, 2층" : "2F, 18 Dosan-daero 58-gil",
      addressLocality: "Gangnam-gu",
      addressRegion: "Seoul",
      addressCountry: "KR",
    },
    servesCuisine: "Contemporary",
    priceRange: "$$$",
    openingHours: "We-Su 12:00-22:00",
    url: locale === "ko" ? "https://sydneyseoul.com/ko" : "https://sydneyseoul.com/",
  };

  return (
    <main lang={t.lang}>
      <Interactions />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="site-header" data-theme="dark">
        <a className="mobile-reserve-link" href={t.primaryReserve} target="_blank" rel="noreferrer">
          {t.reserve}
        </a>
        <nav aria-label="Primary navigation">
          {t.nav.map((label, index) => (
            <a key={label} href={`#${t.navIds[index]}`}>{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <Link href={t.otherHref} lang={locale === "en" ? "ko" : "en"} className="language-link">
            {t.otherLang}
          </Link>
          <a className="reserve-link" href={t.primaryReserve} target="_blank" rel="noreferrer">
            {t.reserve}
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open menu"><span /><span /></summary>
            <div className="mobile-menu-panel">
              {t.nav.map((label, index) => (
                <a key={label} href={`#${t.navIds[index]}`}>{label}</a>
              ))}
              <a href="#reservation">{t.reserve}</a>
            </div>
          </details>
        </div>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title" data-header-theme="dark">
        <div className="hero-slideshow" aria-hidden="true" data-parallax data-speed="0.025">
          {[1, 2, 3].map((image, index) => (
            <picture
              className="hero-slide"
              key={image}
            >
              <source media="(max-width: 800px)" srcSet={`/images/hero-mobile-${image}.webp`} />
              <img
                className="hero-image"
                src={`/images/hero-pc-${image}.webp`}
                alt=""
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            </picture>
          ))}
        </div>
        <div className="hero-shade" />
        <div className="hero-kicker"><span>{t.heroKicker}</span><span>{t.location}</span></div>
        <h1 id="hero-title" className="hero-title"><span>Sydney</span><span>Seoul</span></h1>
        <a className="scroll-cue" href="#story">{t.discover}<span aria-hidden="true">↓</span></a>
      </section>

      <section className="story" id="story" aria-labelledby="story-title" data-header-theme="light">
        <div className="story-copy" data-reveal>
          <p className="eyebrow">{t.storyEyebrow}</p>
          <h2 id="story-title" className={locale === "ko" ? "ko-title" : undefined}>{t.storyTitle}</h2>
          <p className="body-copy">{t.storyBody}</p>
        </div>
        <figure className="story-visual" data-reveal>
          <div className="media-frame"><img src="/images/brand-story.webp" alt="Sydney Seoul's seasonal tasting menu" loading="lazy" /></div>
          <figcaption><span>{t.storyCaption}</span></figcaption>
        </figure>
      </section>

      <section className="dining" id="dining" aria-labelledby="dining-title" data-header-theme="light">
        <div className="press-copy" data-reveal>
          <p className="eyebrow">{t.diningEyebrow}</p>
          <h2 id="dining-title" className={locale === "ko" ? "ko-title" : undefined}>{t.diningTitle}</h2>
          <p>{t.diningBody}</p>
          <div className="press-meta">
            <span>{t.diningIssue}</span>
            <a href="/images/bar-and-dining-june-2026.jpg" target="_blank" rel="noreferrer">
              <span>{t.diningCta}</span><span aria-hidden="true">&#8599;&#65038;</span>
            </a>
          </div>
        </div>
        <a
          className="press-spread"
          href="/images/bar-and-dining-june-2026.jpg"
          target="_blank"
          rel="noreferrer"
          aria-label={t.diningCta}
          data-reveal
        >
          <img src="/images/bar-and-dining-june-2026.jpg" alt={t.diningAlt} loading="lazy" />
          <span className="press-zoom" aria-hidden="true">{t.diningCta}&#8599;&#65038;</span>
        </a>
      </section>

      <section className="menu-section" id="menu" aria-labelledby="menu-title" data-header-theme="dark">
        <div className="menu-intro" data-reveal>
          <p className="eyebrow">{t.menuEyebrow}</p>
          <h2 id="menu-title">{t.menuTitle}</h2>
          <p>{t.menuBody}</p>
          <a className="text-button" href="/sydney-seoul-menu.pdf" target="_blank" rel="noreferrer" type="application/pdf">
            <span>{t.viewMenu}</span><span aria-hidden="true">&#8599;&#65038;</span>
          </a>
          <small>{t.pdfNote}</small>
        </div>
        <div className="dish-gallery">
          {["food-amuse.webp", "food-tenderloin.webp", "food-dessert.webp"].map((image, index) => (
            <figure className="dish-card" key={image} data-reveal>
              <div className="media-frame"><img src={`/images/${image}`} alt={t.dishes[index]} loading="lazy" /></div>
              <figcaption><span>{t.dishes[index]}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="chef" id="chef" aria-labelledby="chef-title" data-header-theme="light">
        <figure className="chef-portrait" data-reveal>
          <div className="media-frame"><img src="/images/chef-portrait-old.webp" alt="Owner-Chef Minhoo Kim in the Sydney Seoul kitchen" loading="lazy" /></div>
        </figure>
        <div className="chef-copy" data-reveal>
          <p className="eyebrow">{t.chefEyebrow}</p>
          <h2 id="chef-title">Minhoo Kim</h2>
          <p className="chef-role">{t.chefRole}</p>
          <p>{t.chefBody}</p>
        </div>
      </section>

      <section className="farm" id="farm" aria-labelledby="farm-title" data-header-theme="dark">
        <div className="farm-copy" data-reveal>
          <p className="eyebrow">{t.farmEyebrow}</p>
          <h2 id="farm-title" className={locale === "ko" ? "ko-title" : undefined}>{t.farmTitle}</h2>
          <p>{t.farmBody}</p>
        </div>
        <div className="farm-gallery">
          {["philosophy-garden.webp", "philosophy-harvest.webp", "philosophy-table.webp"].map((image, index) => (
            <figure className={`farm-card farm-card-${index + 1}`} key={image} data-reveal>
              <div className="media-frame"><img src={`/images/${image}`} alt={t.farmCaptions[index]} loading="lazy" /></div>
              <figcaption><span>{t.farmCaptions[index]}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="reservation" id="reservation" aria-labelledby="reservation-title" data-header-theme="dark">
        <img className="reservation-image" src="/images/private-room.webp" alt="Sydney Seoul private dining room" loading="lazy" data-parallax data-speed="0.02" />
        <div className="reservation-shade" />
        <div className="reservation-inner" data-reveal>
          <p className="eyebrow">{t.reservationEyebrow}</p>
          <h2 id="reservation-title" className={locale === "ko" ? "ko-title" : undefined}>{t.reservationTitle}</h2>
          <p className="reservation-lead">{t.reservationBody}</p>
          <a className="reservation-cta" href={t.primaryReserve} target="_blank" rel="noreferrer">
            <span>{t.reserveTable}</span><span aria-hidden="true">&#8599;&#65038;</span>
          </a>
        </div>
        <div className="visit-info">
          <div><span>{t.hoursLabel}</span><strong>{t.hours}</strong></div>
          <div><span>{t.addressLabel}</span><strong>{t.address}</strong></div>
          <div><span>{t.contactLabel}</span><strong><a href="tel:025457772">02 545 7772</a></strong></div>
        </div>
        <footer className="site-footer">
          <span>© Sydney Seoul</span>
          <div>
            <a href={koreanReserve} target="_blank" rel="noreferrer">{t.koreanGuests}</a>
            <a href={internationalReserve} target="_blank" rel="noreferrer">{t.internationalGuests}</a>
            <a href="https://www.instagram.com/sydney_seoul_official" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </footer>
      </section>
    </main>
  );
}

import { Fragment, useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Minus,
  Plus,
  ShoppingBag,
  X,
} from "lucide-react";
import { Skeleton } from "./components/ui/skeleton";
import "./App.css";

const products = [
  {
    id: "karanji",
    name: { mr: "करंजी", en: "Karanji" },
    description: {
      mr: "खोबऱ्याच्या सारणाने भरलेली, पिठाची खुसखुशीत आणि सोनेरी करंजी.",
      en: "Crisp, golden crescents with a rich coconut filling.",
    },
    price: 224,
    category: "sweet",
    image: "/assets/Karanji.jpg",
    emoji: "🥟",
    color: "rose",
    tag: { mr: "लोकप्रिय", en: "Bestseller" },
  },
  {
    id: "shankarpali",
    name: { mr: "शंकरपाळी", en: "Shankarpali" },
    description: {
      mr: "थोडी गोड, खुसखुशीत आणि आठवणींनी भरलेली.",
      en: "A little sweet, a little crunchy, always nostalgic.",
    },
    price: 144,
    category: "sweet",
    image: "/assets/Shankarpali.jpg",
    emoji: "🍪",
    color: "honey",
  },
  {
    id: "chakli",
    name: { mr: "चकली", en: "Chakli" },
    description: {
      mr: "हाताने पिळलेली, खमंग आणि कुरकुरीत चकली.",
      en: "Hand-twisted spirals with a delicious savoury crunch.",
    },
    price: 176,
    category: "savoury",
    image: "/assets/chakali.jpg",
    emoji: "🌀",
    color: "sage",
    tag: { mr: "घराघरात आवडती", en: "Family favourite" },
  },
  {
    id: "ladoo",
    name: { mr: "रवा-बेसन लाडू", en: "Rava Besan Ladoo" },
    description: {
      mr: "रवा आणि बेसनाचे, शुद्ध तुपातले खमंग लाडू.",
      en: "Rich, comforting semolina and besan ladoos made with pure ghee.",
    },
    price: 256,
    category: "sweet",
    image: "/assets/Rava-Besan-Ladoo.jpg",
    emoji: "🟠",
    color: "peach",
  },
  {
    id: "anarse",
    name: { mr: "अनारसे", en: "Anarse" },
    description: {
      mr: "तीळ लावलेले, सणाची आठवण करून देणारे पारंपरिक अनारसे.",
      en: "A festive Maharashtrian classic with a sesame finish.",
    },
    price: 240,
    category: "sweet",
    image: "/assets/Aanarase.jpg",
    emoji: "🌕",
    color: "lavender",
  },
  {
    id: "chivda",
    name: { mr: "पोहे चिवडा", en: "Poha Chivda" },
    description: {
      mr: "शेंगदाणे आणि मसाल्यांसह हलका, खमंग चिवडा.",
      en: "Light, savoury flakes tossed with nuts and spices.",
    },
    price: 160,
    category: "savoury",
    image: "/assets/poha-chivada.jpg",
    emoji: "🥜",
    color: "mint",
    tag: { mr: "चहासोबत छान", en: "Tea-time pick" },
  },
];

const reviews = [
  {
    name: { mr: "मंगला ताई", en: "Mangala Tai" },
    image: "/assets/customer-review.jpg",
    quote:
      "यंदाच्या दिवाळीसाठी फराळाची तयारी सुरू! घरगुती चवीचा हा फराळ सगळ्यांना नक्की आवडेल.",
    translation:
      "Getting our faral ready for Diwali! Everyone will love this homemade taste.",
  },
  {
    name: { mr: "सोनाली", en: "Sonali" },
    image: "/assets/customer-review-2.jpg",
    quote:
      "फराळाची ऑर्डर वेळेत मिळाली; प्रत्येक पदार्थ ताजा आणि खमंग आहे. दिवाळीची तयारी झाली!",
    translation:
      "Our faral arrived right on time, fresh and flavourful. Diwali prep is sorted!",
  },
  {
    name: { mr: "भक्ती", en: "Bhakti" },
    image: "/assets/customer-review-3.jpg",
    quote: "दिवाळीच्या पाहुणचारासाठी सुंदर फराळ! चकली आणि करंजी खास आवडली.",
    translation:
      "A lovely faral spread for Diwali guests! The chakli and karanji are a favourite.",
  },
];

const heroSlides = [
  {
    image: "/assets/faral-hero-main.jpg",
    alt: {
      mr: "घरगुती मिठाई आणि चटकदार पदार्थांची दिवाळी फराळाची थाळी",
      en: "A festive platter of homemade sweets and savoury faral",
    },
  },
  {
    image: "/assets/faral-hero-3.jpg",
    alt: {
      mr: "केळीच्या पानावर सजवलेला घरगुती दिवाळी फराळ",
      en: "Homemade Diwali faral served on a fresh banana leaf",
    },
  },
];

const copy = {
  mr: {
    brand: "मुन्नी आणि सोनाली",
    brandFull: "मुन्नी आणि सोनालींचा दिवाळी फराळ",
    announcement: "वर ऑर्डर उपलब्ध",
    collectionNav: "फराळाची मेजवानी",
    storyNav: "आमची गोष्ट",
    bag: "पिशवी",
    openBag: "पिशवी उघडा",
    kicker: "मुन्नी आणि सोनालींचा घरगुती फराळ",
    heroLineOne: "दिवाळीचा आनंद,",
    heroLineTwo: "हातांनी बनवलेला.",
    heroDescription:
      "घरच्या खास पाककृतींमधून, प्रेमाने आणि ताज्या साहित्याने बनवलेला फराळ - आपल्या सणाच्या आनंदासाठी.",
    shopNow: "फराळ पाहा",
    lovedByAll: "प्रेमाने बनवलेला, सगळ्यांसोबत वाटलेला",
    heroImageAlt: "घरगुती मिठाई आणि चटकदार पदार्थांची दिवाळी फराळाची थाळी",
    heroImageLabel: "दिवाळीची खास मेजवानी",
    promises: [
      "ताजा बनवलेला, घरगुती चवीचा",
      "जपून ठेवलेल्या पारंपरिक पाककृती",
      "आप्तांसोबत वाटून खाण्यासाठी",
    ],
    collectionEyebrow: "आनंदाची फराळाची पेटी",
    collectionTitle: "तुमचे आवडते",
    collectionEmphasis: "दिवाळीचे पदार्थ.",
    collectionNote: "सगळ्यांना एकत्र आणणारे सहा खास स्वाद.",
    filtersLabel: "पदार्थ निवडा",
    filters: {
      all: "सर्व पदार्थ",
      sweet: "गोड पदार्थ",
      savoury: "तिखट पदार्थ",
    },
    fresh: "ऑर्डरनंतर ताजा बनवलेला",
    category: { sweet: "गोड", savoury: "तिखट" },
    add: "जोडा",
    addToBag: "पिशवीत जोडा",
    weight: "२५० ग्रॅम",
    reviewsEyebrow: "दिवाळीच्या तयारीतले गोड अनुभव",
    reviewsTitle: "सणासाठी तयार",
    reviewsEmphasis: "घरगुती फराळ.",
    starsLabel: "५ पैकी ५ तारे",
    reviewLabel: "ग्राहकांचा अनुभव",
    closingEyebrow: "दिवाळीची खरी मजा",
    closingTitle: "आणखी एक",
    closingEmphasis: "घास घेण्यात!",
    chooseFavourites: "तुमचे आवडते पदार्थ निवडा",
    footerLine: "प्रेमाने बनवलेला, आनंदाने वाटलेला.",
    footerBrand: "मुन्नी आणि सोनालींचा दिवाळी फराळ",
    cartEyebrow: "तुमची आवडती निवड",
    cartTitle: "तुमची पिशवी",
    closeBag: "पिशवी बंद करा",
    emptyCart: "तुमच्या पिशवीत अजून काहीच नाही.",
    removeOne: "एक कमी करा",
    addOne: "एक वाढवा",
    subtotal: "एकूण",
    checkout: "ऑर्डर लवकरच सुरू होईल",
    orderOnWhatsApp: "वर ऑर्डर करा",
    cartNote: "प्रेमाने बनवलेला, घरगुती फराळ.",
    siteName: "मुन्नी आणि सोनालींचा दिवाळी फराळ",
    language: "भाषा निवडा",
    marathi: "मराठी",
    english: "English",
  },
  en: {
    brand: "Munni & Sonali",
    brandFull: "Munni & Sonali’s Festive Faral",
    announcement: "ordering is available",
    collectionNav: "The collection",
    storyNav: "Our story",
    bag: "Your bag",
    openBag: "Open your bag",
    kicker: "Homemade with Munni & Sonali",
    heroLineOne: "Diwali joy,",
    heroLineTwo: "made by hand.",
    heroDescription:
      "Family recipes, lovingly made fresh to bring a little more joy to your celebrations.",
    shopNow: "Shop the faral",
    lovedByAll: "Made with love, shared with everyone",
    heroImageAlt: "A festive platter of homemade sweets and savoury faral",
    heroImageLabel: "The Diwali collection",
    promises: [
      "Freshly made, homemade taste",
      "Traditional recipes, lovingly kept",
      "Made for sharing with your loved ones",
    ],
    collectionEyebrow: "A box full of happiness",
    collectionTitle: "Meet your",
    collectionEmphasis: "festive favourites.",
    collectionNote: "Six special flavours to bring everyone together.",
    filtersLabel: "Filter products",
    filters: { all: "All faral", sweet: "Sweets", savoury: "Savoury" },
    fresh: "Freshly prepared to order",
    category: { sweet: "Sweet", savoury: "Savoury" },
    add: "Add",
    addToBag: "Add to bag",
    weight: "250g",
    reviewsEyebrow: "Kind words, shared with love",
    reviewsTitle: "A little love",
    reviewsEmphasis: "for our faral.",
    starsLabel: "5 out of 5 stars",
    reviewLabel: "Customer review",
    closingEyebrow: "The best part of Diwali",
    closingTitle: "Is having",
    closingEmphasis: "one more.",
    chooseFavourites: "Go on, pick your favourites",
    footerLine: "Made with warmth, shared with love.",
    footerBrand: "Munni & Sonali’s Festive Faral",
    cartEyebrow: "Your festive picks",
    cartTitle: "Your bag",
    closeBag: "Close bag",
    emptyCart: "Your bag is waiting for something lovely.",
    removeOne: "Remove one",
    addOne: "Add one",
    subtotal: "Subtotal",
    checkout: "Ordering coming soon",
    orderOnWhatsApp: "Order now",
    cartNote: "Small-batch goodness, made with care.",
    siteName: "Munni & Sonali’s Festive Faral",
    language: "Choose language",
    marathi: "मराठी",
    english: "English",
  },
};

function ProductImage({ product, alt, className, loading = "lazy" }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <>
      {!imageLoaded && !imageFailed && <Skeleton className="image-skeleton" />}
      {imageFailed ? (
        <span className="product-emoji" aria-hidden="true">
          {product.emoji}
        </span>
      ) : (
        <img
          src={product.image}
          alt={alt}
          loading={loading}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageFailed(true)}
          className={`${className}${imageLoaded ? " image-loaded" : ""}`}
        />
      )}
    </>
  );
}

function ProductCard({ product, quantity, onAdd, language, text }) {
  const name = product.name[language];

  return (
    <article className="product-card group">
      <div className={`product-visual product-visual--${product.color}`}>
        <ProductImage product={product} alt={name} className="product-photo" />
        {product.tag && (
          <span className="product-tag">{product.tag[language]}</span>
        )}
        <button
          type="button"
          className={`quick-add ${quantity > 0 ? "quick-add--added" : ""}`}
          onClick={() => onAdd(product)}
          aria-label={`${text.addToBag}: ${name}`}
        >
          {quantity > 0 ? <Check size={17} /> : <Plus size={18} />}
          <span>{quantity > 0 ? quantity : text.add}</span>
        </button>
      </div>
      <div className="product-info">
        <div>
          <p className="product-category">{text.category[product.category]}</p>
          <h3>{name}</h3>
          <p className="product-description">{product.description[language]}</p>
        </div>
        <p className="product-price">
          ₹{product.price}
          <span> / {text.weight}</span>
        </p>
      </div>
    </article>
  );
}

function ProductGrid({ activeFilter, cart, onAdd, language, text }) {
  const visibleProducts = products.filter(
    (product) => activeFilter === "all" || product.category === activeFilter,
  );

  return (
    <div className="product-grid">
      {visibleProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          quantity={cart[product.id] ?? 0}
          onAdd={onAdd}
          language={language}
          text={text}
        />
      ))}
    </div>
  );
}

function CustomerReviews({ language, text }) {
  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <div className="reviews-heading">
        <p className="eyebrow">{text.reviewsEyebrow}</p>
        <h2 id="reviews-title">
          {text.reviewsTitle} <em>{text.reviewsEmphasis}</em>
        </h2>
      </div>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.image}>
            <img
              className="review-photo"
              src={review.image}
              alt={`${review.name[language]} enjoying Diwali faral`}
              loading="lazy"
            />
            <div className="review-copy">
              <span className="review-stars" aria-label={text.starsLabel}>
                ★★★★★
              </span>
              <p className="review-quote">
                “{language === "mr" ? review.quote : review.translation}”
              </p>
              <p className="review-name">{review.name[language]}</p>
              <p className="review-label">{text.reviewLabel}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CartSheet({ cart, onClose, onChangeQuantity, language, text }) {
  const cartItems = products.filter((product) => cart[product.id] > 0);
  const total = cartItems.reduce(
    (sum, product) => sum + product.price * cart[product.id],
    0,
  );
  const orderLines = cartItems.map(
    (product) =>
      `• ${product.name[language]} × ${cart[product.id]} (${text.weight}) — ₹${product.price * cart[product.id]}`,
  );
  const whatsappMessage = [
    language === "mr"
      ? "नमस्कार! मला हा फराळ ऑर्डर करायचा आहे:"
      : "Hello! I’d like to order:",
    "",
    ...orderLines,
    "",
    `${text.subtotal}: ₹${total}`,
  ].join("\n");
  const whatsappUrl = `https://wa.me/919356771945?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="sheet-backdrop" onMouseDown={onClose}>
      <aside
        className="cart-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="cart-heading">
          <div>
            <p className="eyebrow">{text.cartEyebrow}</p>
            <h2 id="cart-title">{text.cartTitle}</h2>
          </div>
          <button
            className="icon-button"
            type="button"
            onClick={onClose}
            aria-label={text.closeBag}
          >
            <X size={20} />
          </button>
        </div>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <span aria-hidden="true">🪔</span>
            <p>{text.emptyCart}</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((product) => (
                <div className="cart-item" key={product.id}>
                  <div
                    className={`cart-product-image product-visual--${product.color}`}
                  >
                    <ProductImage
                      product={product}
                      alt={product.name[language]}
                      className="cart-product-photo"
                    />
                  </div>
                  <div className="cart-item-details">
                    <h3>{product.name[language]}</h3>
                    <p>
                      ₹{product.price} · {text.weight}
                    </p>
                    <div className="quantity-control">
                      <button
                        type="button"
                        aria-label={`${text.removeOne} ${product.name[language]}`}
                        onClick={() => onChangeQuantity(product.id, -1)}
                      >
                        <Minus size={13} />
                      </button>
                      <span>{cart[product.id]}</span>
                      <button
                        type="button"
                        aria-label={`${text.addOne} ${product.name[language]}`}
                        onClick={() => onChangeQuantity(product.id, 1)}
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>
                  <strong>₹{product.price * cart[product.id]}</strong>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <span>{text.subtotal}</span>
              <strong>₹{total}</strong>
            </div>
            <button type="button" className="checkout-button" disabled>
              {text.checkout}
              <ArrowRight size={17} />
            </button>
            <a
              className="whatsapp-order-button"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="whatsapp-wordmark"
                src="/assets/whatsapp-icon.svg"
                alt="WhatsApp"
              />
              <span>{text.orderOnWhatsApp}</span>
            </a>
            <p className="cart-note">{text.cartNote}</p>
          </>
        )}
      </aside>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState("mr");
  const [activeFilter, setActiveFilter] = useState("all");
  const [cart, setCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const text = copy[language];
  const itemCount = useMemo(
    () => Object.values(cart).reduce((sum, quantity) => sum + quantity, 0),
    [cart],
  );

  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "mr"
        ? "मुन्नी आणि सोनालींचा दिवाळी फराळ | Munni & Sonali’s Festive Faral"
        : "Munni & Sonali’s Festive Faral | MS Festive Faral";
  }, [language]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveHeroSlide(
        (currentSlide) => (currentSlide + 1) % heroSlides.length,
      );
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  function addToCart(product) {
    setCart((currentCart) => ({
      ...currentCart,
      [product.id]: (currentCart[product.id] ?? 0) + 1,
    }));
  }

  function changeQuantity(productId, amount) {
    setCart((currentCart) => {
      const nextQuantity = (currentCart[productId] ?? 0) + amount;
      const nextCart = { ...currentCart };
      if (nextQuantity <= 0) {
        delete nextCart[productId];
      } else {
        nextCart[productId] = nextQuantity;
      }
      return nextCart;
    });
  }

  return (
    <main>
      <div className="announcement">
        <img
          className="announcement-whatsapp"
          src="/assets/whatsapp-icon.svg"
          alt="WhatsApp"
        />
        <span className="pt-1">{text.announcement}</span>
      </div>
      <header className="site-header">
        <a className="brand" href="#" aria-label={text.brandFull}>
          <img
            className="brand-logo"
            src="/assets/ms-faral.png"
            alt=""
            aria-hidden="true"
          />
          <span className="brand-copy">
            <span className="brand-short">{text.brand}</span>
            <span className="brand-full">{text.brandFull}</span>
          </span>
        </a>
        <nav className="main-nav" aria-label={text.siteName}>
          <a href="#collection">{text.collectionNav}</a>
          <a href="#our-story">{text.storyNav}</a>
        </nav>
        <div className="header-actions">
          <div
            className="language-toggle"
            role="group"
            aria-label={text.language}
          >
            <button
              type="button"
              className={language === "mr" ? "language-active" : ""}
              aria-pressed={language === "mr"}
              onClick={() => setLanguage("mr")}
            >
              मराठी
            </button>
            <span aria-hidden="true">|</span>
            <button
              type="button"
              className={language === "en" ? "language-active" : ""}
              aria-pressed={language === "en"}
              onClick={() => setLanguage("en")}
            >
              English
            </button>
          </div>
          <button
            type="button"
            className="bag-button"
            onClick={() => setCartOpen(true)}
            aria-label={`${text.openBag}${itemCount > 0 ? `, ${itemCount}` : ""}`}
          >
            <ShoppingBag size={18} strokeWidth={1.8} />
            <span className="bag-label">{text.bag}</span>
            {itemCount > 0 && <span className="bag-count">{itemCount}</span>}
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="hero-kicker">
            <span className="kicker-line" />
            {text.kicker}
          </p>
          <h1>
            {text.heroLineOne}
            <br />
            <em>{text.heroLineTwo}</em>
          </h1>
          <p className="hero-description">{text.heroDescription}</p>
          <a className="hero-cta" href="#collection">
            {text.shopNow} <ArrowDown size={16} />
          </a>
          <div className="hero-footnote">
            <span className="footnote-stars" aria-label={text.starsLabel}>
              ★★★★★
            </span>
            <span>{text.lovedByAll}</span>
          </div>
        </div>
        <div className="hero-art" aria-label={text.heroImageLabel}>
          <div className="hero-orbit hero-orbit--one" />
          <div className="hero-orbit hero-orbit--two" />
          <div className="hero-sun" />
          <span className="hero-diya hero-diya--left" aria-hidden="true">
            🪔
          </span>
          <span className="hero-diya hero-diya--right" aria-hidden="true">
            🪔
          </span>
          <span className="hero-flower" aria-hidden="true">
            ✳
          </span>
          {heroSlides.map((slide, index) => (
            <img
              key={slide.image}
              className={`hero-photo ${index === activeHeroSlide ? "hero-photo--active" : ""}`}
              src={slide.image}
              alt={slide.alt[language]}
              aria-hidden={index !== activeHeroSlide}
            />
          ))}
          <div className="hero-art-caption">
            <span>{text.heroImageLabel}</span>
            <div
              className="hero-slide-controls"
              aria-label={text.heroImageLabel}
            >
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  className={
                    index === activeHeroSlide
                      ? "hero-slide-dot hero-slide-dot--active"
                      : "hero-slide-dot"
                  }
                  onClick={() => setActiveHeroSlide(index)}
                  aria-label={`${text.heroImageLabel} ${index + 1}`}
                  aria-pressed={index === activeHeroSlide}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="hero-side-note">{text.brandFull}</div>
      </section>

      <section className="promise-strip" id="our-story">
        {text.promises.map((promise, index) => (
          <Fragment key={promise}>
            {index > 0 && <span className="promise-divider" />}
            <p>
              <span>0{index + 1}</span> {promise}
            </p>
          </Fragment>
        ))}
      </section>

      <section className="collection-section" id="collection">
        <div className="collection-heading">
          <div>
            <p className="eyebrow">{text.collectionEyebrow}</p>
            <h2>
              {text.collectionTitle} <em>{text.collectionEmphasis}</em>
            </h2>
          </div>
          <p className="collection-note">{text.collectionNote}</p>
        </div>
        <div className="collection-toolbar">
          <div
            className="filter-list"
            role="group"
            aria-label={text.filtersLabel}
          >
            {["all", "sweet", "savoury"].map((filter) => (
              <button
                type="button"
                key={filter}
                className={`filter-button ${activeFilter === filter ? "filter-button--active" : ""}`}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {text.filters[filter]}
              </button>
            ))}
          </div>
          <p className="fresh-note">
            <span /> {text.fresh}
          </p>
        </div>
        <ProductGrid
          activeFilter={activeFilter}
          cart={cart}
          onAdd={addToCart}
          language={language}
          text={text}
        />
      </section>

      <CustomerReviews language={language} text={text} />

      <section className="closing-banner">
        <div className="closing-diya" aria-hidden="true">
          ✦
        </div>
        <p>{text.closingEyebrow}</p>
        <h2>
          {text.closingTitle} <em>{text.closingEmphasis}</em>
        </h2>
        <a href="#collection">
          {text.chooseFavourites} <ArrowRight size={16} />
        </a>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#" aria-label={text.brandFull}>
          <img
            className="brand-logo"
            src="/assets/ms-faral.png"
            alt=""
            aria-hidden="true"
          />
          <span className="brand-copy">
            <span className="brand-short">{text.brand}</span>
            <span className="brand-full">{text.footerBrand}</span>
          </span>
        </a>
        <p>{text.footerLine}</p>
        <span>© 2026 {text.brand}</span>
      </footer>

      {cartOpen && (
        <CartSheet
          cart={cart}
          onClose={() => setCartOpen(false)}
          onChangeQuantity={changeQuantity}
          language={language}
          text={text}
        />
      )}
    </main>
  );
}

export default App;

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import "./HeroSlider.css";

// Replace these with your own images
// import vegetableImg from "../assets/slider/vegetables.png";
// import fruitImg from "../assets/slider/fruits.png";
// import readyImg from "../assets/slider/ready-to-eat.png";

const slides = [
  {
    id: 1,
    badge: "SHREE KAMAL NAYAN FROZEN FOOD LLP",
    title1: "Farm Fresh",
    title2: "Frozen Vegetables",
    description:
      "Premium quality vegetables harvested fresh and frozen instantly to preserve nutrition, freshness and natural taste.",

    button: "Shop Vegetables",
    link: "/products?category=Frozen Vegetables",
    // image: vegetableImg,
    color: "#0b4f56",
  },

  {
    id: 2,
    badge: "100% NATURAL FRUITS",

    title1: "Sweetness",
    title2: "Frozen Forever Fresh",

    description:
      "Delicious frozen fruits packed with vitamins and freshness. Perfect for smoothies, desserts and healthy meals.",

    button: "Shop Fruits",
    link: "/products?category=Frozen Fruits",
    // image: fruitImg,
    color: "#d32f2f",
  },

  {
    id: 3,
    badge: "READY TO EAT",

    title1: "Quick Meals",
    title2: "Ready In Minutes",

    description:
      "Tasty frozen ready-to-eat products prepared with premium ingredients. Heat, serve and enjoy anytime.",

    button: "Explore Products",
    link: "/products?category=Ready To Eat",
    // image: readyImg,
    color: "#f57c00",
  },
];

export default function Slider() {
  return (
    <section className="hero-slider">

      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        loop={true}
        speed={900}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide">

              <div className="hero-left">

                <span className="hero-badge">
                  {slide.badge}
                </span>

                <h1>
                  {slide.title1}
                  <br />
                  <span
                    style={{
                      color: slide.color,
                    }}
                  >
                    {slide.title2}
                  </span>
                </h1>

                <p>{slide.description}</p>

                <div className="hero-buttons">

                  <Link
                    className="btn-primary"
                    to={slide.link}
                  >
                    {slide.button}
                  </Link>

                  <Link
                    className="btn-outline"
                    to="/about"
                  >
                    Our Story
                  </Link>

                </div>

              </div>

              <div className="hero-right">

                <img
                //   src={slide.image}
                  alt={slide.title2}
                />

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}
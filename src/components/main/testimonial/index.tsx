import { Link } from "react-router-dom";
import styles from "./assets/css/styles.module.css";
import TestimonialItem from "./testimonialItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState } from "react";
import { slides } from "@/constants/main/testimonials";
import { useTranslation } from "react-i18next";
import { Item } from "@/models/ITestimonialItem";

const TestimonialSection = () => {
  const { t } = useTranslation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setInit] = useState<boolean>();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className={styles.testimonial}>
        <div className={`container ${styles.container}`}>
          <div className={styles.shape1}>
            <span></span>
          </div>
          <header className={styles.header}>
            <div>
              <h2 className={styles.title}>
                {t("home.testimonial.title")}
                <span>{t("home.testimonial.titleSpan")}</span>
              </h2>
              <p className={styles.description}>
                {t("home.testimonial.description")}
              </p>
            </div>
            <div className={styles.btnGroup}>
              <button ref={prevRef}>
                <i className="bi bi-chevron-left"></i>
              </button>
              <button ref={nextRef} className={styles.active}>
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </header>
          <Swiper
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={() => setInit(true)}
            spaceBetween={25}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            speed={1000}
            grabCursor={true}
            modules={[Autoplay, Navigation]}
          >
            {slides.map((slide: Item) => (
              <SwiperSlide key={slide.id}>
                <TestimonialItem item={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="text-center">
            <Link to="/about/team" className={styles.btnMore}>
              {t("home.testimonial.btnMore")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;

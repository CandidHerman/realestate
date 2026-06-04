'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Testimonial.module.css';

const testimonials = [
  {
  id: 1,
  text: "I was impressed by the professionalism and transparency throughout the purchase process. The land documents were genuine, and I received all the support I needed to secure my property with confidence.",
  name: "Kwame Asante",
  role: "Property Investor, Accra",
  image: "/land3.jpg"
},
{
  id: 2,
  text: "Finding trustworthy land in Ghana can be challenging, but this team made everything straightforward. From site inspection to documentation, the experience was smooth and stress-free.",
  name: "Akosua Mensah",
  role: "Business Owner, Kumasi",
  image: "/land2.png"
},
{
  id: 3,
  text: "The location of the land and the quality of service exceeded my expectations. Their team handled every detail professionally, giving me confidence in my investment for the future.",
  name: "Kwame Asante",
  role: "Real Estate Investor, Accra",
  image: "/land3.jpg"
},
{
  id: 4,
  text: "I purchased land for a residential project, and the entire process was seamless. The documentation was clear, the site matched the description, and the support was exceptional.",
  name: "Akosua Mensah",
  role: "Property Developer, Kumasi",
  image: "/land2.png"
}
];

export default function TestimonialSlider() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>What Our Clients Are Saying</h2>
        <p className={styles.subtitle}>
          Hear from our satisfied clients about their experiences and success stories with our services.
        </p>
      </div>

      <div className={styles.sliderWrapper}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: `.${styles.navBtnNext}`,
            prevEl: `.${styles.navBtnPrev}`,
          }}
          pagination={{
            clickable: true,
            el: `.${styles.progressContainer}`,
            bulletClass: styles.bar,
            bulletActiveClass: styles.activeBar,
          }}
          grabCursor={true} // Enables the hand icon for dragging
          className={styles.mySwiper}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.card}>
                <div className={styles.textSide}>
                  <span className={styles.quoteIcon}>“</span>
                  <p className={styles.testimonialText}>{item.text}</p>
                  
                  <div className={styles.clientMeta}>
                    <h3 className={styles.clientName}>{item.name}</h3>
                    <p className={styles.clientRole}>{item.role}</p>
                  </div>
                  
                  {/* Swiper will inject bullets here */}
                  <div className={styles.progressContainer}></div>
                </div>

                <div className={styles.imageSide}>
                  <img src={item.image} alt={item.name} className={styles.clientImage} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons positioned outside the Swiper container */}
        <button className={`${styles.navBtn} ${styles.navBtnPrev}`}>←</button>
        <button className={`${styles.navBtn} ${styles.navBtnNext}`}>→</button>
      </div>
    </section>
  );
}
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-teal-400 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">What People Say</h2>

      <Swiper spaceBetween={30} slidesPerView={0}>
        <SwiperSlide>
          <div className="bg-amber-200 rounded-xl text-center">
            <p>This tool changed how our team works!</p>
            <h4 className="mt-4 text-blue-400">- John Doe</h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;

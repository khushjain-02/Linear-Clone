import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-20 md:px-6 lg:px-8"
    >
      <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-slate-50 md:mb-12 md:text-4xl">
        Teams that switch, don&apos;t switch back
      </h2>

      <div className="mx-auto max-w-3xl">
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 1.2 },
            1024: { slidesPerView: 1.5 },
          }}
        >
          <SwiperSlide>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 text-center shadow-lg shadow-slate-950/40">
              <p className="text-sm text-slate-200 md:text-base">
                “This tool completely changed how our engineering team works. Our sprints
                finally feel focused, and we ship faster without the chaos.”
              </p>
              <h4 className="mt-4 text-sm font-medium text-sky-300 md:text-base">
                John Doe · Engineering Manager
              </h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

import React from "react";
import { useGetNowPlayingQuery } from "../../services/movieApi";
import CardMovie from "../cardMovie/CardMovie";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

interface IProps {
  width: number;
}
const HotMovieSlide: React.FC<IProps> = (width) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { error, data, isLoading } = useGetNowPlayingQuery(undefined);
  return (
    <>
      <div className="wrapper">
        <Swiper
          pagination={{ dynamicBullets: true }}
          navigation={true}
          spaceBetween={10}
          slidesPerView={
            width.width > 768 ? 5.2 : width.width > 450 ? 4.2 : 2.2
          }
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {isLoading
            ? null
            : data?.results.map((item) => (
                <SwiperSlide>
                  <CardMovie data={item} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </>
  );
};

export default HotMovieSlide;

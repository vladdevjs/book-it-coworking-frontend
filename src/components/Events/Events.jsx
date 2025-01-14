import React from "react";
import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import { EventsItem } from "../EventsItem/EventsItem";
import { SectionTitle } from "../SectionTitle/SectionTitle";

import { SWIPER_BREAKPOINTS } from "../../utils/constants";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Events.scss";
import { NotFoundError } from "../NotFoundError/NotFoundError";

SwiperCore.use([Pagination]);

export const Events = ({ eventsArray }) => (
  <section className="events">
    <SectionTitle
      titleClass="section-title_margin-to-subtitle"
      titleText="Мероприятия"
    />
    <p className="events__subheader">
      Здесь собраны все анонсы о предстоящих мероприятиях
      на&nbsp;базе&nbsp;наших коворкингов
    </p>

    {eventsArray.length === 0 ? (
      <NotFoundError
        titleText="Данные с сервера не получены"
        subtitleText="Попробуйте чуть позже"
        directionRow
      />
    ) : (
      <div className="events__list">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          breakpoints={SWIPER_BREAKPOINTS}
        >
          {eventsArray.map((event) => (
            <SwiperSlide key={event.id}>
              <EventsItem event={event} />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination" />
        </Swiper>
      </div>
    )}
  </section>
);

Events.propTypes = {
  eventsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      address: PropTypes.string,
      meetingQuantity: PropTypes.number,
      url: PropTypes.string,
      date: PropTypes.string.isRequired,
    }),
  ),
};

Events.defaultProps = {
  eventsArray: [
    {
      id: undefined,
      name: undefined,
      image: undefined,
      address: undefined,
      meetingQuantity: undefined,
      url: undefined,
      date: undefined,
    },
  ],
};

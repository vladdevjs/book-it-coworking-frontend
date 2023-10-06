import React from "react";
import { YMaps, Map as YandexMap, Placemark } from "@pbe/react-yandex-maps";
import PropTypes from "prop-types";
import "./Map.scss";
import MapIcon from "../../images/map.png";

import Star from "../../images/star.svg";
import Tag from "../../images/tag.svg";

export const MainMap = ({ isActive, points, defaultState }) =>
  isActive && (
    <YMaps>
      <div className="map">
        <YandexMap
          width="100%"
          height="741px"
          defaultState={defaultState}
          modules={[
            "control.ZoomControl",
            "control.FullscreenControl",
            "geoObject.addon.balloon",
            "geoObject.addon.hint",
          ]}
        >
          {points.map((point) => (
            <Placemark
              key={point.id}
              defaultGeometry={point.coordinates}
              properties={{
                balloonContentHeader: `<img src="${point.image}" alt="${point.name}" class="map__image" height="150" width="200">`,
                balloonContentBody: `
              <div class='map__body-wrapper'>
              <div class ="map__row">
              <span class="map__name">${point.name}</span><div class="map__rating-container"><span class="map__rating">${point.rating}</span><img src="${Star}" class="map__icon" alt="Рейтинг" /></div></div>
              <div class ="map__address-container"><img src="${Tag}" alt="Тег" /><span class="map__address">${point.address}</span></div><a href = "${point.link}" class="map__button">Подробнее</a>
              </div> `,

                balloonContentFooter: "",
              }}
              options={{
                iconLayout: "default#image",
                iconImageHref: MapIcon,
                iconImageSize: [40, 40],
                iconImageOffset: [-20, -20],
              }}
            />
          ))}
        </YandexMap>
      </div>
    </YMaps>
  );

MainMap.propTypes = {
  isActive: PropTypes.bool,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      coordinates: PropTypes.arrayOf(PropTypes.number),
      id: PropTypes.number,
      rating: PropTypes.string,
      name: PropTypes.string,
      link: PropTypes.string,
      image: PropTypes.string,
      address: PropTypes.string,
    }),
  ),
  defaultState: PropTypes.shape({
    center: PropTypes.arrayOf(PropTypes.number),
    zoom: PropTypes.number,
    controls: PropTypes.arrayOf(PropTypes.string),
  }),
};

MainMap.defaultProps = {
  isActive: false,
  points: [],
  defaultState: {},
};

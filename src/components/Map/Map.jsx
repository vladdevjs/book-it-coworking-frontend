import React, { useState, useRef } from "react";
import { YMaps, Map as YandexMap, Placemark } from "@pbe/react-yandex-maps";
import PropTypes from "prop-types";
import "./Map.scss";

import Button from "../UI-kit/Button/Button";

import { generateCenterFromPoints } from "../../utils/utils";
import { DEFAULT_ZOOM } from "../../utils/constants";

import MapIcon from "../../images/map.png";
import Star from "../../images/star.svg";
import Tag from "../../images/tag.svg";

export const MainMap = ({ points }) => {
  const [isMap, setMap] = useState(false);
  const center = generateCenterFromPoints(points);
  const mapRef = useRef(null);

  const handleMapButtonClick = () => {
    setMap(!isMap);
    if (!isMap) {
      mapRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="map__container" ref={mapRef}>
      <Button
        onClick={handleMapButtonClick}
        btnClass={`button_type_tertiary${
          isMap ? " button_type_tertiary-shown" : ""
        }`}
        btnText={isMap ? "Скрыть карту" : "Показать на карте"}
      />
      <YMaps>
        <div className={`map ${isMap ? "map_active" : "map_inactive"}`}>
          <YandexMap
            width="100%"
            height="741px"
            defaultState={{
              center,
              zoom: DEFAULT_ZOOM,
              controls: ["zoomControl", "fullscreenControl"],
            }}
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
                  balloonContentHeader: `<img src="${point.main_photo}" alt="${point.name}" class="map__image" height="150" width="200">`,
                  balloonContentBody: `
              <div class='map__body-wrapper'>
              <div class ="map__row">
              <span class="map__name">${
                point.name
              }</span><div class="map__rating-container"><span class="map__rating">${
                point.rating ?? ""
              }</span><img src="${Star}" class="map__icon" alt="Рейтинг" /></div></div>
              <div class ="map__address-container"><img src="${Tag}" alt="Тег" /><span class="map__address">${
                point.get_full_address_str
              }</span></div><a href = "/points/${
                point.id
              }" class="map__button">Подробнее</a>
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
    </div>
  );
};

MainMap.propTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
      coordinates: PropTypes.arrayOf(PropTypes.number),
      id: PropTypes.number,
      rating: PropTypes.number,
      name: PropTypes.string,
      main_photo: PropTypes.string,
      get_full_address_str: PropTypes.string,
    }),
  ),
};

MainMap.defaultProps = {
  points: [],
};

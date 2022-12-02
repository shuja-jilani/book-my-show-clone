import React, { useState } from 'react';
import HeroSlider from 'react-slick';
import { NextArrow, PrevArrow } from './Arrows.Component';

const HeroCarousel = () => {
  const [images, setImages] = useState(
    [
      {
        "adult": false,
        "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
        "genre_ids": [
          28,
          14,
          878
        ],
        "id": 436270,
        "original_language": "en",
        "original_title": "Black Adam",
        "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
        "popularity": 16093.223,
        "poster_path": "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
        "release_date": "2022-10-19",
        "title": "Black Adam",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 1791
      },
      {
        "adult": false,
        "backdrop_path": "/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
        "genre_ids": [
          14,
          28,
          35,
          80
        ],
        "id": 1013860,
        "original_language": "en",
        "original_title": "R.I.P.D. 2: Rise of the Damned",
        "overview": "When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.",
        "popularity": 5244.595,
        "poster_path": "/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
        "release_date": "2022-11-15",
        "title": "R.I.P.D. 2: Rise of the Damned",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 143
      },
    ]);

  const settingsLG = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 2000,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
  }

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <>
      <div className='lg:hidden'>
        <HeroSlider {...settings}>
          {
            images.map((images, index) => (
              <div className='w-full h-56 md:h-80 py-3' key={index}>
                <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                  alt="Hero Banner"
                  className='w-full h-full rounded-md object-cover'  />
              </div>
            ))
          }
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {
            images.map((images , index) => (
              <div className='w-full h-96 px-2 py-3' key={index}>
                <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                  alt="Hero Banner"
                  className='w-full h-full rounded-md object-cover' />
              </div>
            ))
          }
        </HeroSlider>
      </div>
    </>
  )
}

export default HeroCarousel
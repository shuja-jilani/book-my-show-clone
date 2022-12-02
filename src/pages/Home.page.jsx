import React, { useEffect, useState } from 'react';
import axios from "axios";

//components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';

//Layout hoc 
import DefaultLayoutHoc from '../layout/Default.layout'


const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  useEffect(() => {
    const requiestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=29404698e1353363f45e25ea5f8e757a'
      );
      setRecommendedMovies(getTopRatedMovies.data.results); //jo api se json aya h usme results wala object hi humara data h
    };
    requiestTopRatedMovies();
  }, []); //empty dependency means we only want data once at the time of loading of the componnent

  return (
    <>
      <HeroCarousel />
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3" >
          The Best of Entertainment</h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider title="Recommended Movies"
          subtitle="List of recommended movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay" className='w-full h-full' />
          </div>
          <PosterSlider title="Premiers"
            subject="Brand new releases every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider
          title="Online Streaming Event"
          subject=""
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>

    </>
  )
};

export default DefaultLayoutHoc(HomePage); //encapsulation